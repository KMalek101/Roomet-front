export default function CreateBlocks() {
    return(
        <div className="flex flex-col gap-4 bg-[var(--secondary-color)] p-6 rounded-md flex-1 ">
            <label className="flex flex-col gap-2 " >
                <p className="text-[10px]">How many blocks you have</p>
                <input className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-42 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]" type="text" />
            </label>
            <label className="flex flex-col gap-2">
                <p className="text-[10px]">Block name</p>
                <input className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-42 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]" type="text" />
            </label>
            <label className="flex flex-col gap-2">
                <p className="text-[10px]">How many floors</p>
                <input className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-42 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]" type="text" />
            </label>
            <label className="flex flex-col gap-2">
                <p className="text-[10px]">How many rooms in each floor</p>
                <input className="bg-[var(--g-color-opacity)] rounded-md py-1.5 w-42 px-2 text-sm focus:outline-1 focus:outline-[var(--green-color)]" type="text" />
            </label>
        </div>
    )
}