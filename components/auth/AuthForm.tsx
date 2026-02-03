"use client";

import { useState } from "react";
import AuthInput from "./AuthInput";

interface Props {
    type: "login" | "signup";
    onSubmit: (data: { email: string; password: string }) => void;
    loading: boolean;
}

const AuthForm = ({ type, onSubmit, loading }: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form
            onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ email, password });
        }}
        className="space-y-4"
        >
            <AuthInput
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <AuthInput
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button
             disabled={loading}
             className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
             >
                {type === "login" ? "Login" : "Sign Up"}
             </button>
        </form>
    );
};

export default AuthForm;