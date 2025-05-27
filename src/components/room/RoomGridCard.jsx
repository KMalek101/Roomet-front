export default function RoomGridCard({ name, students = [], maxStudents, reports = 0, block }) {
    return (
        <div className="flex flex-col w-46 gap-3 bg-[var(--secondary-color)] p-6 rounded-md items-center cursor-pointer">
            <p>{name || "Unnamed Room"}</p>
            
            <div className="flex flex-col justify-center items-center">
                {students.length > 0 ? (
                    <>
                        <p>{students[0]?.firstName || "Student"}</p>
                        <p className="-mt-2">...</p>
                    </>
                ) : (
                    <p className="">Room is free</p>
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