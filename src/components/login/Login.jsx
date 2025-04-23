import { useState } from "react";
import { login } from "@/utils/auth";  // Assuming a login function in your utils

export function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            alert("Both fields are required.");
            return;
        }

        try {
            setLoading(true);
            const dataToSend = {
                email: formData.email,
                password: formData.password,
            };
            await login(dataToSend);
            alert("Logged in successfully!");
        } catch (error) {
            alert("An error occurred during login. Please try again.");
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
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                    type="email"
                    required
                />
            </label>

            <label className="flex flex-col gap-2">
                <p className="text-[10px]">Password</p>
                <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                    type="password"
                    required
                />
            </label>

            <button
                type="submit"
                disabled={loading}
                className="bg-[var(--green-color)] rounded-md py-2 text-[var(--w-color)] w-min px-16 text-nowrap mt-2 cursor-pointer"
            >
                {loading ? "Loggin In..." : "Login"}
            </button>

            <p className="text-[12px] mt-2">
                You don't have an account? <a className="text-[var(--green-color)] underline" href="#">Sign Up</a>
            </p>
        </form>
    );
}
