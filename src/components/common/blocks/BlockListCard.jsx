export default function BlockListCard({ name, students, availability, reports }) {
    return(
        <div className="bg-[var(--secondary-color)] flex justify-between items-center rounded-md px-9 py-4">
            <p>{name}</p>
            <p className="text-[var(--green-color)]">{students} / 3737</p>
            <p className="text-[var(--green-color)]">{availability}%</p>
            <p className="">{reports}</p>
        </div>
    )
}
