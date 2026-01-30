"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCategory, setSortByPrice } from "@/store/filterSlices";

const FilterBar = () => {
    const dispatch = useAppDispatch();
    const { category, sortByPrice } = useAppSelector (
        (state) => state.filters
    )

    return(
        <section className="flex flex-wrap gap-4 mb-6">

        {/* Category Sort */}
            <label className="sr-only" htmlFor="catugory">
                <select 
            value={category}
            id="category"
            aria-label="Filter by category"
            className="border rounded-md px-3 py-2 text-sm"
            onChange={(e) => dispatch(setCategory(e.target.value))}>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelery</option>
                <option value="men's clothing">Men&apos;s</option>
                <option value="women's clothing">Women&apos;s</option>
            </select>
            </label>
            
            {/* Price Sort */}
            <label className="sr-only" htmlFor="sort">
            <select 
            value={sortByPrice ?? ""}
            onChange={(e) => {
                const value = e.target.value;
                dispatch(
                    setSortByPrice(
                        value === "" ? null : (value as "ascend" | "descend")
                    )
                );
            }}
            id="sort"
            aria-label="Sort by price"
            className="border rounded-md px-3 py-2 text-sm">
                <option value="none">Sort by</option>
                <option value="ascend">Price: Low → High</option>
                <option value="descend">Price: High → Low</option>
            </select>
            </label>
        </section>
    );
};

export default FilterBar;