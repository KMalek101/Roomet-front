export default function Admin({ firstName, lastName, email, phone }) {
    return (
        <div className="bg-[var(--secondary-color)] h-full w-full rounded-md">
            {/* Admin Name Header */}
            <h2 className="flex justify-center items-center font-bold text-3xl py-3">
                Admin {firstName || "N/A"} {lastName || "N/A"}
            </h2>

            <div className="h-[1px] w-full p-2 px-12">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            {/* Admin Information Section */}
            <div className="flex pt-6 justify-center gap-22 w-full items-stretch px-24">
                <div className="flex flex-col bg-white brightness-95 rounded-md py-10 px-6 text-lg flex-1">
                    <h2 className="flex justify-center pb-4 text-lg font-medium">Admin Information</h2>
                    <div className="space-y-4">
                        {/* First Name */}
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">First Name:</p>
                            <p className="text-[var(--g-color)]">{firstName || "N/A"}</p>
                        </div>

                        {/* Last Name */}
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Last Name:</p>
                            <p className="text-[var(--g-color)]">{lastName || "N/A"}</p>
                        </div>

                        {/* Email */}
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Email:</p>
                            <p className="text-[var(--g-color)]">{email || "N/A"}</p>
                        </div>

                        {/* Phone Number */}
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Phone Number:</p>
                            <p className="text-[var(--g-color)]">{phone || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}