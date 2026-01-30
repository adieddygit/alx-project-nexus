import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortOrder = "ascend" | "descend";

interface FiltersState {
 category: string;
 sortByPrice: SortOrder | null;
}

const initialState: FiltersState = {
    category: "all",
    sortByPrice: null,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        },
        setSortByPrice(state, action: PayloadAction<SortOrder | null>) {
            state.sortByPrice = action.payload;
        },
        resetFilters(state) {
            state.category = "all";
            state.sortByPrice = null;
        },
    },
});

export const { setCategory, setSortByPrice, resetFilters} = filtersSlice.actions;

export default filtersSlice.reducer;

