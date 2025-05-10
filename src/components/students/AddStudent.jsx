import { useState, useRef, useEffect } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { addStudent } from "@/utils/student";

export default function AddStudent({ setShowAddStudent }) {
    const [roomSearch, setRoomSearch] = useState("");
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const availableRooms = ["H309", "H310", "H311", "H312", "H313", "H314", "H315", "H316", "H317"];
    
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = (file) => {
    if (!file) return;
    
    // Validate file type
    const validTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    if (!validTypes.includes(file.type) && !file.name.match(/\.(csv|xlsx|xls)$/)) {
        alert('Please upload a valid CSV or Excel file');
        return;
    }

    // Validate file size (e.g., 5MB max)
    if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
    }

    setSelectedFile(file);
    
    // Optional: Parse the file immediately
    parseFile(file);
    };

    const parseFile = (file) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
        const content = e.target.result;
        
        if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
            // Parse CSV
            const results = Papa.parse(content, {
            header: true,
            skipEmptyLines: true
            });
            console.log('Parsed CSV data:', results.data);
            // Process student data here
        } else {
            // Parse Excel
            const workbook = XLSX.read(content, { type: 'binary' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet);
            console.log('Parsed Excel data:', jsonData);
            // Process student data here
        }
        } catch (error) {
        console.error('Error parsing file:', error);
        alert('Error parsing file. Please check the format.');
        }
    };
    
    if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        reader.readAsText(file);
    } else {
        reader.readAsBinaryString(file);
    }
    };

    // Form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        roomSelection: "",
        email: "",
        studentId: "",
        phone: ""
    });
    
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        roomSelection: false,
        email: false,
        studentId: false,
        phone: false
    });

    const filteredRooms = availableRooms.filter(room => 
        room.toLowerCase().includes(roomSearch.toLowerCase())
    );

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowRoomDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: false
            }));
        }
    };

    const handlePhoneChange = (value) => {
        setFormData(prev => ({
            ...prev,
            phone: value
        }));
        if (errors.phone) {
            setErrors(prev => ({
                ...prev,
                phone: false
            }));
        }
    };

    const handleRoomSelect = (room) => {
        setFormData(prev => ({
            ...prev,
            roomSelection: room
        }));
        setShowRoomDropdown(false);
        setRoomSearch("");
        if (errors.roomSelection) {
            setErrors(prev => ({
                ...prev,
                roomSelection: false
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {
            firstName: !formData.firstName.trim(),
            lastName: !formData.lastName.trim(),
            roomSelection: !formData.roomSelection,
            email: !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email),
            studentId: !formData.studentId.trim(),
            phone: !formData.phone
        };
        
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    // here is the actual student post 
    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }
    
        try {
            const studentData = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                email: formData.email.trim(),
                studentId: formData.studentId.trim(),
                phone: formData.phone,
                roomSelection: formData.roomSelection
            };
    
            await addStudent(studentData);
            
            setShowAddStudent(false);
            
            alert('Student added successfully!');
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to add student. Please try again.');
        }
    };

    const [mode, setMode] = useState("customizable");

    return (
        <div className="flex flex-col bg-[var(--secondary-color)] rounded-md flex-1 w-[1200px]">
            <label className={`flex items-center gap-2 cursor-pointer p-5 ${mode === "customizable" ? "bg-[var(--g-color-opacity-v2)]" : ""}`}>
                <input
                    type="radio"
                    name="mode"
                    value="customizable"
                    checked={mode === "customizable"}
                    onChange={() => setMode("customizable")}
                    className="h-3 w-3 text-[var(--green-color)] focus:ring-[var(--green-color)]"
                />
                <span className="text-lg font-medium">Manual Entry</span>
            </label>

            {/* customizable mode */}
            {mode === "customizable" && (
                <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 py-2 rounded-md flex-1">            
                    <label className="flex">
                        <div className="w-86">
                            <p className="font-bold text-lg cursor-text">First Name</p>
                            <p className="text-xs text-[var(--g-color)] cursor-text">Student's first name</p>
                        </div>
                        <div className="ml-56 flex flex-col">
                            <input 
                                type="text" 
                                name="firstName"
                                placeholder="ex: Malek" 
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 w-72 h-[44px] px-2 text-sm focus:outline-1 ${errors.firstName ? "focus:outline-red-500" : "focus:outline-[var(--green-color)]"}`}
                            />
                            {errors.firstName && <span className="text-red-500 text-xs mt-1">First name is required</span>}
                        </div>
                    </label>

                    <div className="h-[1px] w-full py-2">
                        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                    </div>

                    <label className="flex">
                        <div className="w-86">
                            <p className="font-bold text-lg cursor-text">Last Name</p>
                            <p className="text-xs text-[var(--g-color)] cursor-text">Student's last name</p>
                        </div>
                        <div className="ml-56 flex flex-col">
                            <input 
                                type="text" 
                                name="lastName"
                                placeholder="ex: Kaouche" 
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 w-72 h-[44px] px-2 text-sm focus:outline-1 ${errors.lastName ? "focus:outline-red-500" : "focus:outline-[var(--green-color)]"}`}
                            />
                            {errors.lastName && <span className="text-red-500 text-xs mt-1">Last name is required</span>}
                        </div>
                    </label>

                    <div className="h-[1px] w-full py-2">
                        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                    </div>

                    <label className="flex">
                        <div className="w-86">
                            <p className="font-bold text-lg cursor-text">Room Assignment</p>
                            <p className="text-xs text-[var(--g-color)] cursor-text">Assign student to a room</p>
                        </div>
                        <div className="ml-56 w-72 relative" ref={dropdownRef}>
                            <div 
                                className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm h-[44px] flex items-center cursor-pointer ${errors.roomSelection ? "border border-red-500" : ""}`}
                                onClick={() => setShowRoomDropdown(!showRoomDropdown)}
                            >
                                {formData.roomSelection || "Select a room"}
                            </div>
                            {errors.roomSelection && <span className="text-red-500 text-xs mt-1">Room selection is required</span>}
                            
                            {showRoomDropdown && (
                                <div className="absolute z-10 mt-1 w-full bg-[var(--secondary-color)] border border-[var(--g-color)] rounded-md shadow-lg max-h-60 overflow-auto">
                                    <div className="p-2 sticky top-0 bg-[var(--secondary-color)] z-20 border-b border-[var(--g-color-opacity)]">
                                        <input
                                            type="text"
                                            placeholder="Search rooms..."
                                            value={roomSearch}
                                            onChange={(e) => setRoomSearch(e.target.value)}
                                            className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-full px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]"
                                            autoFocus
                                        />
                                    </div>
                                    
                                    <div className="py-1 relative z-10">
                                        {filteredRooms.length > 0 ? (
                                            filteredRooms.map(room => (
                                                <div
                                                    key={room}
                                                    className={`px-3 py-2 cursor-pointer hover:bg-[var(--g-color-opacity)] ${
                                                        formData.roomSelection === room ? "bg-[var(--g-color-opacity)]" : ""
                                                    }`}
                                                    onClick={() => handleRoomSelect(room)}
                                                >
                                                    {room}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="px-3 py-2 text-gray-500">No rooms found</div>
                                        )}
                                        
                                        <div
                                            className={`px-3 py-2 cursor-pointer hover:bg-[var(--g-color-opacity)] border-t border-[var(--g-color-opacity)] ${
                                                formData.roomSelection === "none" ? "bg-[var(--g-color-opacity)]" : ""
                                            }`}
                                            onClick={() => handleRoomSelect("none")}
                                        >
                                            No room
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </label>

                    <div className="h-[1px] w-full py-2">
                        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                    </div>

                    <label className="flex">
                        <div className="w-86">
                            <p className="font-bold text-lg cursor-text">Email</p>
                            <p className="text-xs text-[var(--g-color)] cursor-text">Student's email address</p>
                        </div>
                        <div className="ml-56 flex flex-col">
                            <input 
                                type="email" 
                                name="email"
                                placeholder="ex: example@univ.dz" 
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 w-72 h-[44px] px-2 text-sm focus:outline-1 ${errors.email ? "focus:outline-red-500" : "focus:outline-[var(--green-color)]"}`}
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1">{formData.email ? "Invalid email format" : "Email is required"}</span>}
                        </div>
                    </label>

                    <div className="h-[1px] w-full py-2">
                        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                    </div>

                    <label className="flex">
                        <div className="w-86">
                            <p className="font-bold text-lg cursor-text">Student ID</p>
                            <p className="text-xs text-[var(--g-color)] cursor-text">University registration number</p>
                        </div>
                        <div className="ml-56 flex flex-col">
                            <input 
                                type="text" 
                                name="studentId"
                                placeholder="ex: 12345678" 
                                value={formData.studentId}
                                onChange={handleInputChange}
                                className={`bg-[var(--g-color-opacity)] rounded-md py-1.5 w-72 h-[44px] px-2 text-sm focus:outline-1 ${errors.studentId ? "focus:outline-red-500" : "focus:outline-[var(--green-color)]"}`}
                            />
                            {errors.studentId && <span className="text-red-500 text-xs mt-1">Student ID is required</span>}
                        </div>
                    </label>
                            
                    <div className="flex flex-col gap-2">
                        <div className="flex">
                            <div className="w-86">
                                <p className="font-bold text-lg cursor-text">Phone Number</p>
                                <p className="text-xs text-[var(--g-color)] cursor-text">Student's phone number</p>
                            </div>
                            <div className="ml-56 flex flex-col">
                                <PhoneInputWithCountrySelect
                                    international
                                    defaultCountry="DZ"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}                                    
                                    style={{ '--PhoneInputCountryFlag-height': '2em'}}
                                    className={`bg-[var(--g-color-opacity)] w-[350px] rounded-md py-1.5 h-[44px] px-4 text-md focus:outline-1 ${errors.phone ? "focus:outline-red-500" : "focus:outline-[var(--green-color)]"}`}
                                />
                                {errors.phone && <span className="text-red-500 text-xs mt-1">Phone number is required</span>}
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] w-full py-2">
                        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                    </div>
                </div>
            )}
            
            <label className={`flex items-center gap-2 cursor-pointer p-5 ${mode === "automate" ? "bg-[var(--g-color-opacity-v2)]" : ""}`}>
            <input
                type="radio"
                name="mode"
                value="automate"
                checked={mode === "automate"}
                onChange={() => setMode("automate")}
                className="h-3 w-3 text-[var(--green-color)] focus:ring-[var(--green-color)]"
            />
            <div className="flex flex-col">
                <span className="text-lg font-medium">Bulk Import</span>
                {mode === "automate" && (
                <div className="mt-2">
                    <label className="flex flex-col items-center px-4 py-2 bg-white rounded-md border border-[var(--g-color)] cursor-pointer hover:bg-gray-50">
                    <span className="text-sm text-[var(--g-color)]">Upload CSV/Excel File</span>
                    <input
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        onChange={(e) => handleFileUpload(e.target.files[0])}
                        className="hidden"
                    />
                    <span className="text-xs text-gray-500 mt-1">(Format: Name, Email, ID, etc.)</span>
                    </label>
                    {selectedFile && (
                    <div className="mt-2 text-sm text-[var(--green-color)] flex items-center gap-1">
                        {selectedFile.name}
                        <button 
                        onClick={() => setSelectedFile(null)}
                        className="text-[var(--red-color)] ml-2"
                        >
                        Remove
                        </button>
                    </div>
                    )}
                </div>
                )}
            </div>
            </label>

            {/* validate button */}
            <div className="flex gap-1.5 ml-auto pt-2 pb-1 px-2">
                <button 
                    onClick={() => setShowAddStudent(false)} 
                    className="bg-[var(--w-color)] p-2 font-medium rounded-md cursor-pointer"
                >
                    Cancel
                </button>
                <button 
                    onClick={mode === "customizable" ? handleSubmit : handleBulkImport} 
                    className="bg-[var(--green-color)] p-2 font-medium text-[var(--w-color)] rounded-md cursor-pointer"
                >
                    {mode === "customizable" ? "Add Student" : "Import Students"}
                </button>
            </div>
        </div>
    )
}