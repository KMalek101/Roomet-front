import { useState } from "react";

export default function ReportForum({ setShowReportForum }) {
	const [showMaintenanceIssues, setShowMaintenanceIssues] = useState(false);
	const [showCleanlinessIssues, setShowCleanlinessIssues] = useState(false);
	const [showFurnitureIssues, setShowFurnitureIssues] = useState(false);
	const [showRommateRelatedIssues, setShowRommateRelatedIssues] = useState(false);
	const [checkedItems, setCheckedItems] = useState({});
	const [urgency, setUrgency] = useState("Medium");

	const toggleCheckbox = (label) => {
		setCheckedItems(prev => ({
			...prev,
			[label]: !prev[label]
		}));
	};

	const CheckItem = ({ label }) => (
		<div className="flex gap-2 items-center">
			<div
				className={`w-4.5 h-4 rounded-sm cursor-pointer flex items-center justify-center text-white text-[12px] ${
					checkedItems[label] ? "bg-[var(--green-color)]" : "bg-[var(--g-color-opacity)]"
				}`}
				onClick={() => toggleCheckbox(label)}
			>
				{checkedItems[label] && (
					<svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M21.2287 6.60355C21.6193 6.99407 21.6193 7.62723 21.2287 8.01776L10.2559 18.9906C9.86788 19.3786 9.23962 19.3814 8.84811 18.9969L2.66257 12.9218C2.26855 12.5349 2.26284 11.9017 2.64983 11.5077L3.35054 10.7942C3.73753 10.4002 4.37067 10.3945 4.7647 10.7815L9.53613 15.4677L19.1074 5.89644C19.4979 5.50592 20.1311 5.50591 20.5216 5.89644L21.2287 6.60355Z"
							fill="white"
						/>
					</svg>
				)}
			</div>
			<p onClick={() => toggleCheckbox(label)} className="cursor-pointer">{label}</p>
		</div>
	);

	const ChevronDownIcon = (
		<svg className="h-5 w-5 -mb-1.5" viewBox="0 0 24 24" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
				fill="#000000"
			/>
		</svg>
	);

	return (
		<div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 py-2 rounded-md flex-1">

			{/* Maintenance Issues */}
			<div>
				<div
					onClick={() => setShowMaintenanceIssues(!showMaintenanceIssues)}
					className="flex gap-2 items-center cursor-pointer"
				>
					<h1 className="font-medium text-lg">Maintenance Issues</h1>
					{ChevronDownIcon}
				</div>
				{showMaintenanceIssues && (
					<div className="pl-4 pt-2 space-y-1">
						<CheckItem label="Plumbing issue" />
						<CheckItem label="Electrical issue" />
						<CheckItem label="Heating" />
						<CheckItem label="Broken fixtures" />
					</div>
				)}
			</div>

			{/* Cleanliness Issues */}
			<div>
				<div
					onClick={() => setShowCleanlinessIssues(!showCleanlinessIssues)}
					className="flex gap-2 items-center cursor-pointer"
				>
					<h1 className="font-medium text-lg">Cleanliness Issues</h1>
					{ChevronDownIcon}
				</div>
				{showCleanlinessIssues && (
					<div className="pl-4 pt-2 space-y-1">
						<CheckItem label="Room not cleaned" />
						<CheckItem label="Bathroom not cleaned" />
						<CheckItem label="Garbage not collected" />
						<CheckItem label="Dirty common areas" />
					</div>
				)}
			</div>

			{/* Furniture Issues */}
			<div>
				<div
					onClick={() => setShowFurnitureIssues(!showFurnitureIssues)}
					className="flex gap-2 items-center cursor-pointer"
				>
					<h1 className="font-medium text-lg">Furniture Issues</h1>
					{ChevronDownIcon}
				</div>
				{showFurnitureIssues && (
					<div className="pl-4 pt-2 space-y-1">
						<CheckItem label="Broken / missing chair" />
						<CheckItem label="Broken / missing table/desk" />
						<CheckItem label="Damaged / missing bed or mattress" />
						<CheckItem label="Missing shelves or drawers" />
					</div>
				)}
			</div>

			{/* Roommate-related Issues */}
			<div>
				<div
					onClick={() => setShowRommateRelatedIssues(!showRommateRelatedIssues)}
					className="flex gap-2 items-center cursor-pointer"
				>
					<h1 className="font-medium text-lg">Roommate-related Issues</h1>
					{ChevronDownIcon}
				</div>
				{showRommateRelatedIssues && (
					<div className="pl-4 pt-2 space-y-1">
						<CheckItem label="Noise disturbance" />
						<CheckItem label="Hygiene problems" />
						<CheckItem label="Doesn't respect shared spaces" />
						<CheckItem label="Brings guests too often" />
					</div>
				)}
			</div>

            {/* Urgency */}
			<label className="flex flex-col mt-4">
				<p className="font-medium mb-1">How urgent is this?</p>
				<select
					className="bg-[var(--g-color-opacity)] p-2 rounded-md focus:outline-1 focus:outline-[var(--green-color)]"
					value={urgency}
					onChange={(e) => setUrgency(e.target.value)}
				>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
					<option value="Critical">Critical</option>
				</select>
			</label>
            
			{/* Description */}
			<label className="flex flex-col mt-6">
				<p className="font-medium mb-1">Describe your issue:</p>
				<textarea className="bg-[var(--g-color-opacity)] p-2 rounded-md focus:outline-1 focus:outline-[var(--green-color)]" />
			</label>

			{/* Buttons */}
			<div className="flex gap-1.5 ml-auto pt-4 pb-1 px-2">
				<button
					onClick={() => setShowReportForum(false)}
					className="bg-[var(--w-color)] p-2 font-medium rounded-md cursor-pointer"
				>
					Cancel
				</button>
				<button
					onClick={() => {
						console.log("Checked Items:", checkedItems);
						console.log("Urgency:", urgency);
						setShowReportForum(false);
					}}
					className="bg-[var(--green-color)] p-2 font-medium text-[var(--w-color)] rounded-md cursor-pointer"
				>
					Report
				</button>
			</div>
		</div>
	);
}