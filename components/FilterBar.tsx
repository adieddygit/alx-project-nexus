"use client";

import { useAppDispatch } from "@/store/hooks";
import { setCategory, setSort } from "@/store/filterSlice";

const FilterBar = () => {
    const dispatch = useAppDispatch();

    return(
        <section className="flex flex-wrap gap-4 mb-6">
            <select 
            aria-label="Filter by category"
            className="border rounded-md px-3 py-2 text-sm"
            onChange={(e) => dispatch(setCategory(e.target.value))}>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelery</option>
                <option value="men's clothing">Men&apos;s</option>
                <option value="women's clothing">Women&apos;s</option>
            </select>

            <select 
            aria-label="Sort by price"
            className="border rounded-md px-3 py-2 text-sm"
            onChange={(e) => dispatch(setSort(e.target.value))}>
                <option value="none">Sort by</option>
                <option value="ascend">Price: Low → High</option>
                <option value="descend">Price: High → Low</option>
            </select>
        </section>
    );
};

export default FilterBar;