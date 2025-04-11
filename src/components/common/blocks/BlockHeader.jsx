import { useState } from "react";
export default function BlockHeader() {
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
        <span className="ml-2">▲</span>
      ) : (
        <span className="ml-2">▼</span>
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