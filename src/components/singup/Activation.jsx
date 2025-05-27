import { activateUser } from "@/utils/activation";
import { useState } from "react";

export function Activation({ token }) {
    const [resent, setResent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            password: "",
            confirmPassword: ""
        };

        if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
            valid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords don't match";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
        if (!validateForm()) return;

        setLoading(true);
        try {
            await activateUser(token, { password: formData.password });
            setSuccess(true);
        } catch (err) {
            setError(err.message || "Activation failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="flex flex-col items-center gap-6 shadow-xl p-8 rounded-xl z-20 bg-[var(--w-color)] max-w-md mx-auto text-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Account Activated!</h2>
                    <p className="text-sm text-[var(--g-color)]">
                        Your account has been successfully activated.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-6 shadow-xl p-8 rounded-xl z-20 bg-[var(--w-color)] max-w-md mx-auto text-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Activate Your Account</h2>
                <p className="text-sm text-[var(--g-color)]">
                    Please activate your account by creating a password.
                </p>
            </div>

            {error && (
                <div className="text-red-500 text-sm w-full p-2 bg-red-50 rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="space-y-4">
                    <label className="flex flex-col gap-1 text-left">
                        <span className="text-xs font-medium">Create Password</span>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`bg-[var(--g-color-opacity)] rounded-md py-2 px-3 text-sm focus:outline-1 ${
                                errors.password ? "focus:outline-red-500 border border-red-500" : "focus:outline-[var(--green-color)]"
                            }`}
                            placeholder="At least 8 characters"
                            required
                        />
                        {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
                    </label>

                    <label className="flex flex-col gap-1 text-left">
                        <span className="text-xs font-medium">Confirm Password</span>
                        <input
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`bg-[var(--g-color-opacity)] rounded-md py-2 px-3 text-sm focus:outline-1 ${
                                errors.confirmPassword ? "focus:outline-red-500 border border-red-500" : "focus:outline-[var(--green-color)]"
                            }`}
                            placeholder="Retype your password"
                            required
                        />
                        {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword}</span>}
                    </label>
                </div>

                <button
                    type="submit"
                    className={`w-full bg-[var(--green-color)] text-white py-2 rounded-md ${
                        loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                    }`}
                    disabled={loading}
                >
                    {loading ? "Activating..." : "Activate Account"}
                </button>
            </form>
        </div>
    );
}