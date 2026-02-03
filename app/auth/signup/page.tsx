"use client";

import AuthForm from "@/components/auth/AuthForm";
import { signupUser } from "@/store/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md space-y-6">
                <h1 className="text-3xl font-bold text-center">Create an account</h1>

                <AuthForm
                type="signup"
                loading={false}
                onSubmit={async (data) => {
                    await dispatch(signupUser(data));
                    router.push("/");
                }}
                />
            </div>
        </section>
    );
}