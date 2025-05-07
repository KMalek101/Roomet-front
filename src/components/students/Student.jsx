import { useState, useRef, useEffect } from "react";

export default function Student() {
    const initialData = {
        firstName: "Malek",
        lastName: "Kaouche",
        id: "12345678",
        phone: "+213123456789",
        email: "malek.kaouche@univ.dz",
        room: "H309",
        block: "H",
        reports: 3,
        supplies: {
            chairs: 3,
            pillows: 3,
            tables: 3,
            beds: 3
        }
    };

    const [studentData, setStudentData] = useState(initialData);
    const [isDirty, setIsDirty] = useState(false);
    const [roomSearch, setRoomSearch] = useState("");
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [blockSearch, setBlockSearch] = useState("");
    const [showBlockDropdown, setShowBlockDropdown] = useState(false);
    const roomDropdownRef = useRef(null);
    const blockDropdownRef = useRef(null);
    
    const availableRooms = ["H309", "H310", "H311", "H312", "H313", "H314", "H315", "H316", "H317"];
    const availableBlocks = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    
    const filteredRooms = availableRooms.filter(room => 
        room.toLowerCase().includes(roomSearch.toLowerCase())
    );
    
    const filteredBlocks = availableBlocks.filter(block => 
        block.toLowerCase().includes(blockSearch.toLowerCase())
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
        e.stopPropagation(); // Prevent event bubbling
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
        e.stopPropagation(); // Prevent event bubbling
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

    const urgencyColor = {
        Critical: "font-medium text-red-600", 
        High: "font-medium text-red-500",
        Medium: "text-green-600",
      };
    
    return (
        <div className="bg-[var(--secondary-color)] h-full w-full rounded-md">
            <h2 className="flex justify-center items-center font-bold text-3xl py-3">
                Student {studentData.firstName} {studentData.lastName}
            </h2>

            <div className="h-[1px] w-full p-2 px-12">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            <div className="flex pt-6 justify-center gap-22 w-full items-stretch px-24">
                <div className="flex flex-col bg-white brightness-95 rounded-md py-10 px-6 text-lg flex-1">
                    <h2 className="flex justify-center pb-4 text-lg font-medium">Student Information</h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">First Name:</p>
                            {editMode ? (
                                <input
                                    type="text"
                                    name="firstName"
                                    value={studentData.firstName}
                                    onChange={handleInputChange}
                                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                />
                            ) : (
                                <p className="text-[var(--g-color)]">{studentData.firstName}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Last Name:</p>
                            {editMode ? (
                                <input
                                    type="text"
                                    name="lastName"
                                    value={studentData.lastName}
                                    onChange={handleInputChange}
                                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                />
                            ) : (
                                <p className="text-[var(--g-color)]">{studentData.lastName}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Student ID:</p>
                            {editMode ? (
                                <input
                                    type="text"
                                    name="id"
                                    value={studentData.id}
                                    onChange={handleInputChange}
                                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                />
                            ) : (
                                <p className="text-[var(--g-color)]">{studentData.id}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Email:</p>
                            {editMode ? (
                                <input
                                    type="text"
                                    name="email"
                                    value={studentData.email}
                                    onChange={handleInputChange}
                                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                />
                            ) : (
                                <p className="text-[var(--g-color)]">{studentData.email}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Phone Number:</p>
                            {editMode ? (
                                <input
                                    type="text"
                                    name="phone"
                                    value={studentData.phone}
                                    onChange={handleInputChange}
                                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                />
                            ) : (
                                <p className="text-[var(--g-color)]">{studentData.phone}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-[1px] p-2 px-12">
                    <div className="w-[1px] h-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <div className="flex flex-col bg-white brightness-95 rounded-md py-10 px-6 text-lg flex-1">
                    <h2 className="flex justify-center pb-4 text-lg font-medium">Room Information</h2>
                    <div className="space-y-4">
                        {/* Room Selection Dropdown */}
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Room:</p>
                            {editMode ? (
                                <div className="relative" ref={roomDropdownRef}>
                                    <div 
                                        className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm h-[44px] flex items-center cursor-pointer"
                                        onClick={() => {
                                            setShowRoomDropdown(!showRoomDropdown);
                                            setShowBlockDropdown(false);
                                        }}
                                    >
                                        {studentData.room || "Select a room"}
                                    </div>
                                    
                                    {showRoomDropdown && (
                                        <div className="absolute z-10 mt-1 w-54 bg-[var(--w-color)] border border-[var(--g-color)] rounded-md shadow-lg max-h-60 overflow-auto">
                                            <div className="p-2 sticky top-0 bg-[var(--w-color)] z-20 border-b border-[var(--g-color-opacity)]">
                                                <input
                                                    type="text"
                                                    placeholder="Search rooms..."
                                                    value={roomSearch}
                                                    onChange={(e) => {
                                                        e.stopPropagation();
                                                        setRoomSearch(e.target.value);
                                                    }}
                                                    className="bg-[var(--w-color)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                                    autoFocus
                                                />
                                            </div>
                                            
                                            <div className="py-1 relative z-10">
                                                {filteredRooms.length > 0 ? (
                                                    filteredRooms.map(room => (
                                                        <div
                                                            key={room}
                                                            className={`px-3 py-2 cursor-pointer hover:bg-[var(--g-color-opacity)] ${
                                                                studentData.room === room ? "bg-[var(--g-color-opacity)]" : ""
                                                            }`}
                                                            onClick={(e) => handleRoomSelect(room, e)}
                                                        >
                                                            {room}
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
                                <p className="text-[var(--g-color)]">{studentData.room}</p>
                            )}
                        </div>

                        {/* Block Selection Dropdown */}
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Block:</p>
                            {editMode ? (
                                <div className="relative" ref={blockDropdownRef}>
                                    <div 
                                        className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm h-[44px] flex items-center cursor-pointer"
                                        onClick={() => {
                                            setShowBlockDropdown(!showBlockDropdown);
                                            setShowRoomDropdown(false);
                                        }}
                                    >
                                        {studentData.block || "Select a block"}
                                    </div>
                                    
                                    {showBlockDropdown && (
                                        <div className="absolute z-10 mt-1 w-54 bg-[var(--w-color)] border border-[var(--g-color)] rounded-md shadow-lg max-h-60 overflow-auto">
                                            <div className="p-2 sticky top-0 bg-[var(--w-color)] z-20 border-b border-[var(--g-color-opacity)]">
                                                <input
                                                    type="text"
                                                    placeholder="Search blocks..."
                                                    value={blockSearch}
                                                    onChange={(e) => {
                                                        e.stopPropagation();
                                                        setBlockSearch(e.target.value);
                                                    }}
                                                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-44 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                                    autoFocus
                                                />
                                            </div>
                                            
                                            <div className="py-1 relative z-10">
                                                {filteredBlocks.length > 0 ? (
                                                    filteredBlocks.map(block => (
                                                        <div
                                                            key={block}
                                                            className={`px-3 py-2 cursor-pointer hover:bg-[var(--g-color-opacity)] ${
                                                                studentData.block === block ? "bg-[var(--g-color-opacity)]" : ""
                                                            }`}
                                                            onClick={(e) => handleBlockSelect(block, e)}
                                                        >
                                                            {block}
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
                                <p className="text-[var(--g-color)]">{studentData.block}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 items-center">
                            <p className="font-medium">Reports:</p>
                            <p className="text-[var(--g-color)]">{studentData.reports}</p>
                        </div>

                        {/* Supplies - Editable in edit mode */}
                        <div className="flex gap-5 justify-around pt-4">
                            {Object.entries(studentData.supplies).map(([item, count]) => (
                                <div key={item} className="flex flex-col items-center">
                                    <div className="capitalize">{item}</div>
                                    {/* Keep your existing SVG here */}
                                    {editMode ? (
                                        <input
                                            type="number"
                                            name={item}
                                            value={count}
                                            onChange={handleInputChange}
                                            min="0"
                                            max="4"
                                            className="bg-[var(--g-color-opacity)] rounded-md py-1.5 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] text-center"
                                        />
                                    ) : (
                                        <p>{count}/4</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="flex pt-6 justify-center gap-32 w-full items-stretch px-24">
                <div className="flex flex-col bg-white brightness-95 rounded-md py-4 px-6 text-lg flex-1">
                    <h2 className="flex justify-center pb-4 text-lg font-medium">Reports</h2>
                    <div className="border pt-2 px-2 rounded-2xl border-gray-300">
                        <div className="py-2">
                            <div className="flex justify-between">
                                <p className="py-2 pl-4 cursor-pointer hover:bg-gray-100">Report 1 - 12/05/2023</p>
                                <p className="py-2 pl-4 cursor-pointer hover:bg-gray-100">Closed</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="py-2 pl-4 cursor-pointer hover:bg-gray-100">Report 2 - 20/05/2023</p>
                                <p className="py-2 pl-4 cursor-pointer hover:bg-gray-100">Closed</p>
                            </div>
                            <div className="flex justify-between hover:bg-gray-100">
                                <p className="py-2 pl-4 cursor-pointer hover:bg-gray-100">Report 3 - 01/06/2023</p>
                                <p className={urgencyColor["High"]}>High urgency</p>
                                <p className="py-2 pl-4 cursor-pointer hover:bg-gray-100">Pending</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

            <div className="flex justify-center pt-6 pb-4">
                {editMode ? (
                    <div className="flex gap-4">
                        <button 
                            onClick={handleSave}
                            className={`text-[var(--w-color)] px-6 py-2 rounded-md transition bg-[var(--green-color)]  ${isDirty ? "cursor-pointer shadow hover:brightness-110" : "cursor-not-allowed brightness-80"}`}
                            disabled={!isDirty}
                        >
                            Save Changes
                        </button>
                        <button 
                            onClick={handleSave} 
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
    )
}