import React, { useState } from "react";

const mockReport = {
	name: "Malek Kaouche",
	submittedAt: "2025-05-06",
	urgency: "Critical",
	description: "The sink is leaking and the room smells bad.",
	issues: [
		"Plumbing issue",
		"Room not cleaned",
		"Noise disturbance"
	],
	status: "Pending",
};

const urgencyColor = {
    Critical: "font-medium text-red-600", 
    High: "font-medium text-red-500",
    Medium: "text-green-600",
  };

export default function Report() {
	const [status, setStatus] = useState(mockReport.status);

	return (
		<div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 rounded-md flex-1">
			<h1 className="text-xl font-semibold">Reported Issue</h1>

			<div>
				<p><span className="font-medium">Reported by:</span> {mockReport.name}</p>
				<p><span className="font-medium">Submitted at:</span> {mockReport.submittedAt}</p>
                <p>
                    <span className="font-medium">Urgency:</span>{" "}
                    <span className={urgencyColor[mockReport.urgency] || "text-black"}>
                        {mockReport.urgency}
                    </span>
                </p>

			</div>

			<div>
				<p className="font-medium mb-1">Issues Reported:</p>
				<ul className="list-disc pl-5 space-y-1">
					{mockReport.issues.map((issue, index) => (
						<li key={index}>{issue}</li>
					))}
				</ul>
			</div>

			<div>
				<p className="font-medium mb-1">Description:</p>
				<p className="bg-[var(--g-color-opacity)] p-2 rounded-md">{mockReport.description}</p>
			</div>

			{/* <div className="mt-4">
				<p className="font-medium mb-1">Current Status:</p>
				<select
					value={status}
					onChange={(e) => setStatus(e.target.value)}
					className="bg-[var(--g-color-opacity)] p-2 rounded-md"
				>
					<option value="Pending">Pending</option>
					<option value="In Progress">In Progress</option>
					<option value="Resolved">Resolved</option>
					<option value="Rejected">Rejected</option>
				</select>
			</div> */}

			<div className="flex gap-2 mt-4 ml-auto">
				<button className="bg-[var(--r-color)] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-500">Decline</button>
				<button className="bg-[var(--green-color)] text-white px-4 py-2 rounded-md cursor-pointer hover:brightness-110">Accept</button>
			</div>
		</div>
	);
}
