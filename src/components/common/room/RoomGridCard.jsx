import { useState, useEffect } from "react";

export default function RoomGridCard({ name, students, maxStudents, reports, block}) {
    const [equal, setEqual] = useState(false);
        
    useEffect(()=> {
        if (students.length === maxStudents) {
            setEqual(true);
        }
    }, []);

    return(
        <div className="flex flex-col w-46 gap-3 bg-[var(--secondary-color)] p-6 rounded-md items-center cursor-pointer">
            <p>{name}</p>
            <div className="flex flex-col justify-center items-center">
                <p>{students[0]}</p>
                <p className="-mt-2">...</p>
            </div>
            <p className={`${equal ? "text-[var(--r-color)]" : "text-[var(--green-color)]"}`}>{students.length} / {maxStudents}</p>
            <p>{reports}</p>
            <p>{block}</p>
        </div>
    )
}