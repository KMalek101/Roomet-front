export default function AdminGridCard({ firstName, lastName, email, phone }) {
    return (
        <div className="flex flex-col w-46 h-46 gap-3 bg-[var(--secondary-color)] p-6 rounded-md items-center cursor-pointer">
            {/* Admin Name */}
            <p className="font-medium text-center">
                {firstName} <br /> {lastName}
            </p>

            {/* Email & Phone Information */}
            <div className="flex flex-col justify-center items-center mt-aut gap-1">
                {/* Email - Always shown as it's required */}
                <p className="text-sm text-gray-600 text-center">
                    {email}
                </p>
                
                {/* Phone - Show "Not provided" if empty */}
                <p className="text-sm text-gray-600">
                    {phone || "No phone provided"}
                </p>
            </div>

            {/* Status Indicator (you could use this for active/inactive) */}
            <p className="mt-auto text-[var(--green-color)]">
                Active
            </p>
        </div>
    )
}