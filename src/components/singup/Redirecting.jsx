"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Redirecting() {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const id = pathname.split("/").pop();

    useEffect(() => {
        if (id) {
            setTimeout(() => {
                setSuccess(true);
                setLoading(false);

                setTimeout(() => {
                    router.replace("/dashboard");
                }, 1000);
            }, 2000);
        } else {
            setError(true);
            setLoading(false);
        }
    }, [id, pathname, router]);

    return (
        <div className="flex flex-col items-center gap-4 shadow-xl p-20 rounded-xl z-20 bg-[var(--w-color)] max-w-md mx-auto text-center">
            {loading ? (
                <>
                    <h2 className="text-2xl font-bold">Redirecting...</h2>
                    <p className="text-sm text-[var(--g-color)]">
                        Verifying your email...
                        <br />
                        Please wait a moment.
                    </p>
                    <div className="mt-4 animate-spin rounded-full h-10 w-10 border-t-2 border-[var(--green-color)]"></div>
                </>
            ) : error ? (
                <>
                    <h2 className="text-2xl font-bold text-red-500">Error</h2>
                    <p className="text-sm text-red-500">
                        Verification ID not found. Please try again.
                    </p>
                </>
            ) : success ? (
                <>
                    <h2 className="text-2xl font-bold text-[var(--green-color)]">Verification Successful!</h2>
                    <p className="text-sm text-[var(--green-color)]">
                        You will be redirected to your dashboard shortly.
                    </p>
                </>
            ) : (
                <h2 className="text-2xl font-bold">Redirecting...</h2>
            )}
        </div>
    );
}