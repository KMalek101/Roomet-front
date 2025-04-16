import { useState, useMemo } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import 'react-phone-number-input/style.css'

export default function Settings() {
    const [active, setActive] = useState("Account");

    const initialValues = useMemo(() => ({
        fullName: "Kaouche Malek",
        username: "KMalek101",
        email: "m_kaouche@estin.dz",
        phone: "+213",
        emailNotifications: false,
        pushNotifications: false,
        passwordType: "Change password",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      }), []);
    
      const [fullName, setFullName] = useState(initialValues.fullName);
      const [username, setUsername] = useState(initialValues.username);
      const [email, setEmail] = useState(initialValues.email);
      const [phone, setPhone] = useState(initialValues.phone);
    
      const [emailNotifications, setEmailNotifications] = useState(initialValues.emailNotifications);
      const [pushNotifications, setPushNotifications] = useState(initialValues.pushNotifications);
    
      const [passwordType, setPasswordType] = useState(initialValues.passwordType);
      const [oldPassword, setOldPassword] = useState(initialValues.oldPassword);
      const [newPassword, setNewPassword] = useState(initialValues.newPassword);
      const [confirmPassword, setConfirmPassword] = useState(initialValues.confirmPassword);
    
      // Check for dirty state
      const isDirty = useMemo(() => {
        return (
          fullName !== initialValues.fullName ||
          username !== initialValues.username ||
          email !== initialValues.email ||
          phone !== initialValues.phone ||
          emailNotifications !== initialValues.emailNotifications ||
          pushNotifications !== initialValues.pushNotifications ||
          oldPassword !== initialValues.oldPassword ||
          newPassword !== initialValues.newPassword ||
          confirmPassword !== initialValues.confirmPassword
        );
      }, [
        fullName, username, email, phone,
        emailNotifications, pushNotifications,
        oldPassword, newPassword, confirmPassword,
        initialValues
      ]);

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
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                    placeholder="Your username"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}                                    
                                    className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                    placeholder="Your username"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                    placeholder="Your username"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-sm">Phone number</label>
                                <PhoneInputWithCountrySelect
                                    international
                                    defaultCountry="DZ"
                                    value={phone}
                                    onChange={(e) => setPhone(e)}                                    
                                    style={{ '--PhoneInputCountryFlag-height': '2em'}}
                                    className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-md focus:outline-1 focus:outline-[var(--green-color)]"
                                />
                            </div>

                        </div>
                );

            case "Notifications":
                return (
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 text-[12px]">
                            <div className={`w-4.5 h-4 rounded-sm cursor-pointer flex items-center justify-center text-white text-[12px] ${emailNotifications ? 'bg-[var(--green-color)]' : 'bg-[var(--g-color-opacity)]'}`}
                                onClick={() => setEmailNotifications(!emailNotifications)}
                                >
                                {emailNotifications && (
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
                            <p className="font-medium text-lg">Email notifications</p>
                        </div>
                        <div className="flex items-center gap-4 text-[12px]">
                            <div className={`w-4.5 h-4 rounded-sm cursor-pointer flex items-center justify-center text-white text-[12px] ${pushNotifications ? 'bg-[var(--green-color)]' : 'bg-[var(--g-color-opacity)]'}`}
                                onClick={() => setPushNotifications(!pushNotifications)}
                                >
                                {pushNotifications && (
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
                            <p className="font-medium text-lg">Push notifications</p>
                        </div>
                    </div>
                );

            case "Language":
                return (
                    <>
                        <label className="block mb-2 font-medium">Choose Language</label>
                        <select className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)] cursor-pointer">
                            <option>English</option>
                            <option>French</option>
                        </select>
                    </>
                );

            case "Appearance":
                return (
                    <>
                        <label className="block mb-2 font-medium">Theme</label>
                        <select className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)] cursor-pointer">
                            <option>System</option>
                            <option>Light</option>
                            <option>Dark</option>
                        </select>
                    </>
                );

            case "Privacy & Security":
                return (
                    <>
                        <div className="flex justify-between items-center pr-6"> 
                            <p className="font-medium text-lg">Password</p>
                            <button
                             onClick={() => setPasswordType((value) => value === "Change password" ? "Hide" : "Change password")}
                             className="bg-[var(--g-color-opacity)] rounded-md py-1.5 h-[44px] px-4 text-md font-medium cursor-pointer shadow hover:brightness-10">{passwordType}
                            </button>
                        </div>

                        <div className="h-[1px] w-full px-2 py-5">
                            <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                        </div>

                        {passwordType === "Hide" && (
                            <div className="flex flex-col gap-6 pb-3">
                                <div>
                                    <label className="block mb-2 font-medium">Old password</label>
                                    <input
                                        value={oldPassword}
                                        type="password"
                                        onChange={(e) => setOldPassword(e.target.value)}
                                        className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">New password</label>
                                    <input
                                        value={newPassword}
                                        type="password"
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">Confirm new password</label>
                                    <input
                                        value={confirmPassword}
                                        type="password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                    />
                                </div>

                                <div className="flex gap-4 items-center">
                                    <button className="bg-[var(--g-color-opacity)] rounded-md py-1.5 h-[44px] px-4 text-md font-medium cursor-pointer w-[200px] shadow hover:brightness-10">Update password</button>
                                    <a href="/" className="text-[var(--green-color)] font-[500] text-lg hover:underline">I forgot my password</a>                                    
                                </div>
                            </div>
                            
                        )}   

                        <div className="flex justify-between items-center pr-6"> 
                            <p className="font-medium text-lg">Delete your account</p>
                            <button className="bg-[var(--r-color)] text-[var(--w-color)] rounded-md py-1.5 h-[44px] px-4 text-md font-medium cursor-pointer shadow hover:brightness-95 transition">Delete my account</button>
                        </div>
                    </>
                );

            default:
                return <p>Unknown setting</p>;
        }
    };

    return (
        <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 rounded-md flex-1 relative">
            <div className="flex gap-8 h-full">
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

            {/* Submit button */}
            <div className="ml-auto">
                <button 
                 disabled={!isDirty}
                 className={`text-[var(--w-color)] px-6 py-2 rounded-md transition bg-[var(--green-color)]  ${isDirty ? "cursor-pointer shadow hover:brightness-110" : "cursor-not-allowed brightness-80"}`}>Save Changes</button>
            </div>
                  
        </div>
    );
}
