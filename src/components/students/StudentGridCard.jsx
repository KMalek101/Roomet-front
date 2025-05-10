export default function StudentGridCard({ firstName, lastName, room, block, reports }) {
    return (
        <div className="flex flex-col w-46 h-46 gap-3 bg-[var(--secondary-color)] p-6 rounded-md items-center cursor-pointer">
            <p className="font-medium">{firstName} <br /> {lastName}</p>
            <div className="flex flex-col justify-center items-center mt-aut">
                <p>{room || "No room yet"}</p>
                {room && <p className="-mt-1">Block {block}</p>}
            </div>
            <p className={`mt-auto ${reports > 0 ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>
                {reports} {reports === 1 ? "report" : "reports"}
            </p>
        </div>
    )
}