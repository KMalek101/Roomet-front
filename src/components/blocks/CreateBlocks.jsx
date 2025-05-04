import { useState, useEffect } from "react";

export default function CreateBlocks() {
    const [formData, setFormData] = useState({
        blocksNumber: "",
        blocksNaming: "alphabetical",
        floorsPerBlock: "",
        roomsPerFloor: "",
        roomsNaming: "alphabetical",
        maxStudents: ""
    });
    const [isDirty, setIsDirty] = useState(false);
    const [initialFormData] = useState({...formData});

    // Check if form is dirty
    useEffect(() => {
        const formChanged = Object.keys(formData).some(key => {
            return formData[key] !== initialFormData[key];
        });
        setIsDirty(formChanged);
    }, [formData, initialFormData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return(
        <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 rounded-md flex-1">
            {/* Blocks Number */}
            <label className="flex">
                <div className="w-86">
                    <p className="text-xl font-bold">Blocks number</p>
                    <p className="text-xs text-[var(--g-color)]">Please specify the number of blocks you have in your drum.</p>
                </div>
                <input 
                    name="blocksNumber"
                    type="number" 
                    placeholder="ex : 12" 
                    value={formData.blocksNumber}
                    onChange={handleChange}
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                />
            </label>

            <div className="h-[1px] w-full px-2 py-7">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            {/* Blocks Names */}
            <label className="flex">
                <div className="w-86">
                    <p className="text-xl font-bold cursor-text">Blocks names</p>
                    <p className="text-xs text-[var(--g-color)] cursor-text">Please choose whether you want to name your blocks yourself or auto name them.</p>
                </div>
                <select
                    name="blocksNaming"
                    value={formData.blocksNaming}
                    onChange={handleChange}
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] h-[44px] w-52 ml-56"
                >
                    <option value="alphabetical">Name (A-Z)</option>
                    <option value="numerical">Name (Indexed Order)</option>
                    <option value="custom">Custom Order</option>
                </select>
            </label>

            <div className="h-[1px] w-full px-2 py-7">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            {/* Floors per Block */}
            <label className="flex">
                <div className="w-86">
                    <p className="text-xl font-bold cursor-text">Floors per block</p>
                    <p className="text-xs text-[var(--g-color)] cursor-text">Please choose how many floors are in each block of your blocks.</p>
                </div>
                <input 
                    name="floorsPerBlock"
                    type="number" 
                    placeholder="ex : 5" 
                    value={formData.floorsPerBlock}
                    onChange={handleChange}
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                />
            </label>

            <div className="h-[1px] w-full px-2 py-7">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            {/* Rooms per Floor */}
            <label className="flex">
                <div className="w-86">
                    <p className="text-xl font-bold cursor-text">Rooms per Floor</p>
                    <p className="text-xs text-[var(--g-color)] cursor-text">Please choose how many rooms are in each floor of your floors.</p>
                </div>
                <input 
                    name="roomsPerFloor"
                    type="number" 
                    placeholder="ex : 14" 
                    value={formData.roomsPerFloor}
                    onChange={handleChange}
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                />
            </label>

            <div className="h-[1px] w-full px-2 py-7">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            {/* Rooms names */}
            <label className="flex">
                <div className="w-86">
                    <p className="text-xl font-bold cursor-text">Rooms names</p>
                    <p className="text-xs text-[var(--g-color)] cursor-text">Please choose whether you want to name your rooms yourself or auto name them.</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <select
                        name="roomsNaming"
                        value={formData.roomsNaming}
                        onChange={handleChange}
                        className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] h-[44px] w-72 ml-56"
                    >
                        <option value="alphabetical">Name by block and floor</option>
                        <option value="numerical">Name (Indexed Order)</option>
                        <option value="custom">Custom Order</option>
                    </select>
                    {formData.roomsNaming === "alphabetical" && (
                        <p className="text-sm text-gray-500">ex : H309</p>
                    )}
                </div>
            </label>

            <div className="h-[1px] w-full px-2 py-7">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>
            
            {/* Max students per room */}
            <label className="flex">
                <div className="w-86">
                    <p className="text-xl font-bold cursor-text">Max students per room</p>
                    <p className="text-xs text-[var(--g-color)] cursor-text">Please choose what's the max number of students in one room.</p>
                </div>
                <input 
                    name="maxStudents"
                    type="number" 
                    placeholder="ex : 4" 
                    value={formData.maxStudents}
                    onChange={handleChange}
                    className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                />
            </label>

            <div className="ml-auto">
                <button 
                    disabled={!isDirty}
                    className={`text-[var(--w-color)] px-6 py-2 rounded-md transition bg-[var(--green-color)]  ${isDirty ? "cursor-pointer shadow hover:brightness-110" : "cursor-not-allowed brightness-80"}`}
                >
                    Create
                </button>
            </div>
        </div>
    )
}