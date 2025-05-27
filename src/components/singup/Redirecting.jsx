import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Redirecting() {
    const router = useRouter();
    const pathname = usePathname();
    const [status, setStatus] = useState("loading"); 
    const [retryCount, setRetryCount] = useState(0);
    const [countdown, setCountdown] = useState(5);

    const id = pathname.split("/").pop();

    const verifyEmail = () => {
        if (!id) {
            setStatus("error");
            return;
        }

        setStatus("verifying");
        
        fetch(`http://localhost:5000/api/auth/verify-email/${id}`, {
            method: "GET",
            credentials: 'include' 
        })
            .then((response) => {
                if (!response.ok) throw new Error("Verification failed");
                return response.json();
            })
            
            .then((data) => {
                if (data.success) {
                    setStatus("success");
                    // Start countdown for redirect
                    const timer = setInterval(() => {
                        setCountdown(prev => {
                            if (prev <= 1) {
                                clearInterval(timer);
                                router.replace("/dashboard");
                                return 0;
                            }
                            return prev - 1;
                        });
                    }, 1000);
                } else {
                    setStatus("error");
                }
            })
            .catch((error) => {
                console.error("Verification error:", error);
                if (retryCount < 2) {
                    // Auto-retry up to 2 times
                    setTimeout(() => {
                        setRetryCount(prev => prev + 1);
                        verifyEmail();
                    }, 2000);
                } else {
                    setStatus("error");
                }
            });
    };

    useEffect(() => {
        verifyEmail();
    }, [id, retryCount]);

    return (
        <div className="flex flex-col items-center gap-4 shadow-xl p-20 rounded-xl z-20 bg-[var(--w-color)] max-w-md mx-auto text-center">
            {status === "loading" && (
                <>
                    <h2 className="text-2xl font-bold">Loading...</h2>
                    <p className="text-sm text-[var(--g-color)]">
                        Preparing verification process...
                    </p>
                </>
            )}

            {status === "verifying" && (
                <>
                    <h2 className="text-2xl font-bold">Verifying Email</h2>
                    <p className="text-sm text-[var(--g-color)]">
                        Please wait while we verify your email address.
                    </p>
                    <div className="mt-4 animate-spin rounded-full h-10 w-10 border-t-2 border-[var(--green-color)]"></div>
                    {retryCount > 0 && (
                        <p className="text-xs text-yellow-600">
                            Attempt {retryCount + 1} of 3
                        </p>
                    )}
                </>
            )}

            {status === "error" && (
                <>
                    <h2 className="text-2xl font-bold text-red-500">Verification Failed</h2>
                    <p className="text-sm text-red-500 mb-4">
                        {id ? "Email verification link is invalid or expired." : "No verification ID provided."}
                    </p>
                    <button
                        onClick={() => {
                            setRetryCount(0);
                            setStatus("verifying");
                            verifyEmail();
                        }}
                        className="bg-[var(--green-color)] text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                        Try Again
                    </button>
                </>
            )}

            {status === "success" && (
                <>
                    <h2 className="text-2xl font-bold text-[var(--green-color)]">Email Verified!</h2>
                    <p className="text-sm text-[var(--green-color)]">
                        Redirecting to dashboard in {countdown} seconds...
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                        <div 
                            className="bg-[var(--green-color)] h-2.5 rounded-full" 
                            style={{ width: `${(5 - countdown) * 20}%` }}
                        ></div>
                    </div>
                </>
            )}
        </div>
    );
}