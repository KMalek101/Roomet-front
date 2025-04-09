import Image from "next/image"

export default function Header() {
    return(
        <container>
            <header className="flex items-center justify-between h-14 pl-2 py-8 bg-[var(--secondary-color)]">
                <div className="flex gap-24 items-center">
                    <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328"></path> <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328"></path> <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328"></path> </g></svg>
                    <Image src={"/ROOMET.png"} width={1500} height={1500} className="w-24 h-6" />
                </div>
            </header>
        </container>
    )
}