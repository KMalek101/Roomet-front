import { useState, useEffect, useRef } from "react";
import ReportGridCard from "./ReportGridCard";
import ReportListCard from "./ReportListCard";
import { useRouter } from "next/navigation";
import { getReports } from "@/utils/maintenance";

export default function ViewReports() {
  const [selection, setSelection] = useState("grid");
  const [isOpenViewAs, setIsOpenViewAs] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filters, setFilters] = useState([]);
  const [sortDirection, setSortDirection] = useState({
    status: null,
    block: null,
    date: null,
    urgency: null,
  });

  const router = useRouter(null);
  const filterRef = useRef(null); 
  const optionsViewAs = [
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

const optionsFilter = [
    {
      value: "all",
      label: "All",
    },
    // Status filters
    {
      value: "pending",
      label: "Pending",
    },
    {
      value: "in-progress",
      label: "In Progress",
    },
    {
      value: "completed",
      label: "Completed",
    },
    {
      value: "rejected",
      label: "Rejected",
    },
    // Urgency filters (kept from original)
    {
      value: "high",
      label: "High Urgency",
    },
    {
      value: "medium",
      label: "Medium Urgency",
    },
    {
      value: "low",
      label: "Low Urgency",
    },
];

  const handleSelectViewAs = (value) => {
    setSelection(value);
    setIsOpenViewAs(false);
  };

  const handleSelectFilter = (value) => {
    setFilters((prevFilters) => {
      if (value === "all") return ["all"];
      if (prevFilters.includes("all")) return [value];
      if (prevFilters.includes(value)) {
        return prevFilters.filter((filter) => filter !== value);
      } else {
        return [...prevFilters, value];
      }
    });
  };

  const CustomDropdown = () => {
    return (
      <div className="relative w-72 text-sm">
        <button
          id="viewMode"
          onClick={() => setIsOpenViewAs(!isOpenViewAs)}
          className="bg-[var(--g-color-opacity)] h-[44px] w-full flex items-center justify-between rounded-md px-3 py-2 focus:outline-1 focus:outline-[var(--green-color)]"
        >
          <div className="flex items-center">
            {optionsViewAs.find((o) => o.value === selection)?.icon}
            {optionsViewAs.find((o) => o.value === selection)?.label}
          </div>
          <span className="ml-2">▼</span>
        </button>

        {isOpenViewAs && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
            {optionsViewAs.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelectViewAs(option.value)}
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
  };


const Filter = () => {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                setIsOpenFilter(!isOpenFilter);
            }}
            ref={filterRef}
            className="relative"
        >
            <button
                className="bg-[var(--g-color-opacity)] h-[44px] w-full flex items-center justify-between rounded-md px-3 gap-2 py-2 cursor-pointer"
            >
                <svg
                    className="w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.22657 2C2.50087 2 1.58526 4.03892 2.73175 5.32873L8.99972 12.3802V19C8.99972 19.3788 9.21373 19.725 9.55251 19.8944L13.5525 21.8944C13.8625 22.0494 14.2306 22.0329 14.5255 21.8507C14.8203 21.6684 14.9997 21.3466 14.9997 21V12.3802L21.2677 5.32873C22.4142 4.03893 21.4986 2 19.7729 2H4.22657Z"
                        fill="#000000"
                    ></path>
                </svg>
                <p>Filter</p>
                {/* Show active filter count if any filters are selected besides 'all' */}
                {filters.length > 0 && !filters.includes('all') && (
                    <span className="ml-2 bg-[var(--green-color)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {filters.length}
                    </span>
                )}
            </button>
            {isOpenFilter && (
                <div 
                    ref={filterRef}
                    className="absolute z-10 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Status Filters Section */}
                    <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </div>
                    {optionsFilter.slice(0, 5).map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelectFilter(option.value)}
                            className={`flex items-center px-3 py-2 cursor-pointer hover:bg-[var(--g-color-opacity)] ${
                                filters.includes(option.value)
                                    ? "bg-[var(--g-color-opacity)]"
                                    : ""
                            }`}
                        >
                            {option.label}
                        </div>
                    ))}
                    
                    {/* Urgency Filters Section */}
                    <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Urgency
                    </div>
                    {optionsFilter.slice(5).map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelectFilter(option.value)}
                            className={`flex items-center px-3 py-2 cursor-pointer hover:bg-[var(--g-color-opacity)] ${
                                filters.includes(option.value)
                                    ? "bg-[var(--g-color-opacity)]"
                                    : ""
                            }`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

  const Header = ({ sortDirection, setSortDirection }) => {
    const handleSort = (column) => {
      setSortDirection((prev) => {
        const newDirection = prev[column] === "asc" ? "desc" : "asc";
        return {
          date: column === "date" ? newDirection : null,
          block: column === "block" ? newDirection : null,
          status: column === "status" ? newDirection : null,
          urgency: column === "urgency" ? newDirection : null,
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
      <div className="grid grid-cols-4 items-center p-4 px-9 bg-[var(--secondary-color)] rounded-md gap-62">
        <p
          className="flex items-center cursor-pointer"
          onClick={() => handleSort("status")}
        >
          Status
          {renderArrow(sortDirection.status)}
        </p>
        <p
          className="flex items-center cursor-pointer"
          onClick={() => handleSort("block")}
        >
          block
          {renderArrow(sortDirection.block)}
        </p>
        <p
          className="flex items-center cursor-pointer"
          onClick={() => handleSort("date")}
        >
          Date 
          {renderArrow(sortDirection.date)}
        </p>
        <p
          className="flex items-center cursor-pointer"
          onClick={() => handleSort("urgency")}
        >
          Urgency
          {renderArrow(sortDirection.urgency)}
        </p>
      </div>
    );
  };  

  const handleClickOutside = (event) => {
    const clickedOutsideFilter = filterRef.current && !filterRef.current.contains(event.target);
    const clickedOutsideView = !event.target.closest("#viewMode");
  
    if (clickedOutsideView) {
      setIsOpenViewAs(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = (report) => {
    router.push(`/reports/${report.id}`);
  }

  useEffect(() => {
    const fetchReportsData = async () => {
      try {
        const fetchedData = await getReports();
        console.log(fetchedData);
        // Transform to match your reports shape
        const formattedData = fetchedData.map((report) => {
          return {
            status: report.status || "Unknown",
            date: new Date(report.createdAt).toISOString().split("T")[0], // format as "YYYY-MM-DD"
            urgency: report.urgency || "Unknown",
            block: report.room?.block || "N/A",
            id: report._id || undefined
          };
        });

        setReports(formattedData); 
        console.log("Formatted reports:", formattedData);
      } catch (err) {
        setError("Failed to fetch reports.");
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReportsData();
  }, []);

  // Define urgency levels for proper sorting
  const urgencyLevels = {
    'Low': 1,
    'Medium': 2,
    'High': 3
  };

  // Filter reports based on selected filters
  const filteredReports = reports.filter((report) => {
    if (filters.length === 0 || filters.includes("all")) return true;
  
    const conditions = {
      open: report.status === "Open",
      closed: report.status === "Closed",
      high: report.urgency === "High",
      medium: report.urgency === "Medium",
      low: report.urgency === "Low",
    };
  
    return filters.some((filter) => conditions[filter]);
  });
  
  // Sort reports based on sortDirection
  const sortedReports = [...filteredReports].sort((a, b) => {
    const activeSortColumn = Object.keys(sortDirection).find(
      (key) => sortDirection[key] !== null
    );
    
    if (!activeSortColumn) return 0;
    
    const direction = sortDirection[activeSortColumn];
    let valA = a[activeSortColumn];
    let valB = b[activeSortColumn];

    // Special handling for urgency
    if (activeSortColumn === "urgency") {
      valA = urgencyLevels[valA] || 0;
      valB = urgencyLevels[valB] || 0;
    }
    // Special handling for dates
    else if (activeSortColumn === "date") {
      valA = new Date(valA).getTime();
      valB = new Date(valB).getTime();
    }

    if (valA < valB) return direction === "asc" ? -1 : 1;
    if (valA > valB) return direction === "asc" ? 1 : -1;
    return 0;
  });
  
  return (
    <div className="flex flex-col gap-4 p-6 rounded-md flex-1">
      <div className="bg-[var(--secondary-color)] flex items-center gap-4 p-6 rounded-md">
        <label htmlFor="viewMode" className="font-medium">
          View blocks as
        </label>
        <CustomDropdown />
        <p className="font-medium pl-12">Filter blocks as</p>
        <Filter />
      </div>

      <Header sortDirection={sortDirection} setSortDirection={setSortDirection} />
      <div className="h-[1px] w-full p-2">
        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
      </div>
      {selection === "list" ? (
        <div className="flex flex-col gap-4">
            {sortedReports.map((report, index) => (
                <div onClick={() => handleClick(report)}>
                  <ReportListCard key={index} status={report.status} date={report.date} urgency={report.urgency} block={report.block.name}/>
                </div>
            ))}
        </div>
      ) : (
      <div className="flex gap-6.5 flex-wrap">
            {sortedReports.map((report, index) => (
                <div onClick={() => handleClick(report)}>
                  <ReportGridCard key={index} status={report.status} date={report.date} urgency={report.urgency} block={report.block.name}/>
                </div>
            ))}
      </div>
      )}
    </div>
  );
}