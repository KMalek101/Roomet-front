import { useState } from "react"

export default function Room() {
    const data = { name: "H309", students: ["M_Kaouche", "W_Kacha", "Z_Abderrahime", "M_Sayedahmed"], maxStudents: 4, reports: 14, block: "H" }
    const [query, setQuery] = useState('');
    const filtredStudents = data.students.filter(student => student.toLowerCase().includes(query.toLowerCase()));

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
                    <div className="flex gap-5 justify-around">
                        <div className="flex flex-col items-center">
                            Chairs
                            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 21V16M7 21V16" stroke="black" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 16H7.00001C6.01506 16 5.52259 16 5.22538 15.6762C4.92818 15.3523 4.9669 14.9018 5.04435 14.0008C5.10026 13.3503 5.22669 12.9125 5.51257 12.5858C6.02514 12 6.8501 12 8.50001 12H15.5C17.1499 12 17.9749 12 18.4874 12.5858C18.7733 12.9125 18.8998 13.3503 18.9557 14.0008C19.0331 14.9018 19.0718 15.3523 18.7746 15.6762C18.4774 16 17.985 16 17 16H16" stroke="black" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 8C7 6.13077 7 5.19615 7.40192 4.5C7.66523 4.04394 8.04394 3.66523 8.5 3.40192C9.19615 3 10.1308 3 12 3C13.8692 3 14.8038 3 15.5 3.40192C15.9561 3.66523 16.3348 4.04394 16.5981 4.5C17 5.19615 17 6.13077 17 8V12H7V8Z" stroke="black" stroke-width="1.5"></path> </g></svg>
                            <p>3/4</p>
                        </div>
                        <div className="flex flex-col items-center">
                            Pillows
                            <svg className="w-12 h-12" fill="#000000" viewBox="0 0 24 24" id="pillow-2" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M16.1,15a9.34,9.34,0,0,1,0-6" ></path><path id="primary" d="M20.75,16a2,2,0,0,1-2.91,2.58,44.77,44.77,0,0,1-11.68,0A2,2,0,0,1,3.25,16,35.22,35.22,0,0,1,3.25,8,2,2,0,0,1,6.16,5.38a44.77,44.77,0,0,1,11.68,0A2,2,0,0,1,20.75,8,35.22,35.22,0,0,1,20.75,16Z"></path></g></svg>
                            <p>3/4</p>
                        </div>
                        <div className="flex flex-col items-center">
                            Tables
                            <svg className="w-12 h-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>table</title> <path d="M18.76,6l2,4H3.24l2-4H18.76M20,4H4L1,10v2H3v7H5V16H19v3h2V12h2V10L20,4ZM5,14V12H19v2Z"></path> <rect width="24" height="24" fill="none"></rect> </g></svg>
                            <p>3/4</p>
                        </div>
                        <div className="flex flex-col items-center">
                            Beds
                            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5V19M3 16H21M21 19V13.2C21 12.0799 21 11.5198 20.782 11.092C20.5903 10.7157 20.2843 10.4097 19.908 10.218C19.4802 10 18.9201 10 17.8 10H11V15.7273M7 12H7.01M8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <p>3/4</p>
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
                             value={query}
                             onChange={(e) => setQuery(e.target.value)}
                             placeholder="Search for student"
                             className="outline-none w-full"
                            />
                        </div>
                        <div className="">
                            {filtredStudents.map((student, index) => {return(<p className="py-2 pl-4 cursor-pointer hover:bg-gray-100" key={index}>{student}</p>)})}
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