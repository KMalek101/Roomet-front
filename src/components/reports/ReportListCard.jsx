export default function ReportListCard({ status, block, date, urgency}) {
    return(
        <div className="grid grid-cols-4 items-center p-4 px-9 bg-[var(--secondary-color)] rounded-md gap-62 cursor-pointer">
            <p className={`${status === "Open" ? "text-[var(--green-color)]" : "text-[var(--r-color)]"}`}>{status}</p>
            <p>{block}</p>
            <p>{date}</p>
            <p className={`${urgency === "High" ? "text-[var(--r-color)]" : urgency === "Medium" ? "text-[var(--g-color)]" : "text-[var(--green-color)]"}`}>{urgency}</p>
        </div>
    )
}
