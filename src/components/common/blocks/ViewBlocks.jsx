import { useState } from "react";
import BlockListCard from "./BlockListCard";

export default function ViewBlocks() {
  const [selection, setSelection] = useState("grid");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      value: "grid",
      label: "Grid",
      icon: <span className="mr-2">
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 1H1V5H7V1Z" fill="#000000"></path> <path d="M7 7H1V15H7V7Z" fill="#000000"></path> <path d="M9 1H15V9H9V1Z" fill="#000000"></path> <path d="M15 11H9V15H15V11Z" fill="#000000"></path> </g></svg>
      </span>,
    },
    {
      value: "list",
      label: "List",
      icon: <span className="mr-2">
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 1H1V3H3V1Z" fill="#000000"></path> <path d="M3 5H1V7H3V5Z" fill="#000000"></path> <path d="M1 9H3V11H1V9Z" fill="#000000"></path> <path d="M3 13H1V15H3V13Z" fill="#000000"></path> <path d="M15 1H5V3H15V1Z" fill="#000000"></path> <path d="M15 5H5V7H15V5Z" fill="#000000"></path> <path d="M5 9H15V11H5V9Z" fill="#000000"></path> <path d="M15 13H5V15H15V13Z" fill="#000000"></path> </g></svg>
      </span>,
    },
  ];

  const handleSelect = (value) => {
    setSelection(value);
    setIsOpen(false);
  };

  const CustomDropdown = () => {
    return(
        <div className="relative w-72 text-sm">
        <button
          id="viewMode"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[var(--g-color-opacity)] h-[44px] w-full flex items-center justify-between rounded-md px-3 py-2 focus:outline-1 focus:outline-[var(--green-color)]"
        >
          <div className="flex items-center">
            {options.find((o) => o.value === selection)?.icon}
            {options.find((o) => o.value === selection)?.label}
          </div>
          <span className="ml-2">▼</span>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`flex items-center px-3 py-2 cursor-pointer hover:bg-[var(--g-color-opacity)] ${
                  selection === option.value ? "bg-[var(--g-color-opacity)]" : ""
                }`}
              >
                {option.icon}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

const Header = () => {
	const [sortDirection, setSortDirection] = useState({
		name: null,
		students: null,
		availability: null,
		reports: null,
	});

	const handleSort = (column) => {
		setSortDirection((prev) => {
			const newDirection = prev[column] === "asc" ? "desc" : "asc";

            return {
				name: column === "name" ? newDirection : null,
				students: column === "students" ? newDirection : null,
				availability: column === "availability" ? newDirection : null,
				reports: column === "reports" ? newDirection : null,
			};
		});
	};

	const renderArrow = (direction) => {
		if (direction === null) return null; 
		return direction === "asc" ? (
			<span className="ml-2">▲</span> // Ascending arrow
		) : (
			<span className="ml-2">▼</span> // Descending arrow
		);
	};

	return (
		<div className="flex justify-between items-center p-4 px-9 bg-[var(--secondary-color)] rounded-md">
			<p
				className="flex items-center cursor-pointer"
				onClick={() => handleSort("name")}
			>
				Name
				{renderArrow(sortDirection.name)}
			</p>
			<p
				className="flex items-center cursor-pointer"
				onClick={() => handleSort("students")}
			>
				Students
				{renderArrow(sortDirection.students)}
			</p>
			<p
				className="flex items-center cursor-pointer"
				onClick={() => handleSort("availability")}
			>
				Availability
				{renderArrow(sortDirection.availability)}
			</p>
			<p
				className="flex items-center cursor-pointer"
				onClick={() => handleSort("reports")}
			>
				Reports
				{renderArrow(sortDirection.reports)}
			</p>
		</div>
	);
};

  return (
    <div className="flex flex-col gap-4 p-6 rounded-md flex-1">
        <div className="bg-[var(--secondary-color)] flex items-center gap-4 p-6 rounded-md ">
            <label htmlFor="viewMode" className="font-medium">
                View blocks as
            </label>
            <CustomDropdown />
        </div>

        <Header />
        <div className="h-[1px] w-full p-2">
            <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
        </div>
        <BlockListCard name={"J"} students={1} availability={1} reports={1} />
    </div>
  );
}
