import React, { useState } from "react";
import Link from "next/link";
import { updateReport } from "@/utils/maintenance";

const urgencyColor = {
    Critical: "font-medium text-red-600", 
    High: "font-medium text-red-500",
    Medium: "font-medium text-yellow-500",
    Low: "text-green-600",
};

export default function Report({ 
    id,
    student,
    submittedAt, 
    urgency, 
    description, 
    issues,
    status: initialStatus,
    roomNumber,
    blockName
}) {
    const [status, setStatus] = useState(initialStatus || "Pending");
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [error, setError] = useState(null);

    const handleStatusUpdate = async (newStatus) => {
        setIsUpdating(true);
        setError(null);
        
        try {
            const updatedReport = await updateReport(id, { status: newStatus });
            setStatus(updatedReport.status);
            setShowStatusDropdown(false);
        } catch (err) {
            setError(err.message || "Failed to update status");
            console.error("Status update error:", err);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleAccept = async () => {
        await handleStatusUpdate("In Progress");
    };

    const handleDecline = async () => {
        await handleStatusUpdate("Rejected");
    };

    return (
        <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 rounded-md flex-1">
            <h1 className="text-xl font-semibold">Report Details</h1>

            {/* Error message */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p>
                        <span className="font-medium">Reported by:</span>{" "}
                        {student?._id ? (
                            <Link 
                                href={`/students/${student._id}`}
                                className="text-[var(--green-color)] hover:underline"
                            >
                                {student.firstName} {student.lastName}
                            </Link>
                        ) : (
                            <span>Unknown Student</span>
                        )}
                    </p>
                    <p>
                        <span className="font-medium">Email:</span>{" "}
                        {student?.email || "No email provided"}
                    </p>
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

            <div className="flex flex-col items-end gap-2 mt-4">
                {status === "Pending" ? (
                    <div className="flex gap-2">
                        <button 
                            className={`bg-[var(--r-color)] text-white px-4 py-2 rounded-md ${
                                isUpdating ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:bg-red-500"
                            }`}
                            onClick={handleDecline}
                            disabled={isUpdating}
                        >
                            {isUpdating ? "Updating..." : "Decline"}
                        </button>
                        <button 
                            className={`bg-[var(--green-color)] text-white px-4 py-2 rounded-md ${
                                isUpdating ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:brightness-110"
                            }`}
                            onClick={handleAccept}
                            disabled={isUpdating}
                        >
                            {isUpdating ? "Updating..." : "Accept"}
                        </button>
                    </div>
                ) : (
                    <div className="relative">
                        <button 
                            className={`bg-[var(--g-color-opacity)] text-black px-4 py-2 rounded-md ${
                                isUpdating ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:brightness-95"
                            } flex items-center gap-2`}
                            onClick={() => !isUpdating && setShowStatusDropdown(!showStatusDropdown)}
                            disabled={isUpdating}
                        >
                            {isUpdating ? "Updating..." : "Change Status"}
                            {!isUpdating && (
                                <svg 
                                    className={`w-4 h-4 transition-transform ${showStatusDropdown ? "rotate-180" : ""}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            )}
                        </button>
                        
                        {showStatusDropdown && (
                            <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-10">
                                <div className="py-1">
                                    {["In Progress", "Completed", "Rejected"].map((option) => (
                                        <button
                                            key={option}
                                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                                status === option ? "bg-gray-100 font-medium" : ""
                                            }`}
                                            onClick={() => handleStatusUpdate(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="text-right">
                    <span className="font-medium">Current Status: </span>
                    <span className={
                        status === "Completed" ? "text-green-500" :
                        status === "Rejected" ? "text-red-500" :
                        status === "In Progress" ? "text-blue-500" :
                        "text-yellow-500"
                    }>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    );
}