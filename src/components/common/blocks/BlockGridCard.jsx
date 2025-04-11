import { useState } from "react";

export default function BlockGridCard({ name, students, maxStudents, reports}) {
    const availabilityPercentage = (maxStudents - students) * 100 / maxStudents;

    return(
        <div className="flex flex-col w-46 gap-4 h-46 bg-[var(--secondary-color)] p-6 rounded-md items-center cursor-pointer">
            <p>{name}</p>
            <p className="text-[var(--green-color)]">{students}/ {maxStudents}</p>
            <p className="text-[var(--green-color)]">{availabilityPercentage}%</p>
            <p>{reports}</p>
        </div>
    )
}