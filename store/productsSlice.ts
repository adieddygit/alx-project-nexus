import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product"

export const fetchProducts = createAsyncThunk<
 Product[],
 number
 >("products/fetch", async () => {
    const res = await fetch(
        `https://fakestoreapi.com/products`
    );
    return res.json();
 });

 const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [] as Product[],
        status: "idle",
        page: 1,
    },
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
    },
    extraReducers: (builder) => {
  builder
    // Fetch pending
    .addCase(fetchProducts.pending, (state) => {
      // Only set to loading if not already loading
      if (state.status !== "loading") {
        state.status = "loading";
      }
    })

    // Fetch fulfilled
    .addCase(fetchProducts.fulfilled, (state, action) => {
      // Deduplicate products to avoid duplicate keys in infinite scroll
      const existingIds = new Set(state.items.map((p) => p.id));

      const newProducts = action.payload.filter(
        (p) => !existingIds.has(p.id)
      );

      state.items.push(...newProducts);

      state.status = "succeeded";
    })

    // Fetch rejected
    .addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
},

    });


 export const { incrementPage } = productsSlice.actions;
 export default productsSlice.reducer;