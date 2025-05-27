export default function RoomListCard({ name, students = [], maxStudents, reports = 0, block }) {
    return (
        <div className="grid grid-cols-5 items-center p-4 px-9 bg-[var(--secondary-color)] rounded-md gap-62 cursor-pointer">
            <p>{name || "Unnamed Room"}</p>
            <div className="flex flex-col">
                {students.length > 0 ? (
                    students.map((student, index) => (
                        <p key={index}>{student.firstName} {student.lastName}</p>
                    ))
                ) : (
                    <p className="text-gray-400">Room is free</p>
                )}
            </div>
            <p className={`${students.length === maxStudents ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>
                {students.length} / {maxStudents}
            </p>
            <p>{reports}</p>
            <p>{block?.name || "No block"}</p>
        </div>
    )
}