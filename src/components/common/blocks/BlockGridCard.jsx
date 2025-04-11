export default function BlockGridCard({ name, students, maxStudents, availability, reports}) {
    return(
        <div className="flex flex-col w-46 gap-4 h-46 bg-[var(--secondary-color)] p-6 rounded-md items-center cursor-pointer">
            <p>{name}</p>
            <p className={`${students === maxStudents ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>{students}/{maxStudents}</p>
            <p className={`${availability === 0 ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>{availability}%</p>
            <p>{reports}</p>
        </div>
    )
}