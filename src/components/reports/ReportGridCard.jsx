export default function ReportGridCard({ status, block, date, urgency}) {
    return(
        <div className="flex flex-col w-46 gap-3 bg-[var(--secondary-color)] p-6 rounded-md items-center cursor-pointer">
            <p className={`${status === "Open" ? "text-[var(--green-color)]" : "text-[var(--r-color)]"}`}>{status}</p>
            <p>{block}</p>
            <p>{date}</p>
            <p className={`${urgency === "High" ? "text-[var(--r-color)]" : urgency === "Medium" ? "text-[var(--g-color)]" : "text-[var(--green-color)]"}`}>{urgency}</p>
        </div>
    )
}