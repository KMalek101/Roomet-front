export default function Room() {
    const data = { name: "H309", students: ["M_Kaouche", "W_Kacha", "Z_Abderrahime", "M_Sayedahmed"], maxStudents: 4, reports: 14, block: "H" }

    return(
        <div className="bg-[var(--secondary-color)] h-full w-full rounded-md">
            <h2 className="flex justify-center items-center font-bold text-3xl pt-4">Room {data.name}</h2>
            
        </div>
    )
}