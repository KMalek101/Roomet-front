import { useState, useEffect, useRef } from "react";
import RoomListCard from "./RoomListCard";
import RoomGridCard from "./RoomGridCard";
import { useRouter } from "next/navigation";

export default function ViewRooms() {
  const [selection, setSelection] = useState("grid");
  const [isOpenViewAs, setIsOpenViewAs] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [filters, setFilters] = useState([]);
  const [sortDirection, setSortDirection] = useState({
    name: null,
    students: null,
    availability: null,
    reports: null,
    block: null,
  });

  const router = useRouter();
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
    {
      value: "empty",
      label: "Empty",
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
            onClick={(e) => e.stopPropagation()}
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

  const Header = () => {
    const handleSort = (column) => {
      setSortDirection((prev) => {
        const newDirection = prev[column] === "asc" ? "desc" : "asc";
        return {
          name: column === "name" ? newDirection : null,
          students: column === "students" ? newDirection : null,
          availability: column === "availability" ? newDirection : null,
          reports: column === "reports" ? newDirection : null,
          block: column === "block" ? newDirection : null,
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
        <div className="grid grid-cols-5 items-center p-4 px-9 bg-[var(--secondary-color)] rounded-md gap-62">
        <p
          className="flex items-center cursor-pointer"
          onClick={() => handleSort("name")}
        >
          Room 
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
        <p
          className="flex items-center cursor-pointer"
          onClick={() => handleSort("block")}
        >
          Block 
          {renderArrow(sortDirection.block)}
        </p>
      </div>
    );
  };

  const roomData = [
    { name: "H309", students: ["M_Kaouche", "W_Kacha", "Z_Abderrahime", "M_Sayedahmed"], maxStudents: 4, reports: 14, block: "H" },
    { name: "H310", students: ["A_Bouzar", "N_Zitouni"], maxStudents: 4, reports: 7, block: "H" },
    { name: "H311", students: ["Y_Belhadj", "F_Tebib", "D_Lounis"], maxStudents: 4, reports: 3, block: "H" },
    { name: "H312", students: ["S_Mebarki", "R_Benhammou", "L_Khider"], maxStudents: 4, reports: 5, block: "H" },
    { name: "H313", students: ["I_Hadjar", "T_Benali"], maxStudents: 4, reports: 8, block: "H" },
    { name: "H314", students: ["C_Bourahla", "K_Zouaoui"], maxStudents: 4, reports: 2, block: "H" },
    { name: "H315", students: ["A_Toumi", "E_Benmeriem", "M_Hassani"], maxStudents: 4, reports: 9, block: "H" },
    { name: "H316", students: ["B_Daraji", "S_Nekkache"], maxStudents: 4, reports: 1, block: "H" },
    { name: "H317", students: ["Z_Mansouri", "N_Benameur", "O_Bekkouche"], maxStudents: 4, reports: 6, block: "H" },
  ];

  // Filter rooms based on selected filters
  const filteredRooms = roomData.filter((room) => {
    if (filters.length === 0 || filters.includes("all")) return true;
  
    const conditions = {
      active: room.students.length < room.maxStudents,
      completed: room.students.length === room.maxStudents,
      noreports: room.reports === 0,
      empty: room.students.length === 0,
    };
  
    return filters.some((filter) => conditions[filter]);
  });

const sortedRooms = filteredRooms.sort((a, b) => {
    const column = Object.keys(sortDirection).find((key) => sortDirection[key] !== null);
    const direction = sortDirection[column];
  
    if (!column || !direction) return 0;
  
    const availabilityA = (a.maxStudents - a.students.length) * 100 / a.maxStudents;
    const availabilityB = (b.maxStudents - b.students.length) * 100 / b.maxStudents;
  
    let valA, valB;
    
    if (column === "availability") {
      valA = availabilityA;
      valB = availabilityB;
    } else if (column === "students") {
      const studentsA = a.students.join(', ').toLowerCase();
      const studentsB = b.students.join(', ').toLowerCase();
      valA = studentsA;
      valB = studentsB;
    } else {
      valA = a[column];
      valB = b[column];
    }
  
    if (typeof valA === "string") {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }
  
    if (valA < valB) return direction === "asc" ? -1 : 1;
    if (valA > valB) return direction === "asc" ? 1 : -1;
    return 0;
  });
  
  const handleRoomClick = (room) => {
    router.push(`/rooms/${room.name}`);
  }
  return (
    <div className="flex flex-col gap-4 p-6 rounded-md flex-1">
      <div className="bg-[var(--secondary-color)] flex items-center gap-4 p-6 rounded-md">
        <label htmlFor="viewMode" className="font-medium">
          View rooms as
        </label>
        <CustomDropdown />
        <p className="font-medium pl-12">Filter blocks as</p>
        <Filter />
      </div>

      <Header />
      <div className="h-[1px] w-full p-2">
        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
      </div>

      {selection === "list" ? (
        <div className="flex flex-col gap-4">
          {sortedRooms.map((room, index) => (
            <div onClick={() => handleRoomClick(room)}>
              <RoomListCard
                key={index}
                name={room.name}
                students={room.students}
                maxStudents={room.maxStudents}
                reports={room.reports}
                block={room.block}
              />
            </div>
          ))}
        </div>

      ) : (

        <div className="flex gap-6.5 flex-wrap">
          {sortedRooms.map((room, index) => (
            <div onClick={() => handleRoomClick(room)}>
              <RoomGridCard
                key={index}
                name={room.name}
                students={room.students}
                maxStudents={room.maxStudents}
                reports={room.reports}
                block={room.block}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}