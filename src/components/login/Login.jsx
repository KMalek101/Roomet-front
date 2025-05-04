import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/auth";

export function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        setErrors(prev => ({ ...prev, [name]: "" }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        // Reset errors
        setErrors({
            email: "",
            password: "",
            general: ""
        });

        // Basic validation
        if (!formData.email) {
            setErrors(prev => ({ ...prev, email: "Email is required" }));
            return;
        }

        if (!formData.password) {
            setErrors(prev => ({ ...prev, password: "Password is required" }));
            return;
        }

        // Email format validation
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
            return;
        }

        try {
            setLoading(true);
            const dataToSend = {
                email: formData.email,
                password: formData.password,
            };
            await login(dataToSend);
            router.push("/blocks");
        } catch (error) {
            // Handle specific error messages from your API
            if (error.message.includes("Invalid credentials")) {
                setErrors(prev => ({
                    ...prev,
                    general: "Invalid email or password"
                }));
            } else {
                setErrors(prev => ({
                    ...prev,
                    general: "An error occurred. Please try again."
                }));
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 shadow-xl p-4 rounded-xl z-20 pl-10 bg-[var(--w-color)] h-[400px] w-[400px]"
        >
            <h1 className="font-bold text-3xl pb-2.5">Login</h1>
            <label className="flex flex-col gap-2">
                <p className="text-[10px]">Email</p>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ${
                        errors.email ? "border border-red-500" : ""
                    }`}
                    type="email"
                />
                {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                )}
            </label>

            <label className="flex flex-col gap-2">
                <p className="text-[10px]">Password</p>
                <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ${
                        errors.password ? "border border-red-500" : ""
                    }`}
                    type="password"
                />
                {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                )}
            </label>

            {errors.general && (
                <p className="text-red-500 text-sm">{errors.general}</p>
            )}

            <button
                type="submit"
                disabled={loading}
                className="bg-[var(--green-color)] rounded-md py-2 text-[var(--w-color)] w-min px-16 text-nowrap mt-2 cursor-pointer disabled:opacity-50"
            >
                {loading ? "Logging In..." : "Login"}
            </button>

            <p className="text-[12px] mt-2">
                You don't have an account? <a className="text-[var(--green-color)] underline" href="#">Sign Up</a>
            </p>
        </form>
    );
}