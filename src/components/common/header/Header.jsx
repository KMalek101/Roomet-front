import Image from "next/image"

export default function Header() {
    return(
        <container>
            <header className="flex items-center justify-between h-14 pl-4 py-9 bg-[var(--secondary-color)] border-b border-[var(--g-color)]">
                <div className="flex gap-14 items-center">
                    <svg className="h-10 w-12 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328"></path> <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328"></path> <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328"></path> </g></svg>
                    <p style={{fontFamily: "cherrybomb"}} className="cursor-pointer text-[var(--green-color)] text-2xl">ROOMET</p>
                </div>
                <div className="flex gap-4 items-center pr-4">
                    <div className="border border-[var(--g-color)] rounded-md p-1 cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 31 31" fill="#1C1B1F" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_3_190" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31">
                            <rect width="31" height="31" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_3_190)">
                            <path d="M5.1665 24.5417V21.9583H7.74984V12.9167C7.74984 11.1299 8.28803 9.54219 9.36442 8.15365C10.4408 6.7651 11.8401 5.85556 13.5623 5.425V4.52083C13.5623 3.98264 13.7507 3.52517 14.1274 3.14844C14.5042 2.7717 14.9616 2.58333 15.4998 2.58333C16.038 2.58333 16.4955 2.7717 16.8722 3.14844C17.249 3.52517 17.4373 3.98264 17.4373 4.52083V5.425C19.1596 5.85556 20.5589 6.7651 21.6353 8.15365C22.7116 9.54219 23.2498 11.1299 23.2498 12.9167V21.9583H25.8332V24.5417H5.1665ZM15.4998 28.4167C14.7894 28.4167 14.1813 28.1637 13.6754 27.6578C13.1695 27.1519 12.9165 26.5438 12.9165 25.8333H18.0832C18.0832 26.5438 17.8302 27.1519 17.3243 27.6578C16.8184 28.1637 16.2103 28.4167 15.4998 28.4167ZM10.3332 21.9583H20.6665V12.9167C20.6665 11.4958 20.1606 10.2795 19.1488 9.26771C18.137 8.2559 16.9207 7.75 15.4998 7.75C14.079 7.75 12.8627 8.2559 11.8509 9.26771C10.8391 10.2795 10.3332 11.4958 10.3332 12.9167V21.9583Z" fill="#1C1B1F"/>
                            </g>
                        </svg>
                    </div>
                    <div className="border border-[var(--g-color)] rounded-md p-1 pl-2 flex items-center justify-center cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 28 24" fill="#1C1B1F" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.8667 13.3333H6.66667V10.6667H22.8667L20.8 8.6L22.6667 6.66667L28 12L22.6667 17.3333L20.8 15.4L22.8667 13.3333ZM16 8V2.66667H2.66667V21.3333H16V16H18.6667V21.3333C18.6667 22.0667 18.4056 22.6944 17.8833 23.2167C17.3611 23.7389 16.7333 24 16 24H2.66667C1.93333 24 1.30556 23.7389 0.783333 23.2167C0.261111 22.6944 0 22.0667 0 21.3333V2.66667C0 1.93333 0.261111 1.30556 0.783333 0.783333C1.30556 0.261111 1.93333 0 2.66667 0H16C16.7333 0 17.3611 0.261111 17.8833 0.783333C18.4056 1.30556 18.6667 1.93333 18.6667 2.66667V8H16Z" fill="#1C1B1F"/>
                        </svg>
                    </div>
                </div>
            </header>
        </container>
    )
}