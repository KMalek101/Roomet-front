import Image from "next/image"

export default function Header() {
    return(
        <container>
            <header className="flex items-center gap-34 justify-center">
                <Image width={100} height={100} src="/logo.png" alt="logo" />
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Help</h2>
                <h2>Contact us</h2>
            </header>
        </container>
    )
}