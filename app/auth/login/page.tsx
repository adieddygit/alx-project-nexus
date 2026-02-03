"use client";

import AuthForm from "@/components/auth/AuthForm";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginUser } from "@/store/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { status, error } = useAppSelector((s) => s.auth);

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md space-y-6">
                <h1 className="text-3xl font-bold text-center">
                    Welcome back
                </h1>
                <AuthForm
                type="login"
                loading={status === "loading"}
                onSubmit={async (data) => {
                    const res = await dispatch(loginUser(data));
                    if (res.meta.requestStatus === "fulfilled") {
                        router.push("/");
                    }
                }}
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        </section>
    )
}
