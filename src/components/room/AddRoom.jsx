import { useState } from "react";

export default function AddRoom({ setShowAddRoom, blocks }) {
    const [formData, setFormData] = useState({
        name: "",
        namingType: "alphabetical",
        maxStudents: "",
        block: "",
        students: []
    });
    const [newStudent, setNewStudent] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddStudent = () => {
        if (newStudent.trim() && !formData.students.includes(newStudent.trim())) {
            setFormData(prev => ({
                ...prev,
                students: [...prev.students, newStudent.trim()]
            }));
            setNewStudent("");
        }
    };

    const handleRemoveStudent = (studentToRemove) => {
        setFormData(prev => ({
            ...prev,
            students: prev.students.filter(student => student !== studentToRemove)
        }));
    };

    const handleSubmit = () => {
        // Validate form data before submission
        if (!formData.name || !formData.maxStudents || !formData.block) {
            alert("Please fill all required fields");
            return;
        }

        // Here you would typically call an API to add the room
        console.log("Room data:", formData);
        setShowAddRoom(false);
    };

    return (
        <div className="flex flex-col bg-[var(--secondary-color)] rounded-md flex-1 w-[1200px]">
            <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 py-2 rounded-md flex-1">            
                <label className="flex">
                    <div className="w-86">
                        <p className="font-bold text-lg">Room name <span className="text-red-500">*</span></p>
                        <p className="text-xs text-[var(--g-color)]">Choose your room name</p>
                    </div>
                    <div className="flex flex-col">
                        <input 
                            name="name"
                            type="text" 
                            placeholder={formData.namingType === "alphabetical" ? "ex: H309" : "Enter custom name"} 
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                            required
                        />
                        {formData.namingType === "alphabetical" && (
                            <p className="text-sm text-gray-500 ml-56">Format: BlockLetter + FloorNumber + RoomNumber</p>
                        )}
                    </div>
                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <label className="flex">
                    <div className="w-86">
                        <p className="font-bold text-lg">Naming type</p>
                        <p className="text-xs text-[var(--g-color)]">Choose how to name your room</p>
                    </div>
                    <select
                        name="namingType"
                        value={formData.namingType}
                        onChange={handleChange}
                        className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] h-[44px] w-72 ml-56"
                    >
                        <option value="alphabetical">Alphabetical Order</option>
                        <option value="custom">Custom Name</option>
                    </select>
                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <label className="flex">
                    <div className="w-86">
                        <p className="font-bold text-lg">Max students <span className="text-red-500">*</span></p>
                        <p className="text-xs text-[var(--g-color)]">Maximum number of students in this room</p>
                    </div>
                    <input 
                        name="maxStudents"
                        type="number" 
                        placeholder="ex: 4" 
                        value={formData.maxStudents}
                        onChange={handleChange}
                        min="1"
                        className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                        required
                    />
                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <label className="flex">
                    <div className="w-86">
                        <p className="font-bold text-lg">Block <span className="text-red-500">*</span></p>
                        <p className="text-xs text-[var(--g-color)]">Select which block this room belongs to</p>
                    </div>
                    <select
                        name="block"
                        value={formData.block}
                        onChange={handleChange}
                        className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] h-[44px] w-72 ml-56"
                        required
                    >
                        <option value="">Select a block</option>
                        {blocks.map(block => (
                            <option key={block} value={block}>{block}</option>
                        ))}
                    </select>
                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <label className="flex flex-col">
                    <div className="flex items-center gap-4">
                        <div className="w-86">
                            <p className="font-bold text-lg">Add Students</p>
                            <p className="text-xs text-[var(--g-color)]">Add students to this room</p>
                        </div>
                        <div className="flex gap-2 ml-56">
                            <input 
                                type="text" 
                                placeholder="Student name or ID"
                                value={newStudent}
                                onChange={(e) => setNewStudent(e.target.value)}
                                className="bg-[var(--g-color-opacity)] rounded-md py-1.5 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] w-48"
                            />
                            <button 
                                type="button"
                                onClick={handleAddStudent}
                                className="bg-[var(--green-color)] text-white px-4 rounded-md hover:bg-green-600 transition cursor-pointer" 
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    {formData.students.length > 0 && (
                        <div className="mt-4 ml-[360px]">
                            <p className="text-sm font-medium mb-2">Students in this room:</p>
                            <div className="flex flex-wrap gap-2">
                                {formData.students.map(student => (
                                    <div key={student} className="bg-[var(--g-color-opacity)] px-3 py-1 rounded-full flex items-center gap-2">
                                        <span>{student}</span>
                                        <button 
                                            type="button"
                                            onClick={() => handleRemoveStudent(student)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </label>
            </div>

            <div className="flex gap-1.5 ml-auto pt-2 pb-1 px-2">
                <button onClick={() => setShowAddRoom(false)} className="bg-[var(--w-color)] p-2 font-medium rounded-md cursor-pointer">Cancel</button>
                <button onClick={() => setShowAddRoom(false)} className="bg-[var(--green-color)] p-2 font-medium text-[var(--w-color)] rounded-md cursor-pointer">Create Room</button>
            </div>
        </div>
    );
}