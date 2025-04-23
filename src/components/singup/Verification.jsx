import { useState } from "react";

export function Verification({ email }) {
    const [resent, setResent] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleResend() {
        setLoading(true);
        try {
            // Mock resend logic, replace with actual resend function
            await new Promise((res) => setTimeout(res, 1000));
            setResent(true);
        } catch (error) {
            alert("Failed to resend verification email. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 shadow-xl p-6 rounded-xl z-20 bg-[var(--w-color)] max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold">Verify Your Email</h2>
            <p className="text-sm text-[var(--g-color)]">
                A verification link has been sent to <strong>{email}</strong>.
                <br />
                Please check your inbox and click the link to activate your account.
            </p>
            <p className="text-xs text-[var(--g-color)] opacity-75">
                Didn`t receive it? Be sure to check your spam or junk folder.
            </p>
            <button
                onClick={handleResend}
                disabled={loading || resent}
                className="bg-[var(--green-color)] text-[var(--w-color)] py-2 px-6 rounded-md mt-2 text-sm disabled:opacity-60 cursor-pointer"
            >
                {resent ? "Link Resent!" : loading ? "Resending..." : "Resend Email"}
            </button>
        </div>
    );
}
