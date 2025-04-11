import { useState } from "react";

export default function AddBlock( { setShowAddBlock }) {
    const CustomizeableContent = () => {
        return(
            <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 py-2 rounded-md flex-1">            
                <label className="flex " >
                    <div className="w-86">
                        <p className="font-bold text-lg cursor-text">Block name</p>
                        <p className="text-xs text-[var(--g-color)] cursor-text">Chose your block name</p>
                    </div>
                    <input 
                     type="number" 
                     placeholder="ex : 5" 
                     className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                    />

                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <label className="flex " >
                    <div className="w-86">
                        <p className="font-bold text-lg cursor-text">Floors per block</p>
                        <p className="text-xs text-[var(--g-color)] cursor-text">Chose how many floors are in your block</p>
                    </div>
                    <input 
                     type="number" 
                     placeholder="ex : 5" 
                     className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                    />

                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>
                <label className="flex " >
                    <div className="w-86">
                        <p className="font-bold text-lg cursor-text">Rooms per floor</p>
                        <p className="text-xs text-[var(--g-color)] cursor-text">Chose how many rooms are in one floor</p>
                    </div>
                    <input 
                     type="number" 
                     placeholder="ex : 5" 
                     className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                    />

                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>
                <label className="flex " >
                    <div className="w-86">
                        <p className="font-bold text-lg cursor-text">Rooms names</p>
                        <p className="text-xs text-[var(--g-color)] cursor-text">Chose wether you want to name your rooms yourself or you want to autoname them.</p>
                    </div>
                    <select
                     value={selection}
                     onChange={(e) => setSelection(e.target.value)}
                     className="bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] h-[44px] w-72 ml-56"
                    >
                        <option value="alphabetical">Name by block and floor</option>
                        <option value="numerical">Name (Indexed Order)</option>
                        <option value="custom">Custom Order</option>
                    </select>
                    {selection === "alphabetical" && (
                        <p className="text-sm text-gray-500">ex : H309</p>
                    )}
                </label>

                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>
                
                <label className="flex " >
                    <div className="w-86">
                        <p className="font-bold text-lg cursor-text">Max students per room</p>
                        <p className="text-xs text-[var(--g-color)] cursor-text">Chose how many students can be in one room.</p>
                    </div>
                    <input 
                     type="number" 
                     placeholder="ex : 5" 
                     className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                    />

                </label>


                <div className="h-[1px] w-full py-2">
                    <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
                </div>
            </div>
        );
    }
    const [selection, setSelection] = useState("");
    const [mode, setMode] = useState("customizable"); 

    return(
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
                <span className="text-lg font-medium ">Customizable</span>
            </label>
            {mode === "customizable" ? (
                <CustomizeableContent />
            ) : <div />}
            <label className={`flex items-center gap-2 cursor-pointer p-5 ${mode === "automate" ? "bg-[var(--g-color-opacity-v2)]" : ""}`}>
                <input
                    type="radio"
                    name="mode"
                    value="automate"
                    checked={mode === "automate"}
                    onChange={() => setMode("automate")}
                    className="h-3 w-3 text-[var(--green-color)] focus:ring-[var(--green-color)]"
                />
                <span className="text-lg font-medium">Automate</span>
            </label>

            <div className="flex gap-1.5 ml-auto pt-2 pb-1 px-2">
                <button onClick={() => setShowAddBlock(false)} className="bg-[var(--w-color)] p-2 font-medium rounded-md cursor-pointer">Cancel</button>
                <button onClick={() => setShowAddBlock(false)} className="bg-[var(--green-color)] p-2 font-medium text-[var(--w-color)] rounded-md cursor-pointer">Add</button>
            </div>
        </div>
    )
}