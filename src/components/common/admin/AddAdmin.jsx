import { useState, useRef, useEffect } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { addAdmin } from "@/utils/admin"; // You'll need to create this API utility

export default function AddAdmin({ setShowAddAdmin }) {
    // Form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });
    
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: false
            }));
        }
    };

    const handlePhoneChange = (value) => {
        setFormData(prev => ({
            ...prev,
            phone: value
        }));
        if (errors.phone) {
            setErrors(prev => ({
                ...prev,
                phone: false
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {
            firstName: !formData.firstName.trim(),
            lastName: !formData.lastName.trim(),
            email: !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email),
            phone: !formData.phone
        };
        
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            setLoading(false);
            return;
        }

        try {
            const adminData = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                email: formData.email.trim(),
                phone: formData.phone
            };

            await addAdmin(adminData);
            console.log("Admin added successfully!");
            setShowAddAdmin(false);
        } catch (error) {
            console.error("Error submitting form:", error);
            console.error("Failed to add admin. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col bg-[var(--secondary-color)] rounded-md flex-1 w-[1200px]">
            <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 py-2 rounded-md flex-1">            
                <label className="flex">
                    <div className="w-86">
                        <p className="font-bold text-lg cursor-text">First Name</p>
                        <p className="text-xs text-[var(--g-color)] cursor-text">Admin's first name</p>
                    </div>
                    <div className="ml-56 flex flex-col">
                        <input 
                            type="text" 
                            name="firstName"
                            placeholder="ex: John" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 w-72 h-[44px] px-2 text-sm focus:outline-1 ${errors.firstName ? "focus:outline-red-500" : "focus:outline-[var(--green-color)]"}`}
                        />
                        {errors.firstName && <span className="text-red-500 text-xs mt-1">First name is required</span>}
                    </div>
                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <label className="flex">
                    <div className="w-86">
                        <p className="font-bold text-lg cursor-text">Last Name</p>
                        <p className="text-xs text-[var(--g-color)] cursor-text">Admin's last name</p>
                    </div>
                    <div className="ml-56 flex flex-col">
                        <input 
                            type="text" 
                            name="lastName"
                            placeholder="ex: Doe" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 w-72 h-[44px] px-2 text-sm focus:outline-1 ${errors.lastName ? "focus:outline-red-500" : "focus:outline-[var(--green-color)]"}`}
                        />
                        {errors.lastName && <span className="text-red-500 text-xs mt-1">Last name is required</span>}
                    </div>
                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <label className="flex">
                    <div className="w-86">
                        <p className="font-bold text-lg cursor-text">Email</p>
                        <p className="text-xs text-[var(--g-color)] cursor-text">Admin's email address</p>
                    </div>
                    <div className="ml-56 flex flex-col">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="ex: admin@univ.dz" 
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 w-72 h-[44px] px-2 text-sm focus:outline-1 ${errors.email ? "focus:outline-red-500" : "focus:outline-[var(--green-color)]"}`}
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1">{formData.email ? "Invalid email format" : "Email is required"}</span>}
                    </div>
                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex">
                        <div className="w-86">
                            <p className="font-bold text-lg cursor-text">Phone Number</p>
                            <p className="text-xs text-[var(--g-color)] cursor-text">Admin's phone number</p>
                        </div>
                        <div className="ml-56 flex flex-col">
                            <PhoneInputWithCountrySelect
                                international
                                defaultCountry="DZ"
                                value={formData.phone}
                                onChange={handlePhoneChange}                                    
                                style={{ '--PhoneInputCountryFlag-height': '2em'}}
                                className={`bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-md focus:outline-1 ${errors.phone ? "focus:outline-red-500" : "focus:outline-[var(--green-color)]"}`}
                            />
                            {errors.phone && <span className="text-red-500 text-xs mt-1">Phone number is required</span>}
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>
            </div>

            {/* Submit button */}
            <div className="flex gap-1.5 ml-auto pt-2 pb-1 px-2">
                <button 
                    onClick={() => {
                        if (!loading) {
                            setLoading(true);
                            handleSubmit();
                        }
                    }}
                    className={`bg-[var(--green-color)] p-2 font-medium text-[var(--w-color)] rounded-md cursor-pointer ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add Admin"}
                </button>
            </div>
        </div>
    )
}