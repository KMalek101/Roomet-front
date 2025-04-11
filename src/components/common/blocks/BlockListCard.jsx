export default function BlockListCard({ name, students, maxStudents, reports }) {
    const availabilityPercentage = (maxStudents - students) * 100 / maxStudents;
    return(
        <div className="bg-[var(--secondary-color)] w-full flex justify-between items-center rounded-md px-9 py-4">
            <p>{name}</p>
            <p className="text-[var(--green-color)]">{students} / {maxStudents}</p>
            <p className="text-[var(--green-color)]">{availabilityPercentage}%</p>
            <p className="">{reports}</p>
        </div>
    );
}
