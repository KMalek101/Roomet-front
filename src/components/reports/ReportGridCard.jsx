export default function ReportGridCard({ status, block, date, urgency}) {
    return(
        <div className="flex flex-col w-46 gap-3 bg-[var(--secondary-color)] p-6 rounded-md items-center cursor-pointer">
            <p>{status}</p>
            <p>{block}</p>
            <p>{date}</p>
            <p>{urgency}</p>
        </div>
    )
}