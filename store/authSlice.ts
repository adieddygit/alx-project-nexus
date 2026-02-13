import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
    id: string;
    email: string;
}

interface AuthState {
    user: User | null;
    status: "idle" | "loading" | "error";
    error: string | null;
    page?: number;
    hasMore: boolean;
}

const initialState: AuthState = {
    user: null,
    status: "idle",
    error: null,
    page: 1,
    hasMore: true,
};

export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials: { email: string; password: string }) => {
        await new Promise((r) => setTimeout(r, 800)); // mock delay

        if (credentials.password !== "password123") {
            throw new Error("Invalid credentials");
        }

        return { id: "1", email: credentials.email };
    }
);

export const signupUser = createAsyncThunk(
    "auth/signup",
    async (data: { email: string; password: string }) => {
        await new Promise((r) => setTimeout(r, 800));
        return { id: "1", email: data.email };
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = "idle";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message || "Login failed";
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.user = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;