import { useState } from "react";
import { signUp } from "@/utils/auth";

export function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        if (!agreed) {
            alert("You must agree to the terms to continue");
            return;
        }
    
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match, please try again");
            return;
        }
    
        try {
            setLoading(true);
            const dataToSend = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
            };
            await signUp(dataToSend);
            alert("Signed up successfully!");
        } catch (error) {
            alert("An error occurred during sign-up... Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 shadow-xl p-4 rounded-xl z-20 pl-10 bg-[var(--w-color)]"
        >
            <h1 className="font-bold text-3xl pb-2.5">Sign Up</h1>

            <div className="flex gap-4">
                <label className="flex flex-col gap-2">
                    <p className="text-[10px]">First Name</p>
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-42 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                        type="text"
                        required
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <p className="text-[10px]">Last Name</p>
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-42 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                        type="text"
                        required
                    />
                </label>
            </div>

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

            <label className="flex flex-col gap-2">
                <p className="text-[10px]">Confirm Password</p>
                <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                    type="password"
                    required
                />
            </label>

            <div className="flex items-center justify-center gap-4 text-[12px]">
                <div
                    className={`w-4.5 h-4 rounded-sm cursor-pointer flex items-center justify-center text-white text-[12px] ${agreed ? 'bg-[var(--green-color)]' : 'bg-[var(--g-color-opacity)]'}`}
                    onClick={() => setAgreed(!agreed)}
                >
                    {agreed && (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.2287 6.60355C21.6193 6.99407 21.6193 7.62723 21.2287 8.01776L10.2559 18.9906C9.86788 19.3786 9.23962 19.3814 8.84811 18.9969L2.66257 12.9218C2.26855 12.5349 2.26284 11.9017 2.64983 11.5077L3.35054 10.7942C3.73753 10.4002 4.37067 10.3945 4.7647 10.7815L9.53613 15.4677L19.1074 5.89644C19.4979 5.50592 20.1311 5.50591 20.5216 5.89644L21.2287 6.60355Z"
                                fill="white"
                            />
                        </svg>
                    )}
                </div>

                <p>
                    By continuing, you agree to Roomet's{" "}
                    <a className="text-[var(--green-color)] underline" href="#">Terms of Use</a> and{" "}
                    <a className="text-[var(--green-color)] underline" href="#">Privacy Policy</a>
                </p>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-[var(--green-color)] rounded-md py-2 text-[var(--w-color)] w-min px-16 text-nowrap mt-2 cursor-pointer"
            >
                {loading ? "Signing Up..." : "Sign Up"}
            </button>

            <p className="text-[12px] mt-2">
                Already have an account? <a className="text-[var(--green-color)] underline" href="#">Sign In</a>
            </p>
        </form>
    );
}
