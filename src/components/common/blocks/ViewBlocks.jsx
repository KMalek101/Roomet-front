import { useState } from "react";

export default function ViewBlocks() {
    const [selection, setSelection] = useState("");

    return(
        <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 rounded-md flex-1 ">
            
            <label className="flex" >
                <div className="w-86">
                    <p className="text-xl font-bold">Blocks number</p>
                    <p className="text-xs text-[var(--g-color)]">Please specify the number of blocks you have in your drum.</p>
                </div>
                <input 
                 type="number" 
                 placeholder="ex : 12" 
                 className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                />
            </label>

            <div className="h-[1px] w-full px-2 py-7">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            <label className="flex " >
                <div className="w-86">
                    <p className="text-xl font-bold cursor-text">Blocks names</p>
                    <p className="text-xs text-[var(--g-color)] cursor-text">Please choose wether you want to name your blocks yourself or auto name them.</p>
                </div>
                <select
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

            <label className="flex " >
                <div className="w-86">
                    <p className="text-xl font-bold cursor-text">Floors per block</p>
                    <p className="text-xs text-[var(--g-color)] cursor-text">Please choose how many floors are in each block of your blocks.</p>
                </div>
                <input 
                 type="number" 
                 placeholder="ex : 5" 
                 className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                />

            </label>

            <div className="h-[1px] w-full px-2 py-7">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            <label className="flex " >
                <div className="w-86">
                    <p className="text-xl font-bold cursor-text">Rooms per Floor</p>
                    <p className="text-xs text-[var(--g-color)] cursor-text">Please choose how many rooms are in each floor of your floors.</p>
                </div>
                <input 
                 type="number" 
                 placeholder="ex : 14" 
                 className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-24 h-[44px] px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)] ml-56"
                />

            </label>

            <div className="h-[1px] w-full px-2 py-7">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            <label className="flex" >
                <div className="w-86">
                    <p className="text-xl font-bold cursor-text">Rooms names</p>
                    <p className="text-xs text-[var(--g-color)] cursor-text">Please choose wether you want to name your rooms yourself or auto name them.</p>
                </div>
                <div className="flex flex-col items-center gap-2">
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
                </div>
            </label>
            
        </div>
    )
}