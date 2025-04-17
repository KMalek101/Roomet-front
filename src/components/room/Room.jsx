export default function Room() {
    const data = { name: "H309", students: ["M_Kaouche", "W_Kacha", "Z_Abderrahime", "M_Sayedahmed"], maxStudents: 4, reports: 14, block: "H" }

    return(
        <div className="bg-[var(--secondary-color)] h-full w-full rounded-md">
            <h2 className="flex justify-center items-center font-bold text-3xl py-3">Room {data.name}</h2>

            <div className="h-[1px] w-full p-2 px-12">
                <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
            </div>

            <div className="flex pt-6 justify-center gap-32 w-full items-stretch px-24">
                <div className="flex flex-col bg-white brightness-95 rounded-md py-10 px-6 text-lg flex-1">
                    <h2 className="flex justify-center pb-4 text-lg font-medium">Info</h2>
                    <div>
                        <div className="grid grid-cols-2">
                            <p className="font-medium">Name:</p><p className="text-[var(--g-color)]">{data.name}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-medium">Students:</p><p className="text-[var(--g-color)]">{data.students.length} / {data.maxStudents}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-medium">Reports:</p><p className="text-[var(--g-color)]"> {data.reports}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-medium">Block:</p><p className="text-[var(--g-color)]">{data.block}</p>
                        </div>
                    </div>
                </div>

                <div className="w-[1px] p-2 px-12">
                    <div className="w-[1px] h-full bg-[var(--g-color)] opacity-25"></div>
                </div>

                <div className="flex flex-col bg-white brightness-95 rounded-md py-10 px-6 text-lg flex-1">
                    <h2 className="flex justify-center pb-4 text-lg font-medium">Supplies</h2>
                    <div>
                        <div className="grid grid-cols-2">
                            <p className="font-medium">Name:</p><p className="text-[var(--g-color)]">{data.name}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-medium">Students:</p><p className="text-[var(--g-color)]">{data.students.length} / {data.maxStudents}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-medium">Reports:</p><p className="text-[var(--g-color)]"> {data.reports}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="font-medium">Block:</p><p className="text-[var(--g-color)]">{data.block}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex pt-12 justify-center gap-32 w-full items-stretch px-24">
                <div className="flex flex-col bg-white brightness-95 rounded-md py-4 px-6 text-lg flex-1">
                    <h2 className="flex justify-center pb-4 text-lg font-medium">Students</h2>
                    <div className="border pt-2 px-2 rounded-2xl border-gray-300">
                        <div className="flex items-center bg-[var(--g-color-opacity)] rounded-md py-1.5 px-2 text-sm pb-2">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z" fill="#54A131"></path> </g></svg>
                            <input
                            type="text"
                            placeholder="Search for student"
                            className="outline-none w-full"
                            />
                        </div>
                        <div className="">
                            {data.students.map((student, index) => {return(<p className="py-2 pl-4 cursor-pointer hover:bg-gray-100" key={index}>{student}</p>)})}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col bg-white brightness-95 rounded-md py-4 px-6 text-lg flex-1">
                    <h2 className="flex justify-center pb-4 text-lg font-medium">Reports</h2>
                    <div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}