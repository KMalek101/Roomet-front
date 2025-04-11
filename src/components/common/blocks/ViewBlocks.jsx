import { useState, useEffect, useRef } from "react";
import BlockGridCard from "./BlockGridCard";
import BlockListCard from "./BlockListCard";
import BlockHeader from "./BlockHeader";
export default function ViewBlocks() {
  const [selection, setSelection] = useState("grid");
  const [isOpenViewAs, setIsOpenViewAs] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filters, setFilters] = useState([]);

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
    {
      value: "active",
      label: "Available places",
    },
    {
      value: "completed",
      label: "Full",
    },
    {
      value: "noreports",
      label: "No reports",
    },
  ];

  const handleSelectViewAs = (value) => {
    setSelection(value);
    setIsOpenViewAs(false);
  };

  const handleSelectFilter = (value) => {
    setFilters((prevFilters) => {
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
          console.log('clicked');
          console.log(isOpenFilter);
        }}
         ref={filterRef}
         className="relative">
          
        <button
        //   ref={filterRef}
          
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
        </button>
        {isOpenFilter && (
          <div 
            ref={filterRef}
            className="absolute z-10 mt-1 w-42 bg-white border border-gray-300 rounded-md shadow-md"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside dropdown from closing it
          >
            {optionsFilter.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  handleSelectFilter(option.value);
                }}
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

  const handleClickOutside = (event) => {
    const clickedOutsideFilter = filterRef.current && !filterRef.current.contains(event.target);
    const clickedOutsideView = !event.target.closest("#viewMode");
  
    console.log("filterRef.current:", filterRef.current);
    console.log("event.target:", event.target);
    console.log("contains?", filterRef.current?.contains(event.target));


    // if (clickedOutsideFilter) {
    //   setIsOpenFilter(false);
    // }
  
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

  const blockData = [
    { name: "J", students: 1, availability: 1, reports: 1 },
    { name: "A", students: 5, availability: 3, reports: 2 },
    { name: "B", students: 12, availability: 0, reports: 5 },
    { name: "C", students: 0, availability: 10, reports: 0 },
    { name: "D", students: 8, availability: 2, reports: 7 },
    { name: "D", students: 8, availability: 2, reports: 7 },
    { name: "C", students: 0, availability: 10, reports: 0 },
    { name: "D", students: 8, availability: 2, reports: 7 },
    { name: "D", students: 8, availability: 2, reports: 7 },
    { name: "E", students: 3, availability: 5, reports: 1 },
    { name: "F", students: 10, availability: 1, reports: 3 },
    { name: "G", students: 7, availability: 4, reports: 2 },
    { name: "H", students: 0, availability: 9, reports: 0 },
    { name: "I", students: 6, availability: 2, reports: 4 },
  ];
  
  const filteredBlocks = blockData.filter((block) => {
    if (filters.length === 0 || filters.includes("all")) return true;
  
    const conditions = {
      active: block.availability > 0,
      completed: block.availability === 0,
      noreports: block.reports === 0,
    };
  
    return filters.some((filter) => conditions[filter]);
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

      <BlockHeader />
      <div className="h-[1px] w-full p-2">
        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
      </div>
      {selection === "list" ? (
        <div className="flex flex-col gap-4">
            {filteredBlocks.map((block, index) => {
              return <BlockListCard key={index} name={block.name} students={block.students} availability={block.availability} reports={block.reports} />
            })}
        </div>
      ) : (
      <div className="flex gap-6.5 flex-wrap">
        {filteredBlocks.map((block, index) => {
          return <BlockGridCard key={index} name={block.name} students={block.students} availability={block.availability} reports={block.reports} />
        })}
      </div>
      )}
    </div>
  );
}
