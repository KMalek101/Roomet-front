export default function RoomListCard({ name, students, maxStudents, reports, block }) {
    return(
        <div className="grid grid-cols-5 items-center p-4 px-9 bg-[var(--secondary-color)] rounded-md gap-62">
            <p>{name}</p>
            <p className="">{students.map((student) => {
                return <p>{student}</p>
            })}
            </p>
            <p className={`${students.length === maxStudents ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>{students.length} / {maxStudents}</p>
            <p className="">{reports}</p>
            <p className="">{block}</p>
        </div>
    )
}
