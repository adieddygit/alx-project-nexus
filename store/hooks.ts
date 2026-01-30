import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * Typed version of useDispartch
 * Ensure correct dispatch typing across the app
*/ 

export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed version of useSelector
 * Ensures correct state selection typing
 */

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;