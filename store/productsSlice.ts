import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product"

export const fetchProducts = createAsyncThunk<
 Product[],
 number
 >("products/fetch", async (page) => {
    const res = await fetch(
        `https://fakestoreapi.com/products?limit=10&page=${page}`
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
            .addCase(fetchProducts.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items.push(...action.payload);
            });
    },
 });

 export const { incrementPage } = productsSlice.actions;
 export default productsSlice.reducer;