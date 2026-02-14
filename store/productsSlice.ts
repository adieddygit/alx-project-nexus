import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
/* ---------- THUNK ---------- */
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>(
  "products/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data: Product[] = await res.json();
      return data;
    } catch {
      return rejectWithValue("Fetch failed");
    }
  }
);

/* ---------- SLICE ---------- */

interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  page: number;
  hasMore: boolean;
}

const initialState: ProductsState = {
  items: [],
  status: "idle",
  page: 1,
  hasMore: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const existingIds = new Set(state.items.map((p) => p.id));

        const newProducts = action.payload.filter(
          (p) => !existingIds.has(p.id)
        );

        state.items.push(...newProducts);
        state.status = "succeeded";

        // If no new products returned → stop infinite scroll
        if (newProducts.length === 0) {
          state.hasMore = false;
        }
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { incrementPage } = productsSlice.actions;
export default productsSlice.reducer;
