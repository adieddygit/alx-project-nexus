import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
    id: string;
    email: string;
}

interface AuthState {
    user: User | null;
    status: "idle" | "loading" | "error";
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    status: "idle",
    error: null,
};

export