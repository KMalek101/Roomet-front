import React, { useState } from "react";

const urgencyColor = {
    Critical: "font-medium text-red-600", 
    High: "font-medium text-red-500",
    Medium: "font-medium text-yellow-500",
    Low: "text-green-600",
};

export default function Report({ 
    name, 
    submittedAt, 
    urgency, 
    description, 
    issues,
    status: initialStatus,
    roomNumber,
    blockName,
    studentEmail 
}) {
    const [status, setStatus] = useState(initialStatus || "Pending");

    return (
        <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 rounded-md flex-1">
            <h1 className="text-xl font-semibold">Report Details</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p><span className="font-medium">Reported by:</span> {name}</p>
                    <p><span className="font-medium">Email:</span> {studentEmail}</p>
                    <p><span className="font-medium">Submitted at:</span> {submittedAt}</p>
                </div>
                <div>
                    <p><span className="font-medium">Room:</span> {roomNumber}</p>
                    <p><span className="font-medium">Block:</span> {blockName}</p>
                    <p>
                        <span className="font-medium">Urgency:</span>{" "}
                        <span className={urgencyColor[urgency] || "text-black"}>
                            {urgency}
                        </span>
                    </p>
                </div>
            </div>

            <div>
                <p className="font-medium mb-1">Issues Reported:</p>
                <ul className="list-disc pl-5 space-y-1">
                    {issues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                    ))}
                </ul>
            </div>

            <div>
                <p className="font-medium mb-1">Description:</p>
                <p className="bg-[var(--g-color-opacity)] p-2 rounded-md whitespace-pre-wrap">
                    {description}
                </p>
            </div>

            <div className="flex gap-2 mt-4 ml-auto">
                <button 
                    className="bg-[var(--r-color)] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-500"
                    onClick={() => setStatus("Declined")}
                >
                    Decline
                </button>
                <button 
                    className="bg-[var(--green-color)] text-white px-4 py-2 rounded-md cursor-pointer hover:brightness-110"
                    onClick={() => setStatus("Accepted")}
                >
                    Accept
                </button>
            </div>

            {status && (
                <div className="mt-2 text-right">
                    <span className="font-medium">Current Status: </span>
                    <span className={status === "Accepted" ? "text-green-500" : status === "Declined" ? "text-red-500" : "text-yellow-500"}>
                        {status}
                    </span>
                </div>
            )}
        </div>
    );
}