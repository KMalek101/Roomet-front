import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Student({ firstName, lastName, email, phone, room, block, reports, studentId }) {
    const initialData = {
        firstName: firstName,
        lastName: lastName,
        id: studentId,
        phone: phone,
        email: email,
        room: room,
        block: block,
        reports: reports,
        supplies: {
            chairs: room.chairs,
            pillows: room.pillows,
            tables: room.tables,
            beds: room.beds
        }
    };

    console.log(initialData);

    const supplyIcons = {
        chairs: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 21V16M7 21V16" stroke="black" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 16H7.00001C6.01506 16 5.52259 16 5.22538 15.6762C4.92818 15.3523 4.9669 14.9018 5.04435 14.0008C5.10026 13.3503 5.22669 12.9125 5.51257 12.5858C6.02514 12 6.8501 12 8.50001 12H15.5C17.1499 12 17.9749 12 18.4874 12.5858C18.7733 12.9125 18.8998 13.3503 18.9557 14.0008C19.0331 14.9018 19.0718 15.3523 18.7746 15.6762C18.4774 16 17.985 16 17 16H16" stroke="black" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 8C7 6.13077 7 5.19615 7.40192 4.5C7.66523 4.04394 8.04394 3.66523 8.5 3.40192C9.19615 3 10.1308 3 12 3C13.8692 3 14.8038 3 15.5 3.40192C15.9561 3.66523 16.3348 4.04394 16.5981 4.5C17 5.19615 17 6.13077 17 8V12H7V8Z" stroke="black" stroke-width="1.5"></path> </g></svg>
        ),
        pillows: (
            <svg className="w-12 h-12" fill="#000000" viewBox="0 0 24 24" id="pillow-2" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M16.1,15a9.34,9.34,0,0,1,0-6" ></path><path id="primary" d="M20.75,16a2,2,0,0,1-2.91,2.58,44.77,44.77,0,0,1-11.68,0A2,2,0,0,1,3.25,16,35.22,35.22,0,0,1,3.25,8,2,2,0,0,1,6.16,5.38a44.77,44.77,0,0,1,11.68,0A2,2,0,0,1,20.75,8,35.22,35.22,0,0,1,20.75,16Z"></path></g></svg>
        ),
        tables: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>table</title> <path d="M18.76,6l2,4H3.24l2-4H18.76M20,4H4L1,10v2H3v7H5V16H19v3h2V12h2V10L20,4ZM5,14V12H19v2Z"></path> <rect width="24" height="24" fill="none"></rect> </g></svg>
        ),
        beds: (
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5V19M3 16H21M21 19V13.2C21 12.0799 21 11.5198 20.782 11.092C20.5903 10.7157 20.2843 10.4097 19.908 10.218C19.4802 10 18.9201 10 17.8 10H11V15.7273M7 12H7.01M8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        )
    };
      
    const [studentData, setStudentData] = useState(initialData);
    const [isDirty, setIsDirty] = useState(false);
    const [roomSearch, setRoomSearch] = useState("");
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [blockSearch, setBlockSearch] = useState("");
    const [showBlockDropdown, setShowBlockDropdown] = useState(false);
    const roomDropdownRef = useRef(null);
    const blockDropdownRef = useRef(null);
    
    const availableRooms = [
    { number: "H309" }, 
    { number: "H310" },
    { number: "H311" },
    { number: "H312" },
    { number: "H313" },
    { number: "H314" },
    { number: "H315" },
    { number: "H316" },
    { number: "H317" }
    ];

    const availableBlocks = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "F" },
    { name: "G" },
    { name: "H" },
    { name: "I" },
    { name: "J" }
    ];

    const filteredRooms = availableRooms.filter(room => 
        room.number.toLowerCase().includes(roomSearch.toLowerCase())
    );

    const filteredBlocks = availableBlocks.filter(block => 
    block.name.toLowerCase().includes(blockSearch.toLowerCase())
    );

    const [editMode, setEditMode] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        function handleClickOutside(event) {
            if (roomDropdownRef.current && showRoomDropdown && !roomDropdownRef.current.contains(event.target)) {
                setShowRoomDropdown(false);
            }
            if (blockDropdownRef.current && showBlockDropdown && !blockDropdownRef.current.contains(event.target)) {
                setShowBlockDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showRoomDropdown, showBlockDropdown]);

    const checkDirty = (currentData) => {
        return JSON.stringify(currentData) !== JSON.stringify(initialData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newData;
        
        if (name in studentData.supplies) {
            newData = {
                ...studentData,
                supplies: {
                    ...studentData.supplies,
                    [name]: parseInt(value) || 0
                }
            };
        } else {
            newData = {
                ...studentData,
                [name]: value
            };
        }
        
        setStudentData(newData);
        setIsDirty(checkDirty(newData));
    };

    const handleRoomSelect = (room, e) => {
        e.stopPropagation(); 
        const newData = {
            ...studentData,
            room
        };
        setStudentData(newData);
        setIsDirty(checkDirty(newData));
        setShowRoomDropdown(false);
        setRoomSearch("");
    };

    const handleBlockSelect = (block, e) => {
        e.stopPropagation(); 
        const newData = {
            ...studentData,
            block
        };
        setStudentData(newData);
        setIsDirty(checkDirty(newData));
        setShowBlockDropdown(false);
        setBlockSearch("");
    };

    const handleSave = () => {
        console.log("Updated student data:", studentData);
        setEditMode(false);
        setIsDirty(false);
    };

    const handleCancel = () => {
        setStudentData(initialData);
        setEditMode(false);
        setIsDirty(false);
    };

    const router = useRouter();
    const goToRoom = () => {
        router.push(`/rooms/${studentData.room}`)
    }

    const urgencyColor = {
    Critical: "font-medium text-red-600", 
    High: "font-medium text-red-500",
    Medium: "font-medium text-yellow-500",
    Low: "text-green-600",
    };

    const pushToReport = (id) => {
        router.push(`/reports/${id}`)
    }
return (
  <div className="bg-[var(--secondary-color)] h-full w-full rounded-md">
    {/* Student Name (with null check) */}
    <h2 className="flex justify-center items-center font-bold text-3xl py-3">
      Student {studentData?.firstName || "N/A"} {studentData?.lastName || "N/A"}
    </h2>

    <div className="h-[1px] w-full p-2 px-12">
      <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
    </div>

    <div className="flex pt-6 justify-center gap-22 w-full items-stretch px-24">
      {/* Student Information Section */}
      <div className="flex flex-col bg-white brightness-95 rounded-md py-10 px-6 text-lg flex-1">
        <h2 className="flex justify-center pb-4 text-lg font-medium">Student Information</h2>
        <div className="space-y-4">
          {/* First Name */}
          <div className="grid grid-cols-2 items-center">
            <p className="font-medium">First Name:</p>
            {editMode ? (
              <input
                type="text"
                name="firstName"
                value={studentData?.firstName || ""}
                onChange={handleInputChange}
                className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
              />
            ) : (
              <p className="text-[var(--g-color)]">{studentData?.firstName || "N/A"}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="grid grid-cols-2 items-center">
            <p className="font-medium">Last Name:</p>
            {editMode ? (
              <input
                type="text"
                name="lastName"
                value={studentData?.lastName || ""}
                onChange={handleInputChange}
                className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
              />
            ) : (
              <p className="text-[var(--g-color)]">{studentData?.lastName || "N/A"}</p>
            )}
          </div>

          {/* Student ID */}
          <div className="grid grid-cols-2 items-center">
            <p className="font-medium">Student ID:</p>
            {editMode ? (
              <input
                type="text"
                name="id"
                value={studentData?.id || ""}
                onChange={handleInputChange}
                className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
              />
            ) : (
              <p className="text-[var(--g-color)]">{studentData?.id || "N/A"}</p>
            )}
          </div>

          {/* Email */}
          <div className="grid grid-cols-2 items-center">
            <p className="font-medium">Email:</p>
            {editMode ? (
              <input
                type="text"
                name="email"
                value={studentData?.email || ""}
                onChange={handleInputChange}
                className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
              />
            ) : (
              <p className="text-[var(--g-color)]">{studentData?.email || "N/A"}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="grid grid-cols-2 items-center">
            <p className="font-medium">Phone Number:</p>
            {editMode ? (
              <input
                type="text"
                name="phone"
                value={studentData?.phone || ""}
                onChange={handleInputChange}
                className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
              />
            ) : (
              <p className="text-[var(--g-color)]">{studentData?.phone || "N/A"}</p>
            )}
          </div>
        </div>
      </div>

      <div className="w-[1px] p-2 px-12">
        <div className="w-[1px] h-full bg-[var(--g-color)] opacity-25"></div>
      </div>

      {/* Room Information Section */}
        <div 
        onClick={(e) => {
            if (!showRoomDropdown && !showBlockDropdown && studentData.room) {
                goToRoom();
            }
        }} 
        className="flex flex-col bg-white brightness-95 rounded-md py-10 px-6 text-lg flex-1 cursor-pointer hover:bg-gray-100"
        >
        <h2 className="flex justify-center pb-4 text-lg font-medium">Room Information</h2>
        <div className="space-y-4">
            {/* Room Dropdown */}
            
            <div className="grid grid-cols-2 items-center">
            <p className="font-medium">Room:</p>
            {editMode ? (
                <div className="relative" ref={roomDropdownRef}>
                <div 
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm h-[44px] flex items-center cursor-pointer"
                    onClick={(e) => {
                    e.stopPropagation(); // Prevent parent onClick
                    setShowRoomDropdown(!showRoomDropdown);
                    setShowBlockDropdown(false);
                    }}
                >
                    {studentData?.room?.number || "No room assigned"}
                </div>
                
                {showRoomDropdown && (
                    <div 
                    className="absolute z-10 mt-1 w-54 bg-[var(--w-color)] border border-[var(--g-color)] rounded-md shadow-lg max-h-60 overflow-auto"
                    onClick={(e) => e.stopPropagation()} // Prevent parent onClick
                    >
                    <div className="p-2 sticky top-0 bg-[var(--w-color)] z-20 border-b border-[var(--g-color-opacity)]">
                        <input
                        type="text"
                        placeholder="Search rooms..."
                        value={roomSearch}
                        onChange={(e) => {
                            e.stopPropagation(); // Prevent parent onClick
                            setRoomSearch(e.target.value);
                        }}
                        className="bg-[var(--w-color)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                        autoFocus
                        />
                    </div>
                    
                    <div className="py-1 relative z-10">
                        {filteredRooms?.length > 0 ? (
                        filteredRooms.map(room => (
                            <div
                                key={room.number}
                                className={`px-3 py-2 cursor-pointer hover:bg-[var(--g-color-opacity)] ${
                                studentData?.room?.number === room.number ? "bg-[var(--g-color-opacity)]" : ""
                                }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRoomSelect(room, e)
                                }}
                            >
                                {room.number}
                            </div>
                        ))
                        ) : (
                        <div className="px-3 py-2 text-gray-500">No rooms found</div>
                        )}
                    </div>
                    </div>
                )}
                </div>
            ) : (
                <p className="text-[var(--g-color)]">{studentData?.room?.number || "No room assigned"}</p>
            )}
            </div>

            {/* Block Dropdown */}
            <div className="grid grid-cols-2 items-center">
            <p className="font-medium">Block:</p>
            {editMode ? (
                <div className="relative" ref={blockDropdownRef}>
                <div 
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm h-[44px] flex items-center cursor-pointer"
                    onClick={(e) => {
                    e.stopPropagation(); // Prevent parent onClick
                    setShowBlockDropdown(!showBlockDropdown);
                    setShowRoomDropdown(false);
                    }}
                >
                    {studentData?.block?.name || "No block assigned"}
                </div>
                
                {showBlockDropdown && (
                    <div 
                    className="absolute z-10 mt-1 w-54 bg-[var(--w-color)] border border-[var(--g-color)] rounded-md shadow-lg max-h-60 overflow-auto"
                    onClick={(e) => e.stopPropagation()} // Prevent parent onClick
                    >
                    <div className="p-2 sticky top-0 bg-[var(--w-color)] z-20 border-b border-[var(--g-color-opacity)]">
                        <input
                        type="text"
                        placeholder="Search blocks..."
                        value={blockSearch}
                        onChange={(e) => {
                            e.stopPropagation(); // Prevent parent onClick
                            setBlockSearch(e.target.value);
                        }}
                        className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                        autoFocus
                        />
                    </div>
                    
                    <div className="py-1 relative z-10">
                        {filteredBlocks?.length > 0 ? (
                        filteredBlocks.map(block => (
                            <div
                            key={block}
                            className={`px-3 py-2 cursor-pointer hover:bg-[var(--g-color-opacity)] ${
                                studentData?.block?.name === block.name ? "bg-[var(--g-color-opacity)]" : ""
                            }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleBlockSelect(block, e);
                            }}
                            >
                            {block.name}
                            </div>
                        ))
                        ) : (
                        <div className="px-3 py-2 text-gray-500">No blocks found</div>
                        )}
                    </div>
                    </div>
                )}
                </div>
            ) : (
                <p className="text-[var(--g-color)]">{studentData?.block?.name || "No block assigned"}</p>
            )}
            </div>

            {/* Reports Count */}
            <div className="grid grid-cols-2 items-center">
            <p className="font-medium">Reports:</p>
            <p className="text-[var(--g-color)]">{studentData?.reports?.count || 0}</p>
            </div>

            {/* Supplies */}
            <div className="flex gap-5 justify-around pt-4">
            {Object.entries(studentData?.supplies || {}).map(([item, count]) => (
                <div 
                key={item} 
                className="flex flex-col items-center"
                onClick={(e) => e.stopPropagation()} // Prevent parent onClick
                >
                <div className="flex flex-col items-center">
                    {supplyIcons[item]}
                    <span className="capitalize">{item}</span>
                </div>
                {editMode ? (
                    <input
                    type="number"
                    name={item}
                    value={count || 0}
                    onChange={handleInputChange}
                    min="0"
                    max="4"
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] text-center"
                    onClick={(e) => e.stopPropagation()} // Prevent parent onClick
                    />
                ) : (
                    <p>{count || 0}/4</p>
                )}
                </div>
            ))}
            </div>
        </div>
        </div>
    </div>

    {/* Reports Section */}
    <div className="flex pt-6 justify-center gap-32 w-full items-stretch px-24">
      <div className="flex flex-col bg-white brightness-95 rounded-md py-4 px-6 text-lg flex-1">
        <h2 className="flex justify-center pb-4 text-lg font-medium">Reports</h2>
        <div className="border pt-2 px-2 rounded-2xl border-gray-300">
        <div className="py-2">
            {studentData?.reports?.details?.length > 0 ? (
                studentData.reports.details.map((report, index) => (
                <div
                    key={index}
                    onClick={() => pushToReport(report._id)}
                    className="flex items-center px-2 hover:bg-gray-100 cursor-pointer"
                >
                    <p className="py-2 pl-4 font-semibold w-6">{index + 1}.</p>
                    <div className="flex justify-between flex-1">
                    <p className="py-2 pl-4">{new Date(report.createdAt).toLocaleString("en-US")}</p>
                    <p className="py-2 pl-4">{report.issues[0]}</p>
                    <p className={`py-2 pl-4 ${urgencyColor[report.urgency]}`}>{report.urgency}</p>
                    <p className="py-2 pl-4">{report.status}</p>
                    </div>
                </div>
                ))
            ) : (
                <p className="py-2 text-center text-gray-500">No reports found</p>
            )}
        </div>


        </div>
      </div>
    </div>

    {/* Edit/Save Buttons */}
    <div className="flex justify-center pt-6 pb-4">
      {editMode ? (
        <div className="flex gap-4">
          <button 
            onClick={handleSave}
            className={`text-[var(--w-color)] px-6 py-2 rounded-md transition bg-[var(--green-color)] ${isDirty ? "cursor-pointer shadow hover:brightness-110" : "cursor-not-allowed brightness-80"}`}
            disabled={!isDirty}
          >
            Save Changes
          </button>
          <button 
            onClick={handleCancel} 
            className="bg-[var(--w-color)] p-2 font-medium rounded-md cursor-pointer"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button 
          onClick={() => setEditMode(true)}
          className="bg-[var(--green-color)] text-white px-6 py-2 rounded-md cursor-pointer"
        >
          Edit Information
        </button>
      )}
    </div>
  </div>
);
}