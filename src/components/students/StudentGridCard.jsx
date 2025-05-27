export default function StudentGridCard({ firstName, lastName, room, block, reports }) {
    return (
        <div className="flex flex-col w-46 h-46 gap-3 bg-[var(--secondary-color)] p-6 rounded-md items-center cursor-pointer">
            {/* Student Name */}
            <p className="font-medium">
                {firstName} <br /> {lastName}
            </p>

            {/* Room & Block Information */}
            <div className="flex flex-col justify-center items-center mt-aut">
                {/* Room Number - Show only if room exists */}
                <p>{room?.number || "No room assigned"}</p>
                
                {/* Block Name - Show only if block exists */}
                {block ? (
                    <p className="-mt-1">Block {block.name}</p>
                ) : (
                    <p className="-mt-1">No block assigned</p>
                )}
            </div>

            {/* Reports */}
            <p className={`mt-auto ${reports > 0 ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>
                {reports} {reports === 1 ? "report" : "reports"}
            </p>
        </div>
    )
}