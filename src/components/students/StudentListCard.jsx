export default function StudentListCard({ firstName, lastName, room, block, reports }) {
    return (
        <div className="grid grid-cols-5 items-center p-4 px-9 bg-[var(--secondary-color)] rounded-md gap-62 cursor-pointer">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{room?.number || "None"}</p>
            <p>{block?.name || "None"}</p>  
            <p className={`${reports > 0 ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>
                {reports}
            </p>
        </div>
    )
}