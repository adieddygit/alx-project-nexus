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
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [] as Product[],
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* ---- Pending ---- */
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })

      /* ---- Fulfilled ---- */
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const existingIds = new Set(state.items.map((p) => p.id));

        const newProducts = action.payload.filter(
          (p) => !existingIds.has(p.id)
        );

        state.items.push(...newProducts);
        state.status = "succeeded";
      })

      /* ---- Rejected ---- */
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
