export default function BlockListCard({ name, students, maxStudents, availability, reports }) {
    return(
        <div className="bg-[var(--secondary-color)] w-full flex justify-between items-center rounded-md px-9 py-4 cursor-pointer">
            <p>{name}</p>
            <p className={`${students === maxStudents ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>{students}/{maxStudents}</p>
            <p className={`${availability === 0 ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>{availability}%</p>
            <p className="">{reports}</p>
        </div>
    );
}
