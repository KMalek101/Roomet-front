import { useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import 'react-phone-number-input/style.css'

export default function Settings() {
    const [active, setActive] = useState("Account");

    const settings = [
        "Account",
        "Notifications",
        "Language",
        "Appearance",
        "Privacy & Security",
    ];

    const renderSettings = () => {
        switch (active) {
            case "Account":
                return (
                        <div className="flex flex-col gap-6">
                            <div>
                                <label className="block mb-2 font-medium">Full name</label>
                                <input
                                    type="text"
                                    value={"Kaouche Malek"}
                                    className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                    placeholder="Your username"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Username</label>
                                <input
                                    type="text"
                                    value={"KMalek101"}
                                    className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                    placeholder="Your username"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Email</label>
                                <input
                                    type="text"
                                    value={"m_kaouche@estin.dz"}
                                    className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                    placeholder="Your username"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-sm">Phone number</label>
                                <PhoneInputWithCountrySelect
                                    international
                                    defaultCountry="DZ"
                                    value={"233"}
                                    style={{ '--PhoneInputCountryFlag-height': '2em' }}
                                    onChange={(e) => console.log(e)}
                                    className="!rounded-lg !border !border-gray-300 !shadow-sm"
                                />
                            </div>

                        </div>
                );
            case "Notifications":
                return (
                    <>
                        <label className="flex items-center gap-2 mb-2">
                            <input type="checkbox" />
                            Email Notifications
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Push Notifications
                        </label>
                    </>
                );
            case "Language":
                return (
                    <>
                        <label className="block mb-2 font-medium">Choose Language</label>
                        <select className="p-2 rounded text-black w-full">
                            <option>English</option>
                            <option>French</option>
                            <option>Arabic</option>
                        </select>
                    </>
                );
            case "Appearance":
                return (
                    <>
                        <label className="block mb-2 font-medium">Theme</label>
                        <select className="p-2 rounded text-black w-full mb-4">
                            <option>System</option>
                            <option>Light</option>
                            <option>Dark</option>
                        </select>
                        <label className="block mb-2 font-medium">Accent Color</label>
                        <input type="color" className="w-10 h-10" />
                    </>
                );
            case "Privacy & Security":
                return (
                    <>
                        <label className="flex items-center gap-2 mb-2">
                            <input type="checkbox" />
                            Make Profile Private
                        </label>
                        <button className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600">
                            Delete My Account
                        </button>
                    </>
                );
            default:
                return <p>Unknown setting</p>;
        }
    };

    return (
        <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 rounded-md flex-1">
            <div className="flex gap-8">
                {/* Left menu */}
                <div className="flex flex-col gap-2">
                    {settings.map((setting) => (
                        <p
                            key={setting}
                            onClick={() => setActive(setting)}
                            className={`cursor-pointer px-4 py-2 rounded-md transition-all font-semibold
                                ${
                                    active === setting
                                        ? "bg-[var(--g-color-opacity)] text-[var(--green-color)]"
                                        : "bg-transparent text-[var(--g-color)] hover:bg-[var(--g-color-opacity-v2)]"
                                }`}
                        >
                            {setting}
                        </p>
                    ))}
                </div>

                {/* Vertical divider */}
                <div className="h-full w-[1px] px-2 py-7">
                    <div className="h-full w-[1px] bg-[var(--g-color)] opacity-25"></div>
                </div>

                {/* Content area */}
                <div className="flex-1 p-4 bg-[var(--primary-color)] rounded-md text-[var(--black-color)]">
                    <h2 className="text-xl font-bold mb-4">{active}</h2>
                    <p className="text-xs text-[var(--g-color)]">Update your {active} settings.</p>
                    <div className="h-[1px] w-full px-2 py-5">
                        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                    </div>
                    {renderSettings()}
                </div>
            </div>
        </div>
    );
}
