"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { incrementPage } from "@/store/productsSlice";

const InfiniteLoader = () => {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                dispatch(incrementPage());
            }
        });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [dispatch]);

    return <div ref={ref} className="h-10" />
};

export default InfiniteLoader;