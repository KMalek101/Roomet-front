import Image from "next/image"

const Header = () => {
    return(
        <div className="flex items-center justify-between h-14 py-9 bg-[var(--secondary-color)] border-b border-[var(--g-color)] px-24 pl-15">
            <div className="flex gap-14 items-center">
                <p style={{fontFamily: "cherrybomb"}} className="cursor-pointer text-[var(--green-color)] text-2xl">ROOMET</p>
            </div>
            
            <div className="flex justify-center items-center gap-24">
            <button className="cursor-pointer text-[var(--green-color)] font-medium relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                Login
            </button>
                <button className="p-2 px-8 text-[var(--black-color)] rounded-md border-[var(--green-color)] border cursor-pointer hover:bg-[var(--green-color)] hover:text-[var(--w-color)] transition-colors duration-150">
                    Get started
                </button>
            </div>
        </div>
    )
}

const BackgroundImage = () => {
    return (
        <div className="relative w-full h-[650px]">
            <Image
                src="/background.jpg"
                alt="background"
                fill
                className="object-cover"
            />
            <div className="absolute bottom-24 left-12 flex flex-col max-w-[700px] gap-6">
                <h2 className="text-[var(--w-color)] text-6xl font-semibold leading-tight">
                    Struggling to find a platform that lets you build your droom the way you want?
                </h2>
                <h4 className="text-[var(--w-color)] text-xl font-normal leading-snug">
                    Roomet gives you a <span className="font-medium text-[var(--green-color)]">fully customizable</span> droom site —
                    <br />
                    free to design, manage, and make your own.
                </h4>
                <button className="w-fit bg-[var(--green-color)] p-2.5 px-10 text-[var(--w-color)] rounded-md cursor-pointer transition-colors duration-150">
                    Get started
                </button>
            </div>
            
        </div>
    );
}

const Body = () => {
    return(
        <div className="flex flex-col p-12 bg-[var(--w-color)">
            <section className="py-30 px-24 bg-[var(--bg-color)]">
                <h3 className="text-4xl font-semibold text-[var(--love-color)] mb-12 text-center">
                    How Roomet Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <h4 className="text-2xl text-[var(--green-color)] font-semibold mb-2">1. Create</h4>
                        <p className="text-[var(--love-color)]">Sign up and start building your droom site instantly.</p>
                    </div>
                    <div>
                        <h4 className="text-2xl text-[var(--green-color)] font-semibold mb-2">2. Customize</h4>
                        <p className="text-[var(--love-color)]">Design every block, rooms, even add students.</p>
                    </div>
                    <div>
                        <h4 className="text-2xl text-[var(--green-color)] font-semibold mb-2">3. Share</h4>
                        <p className="text-[var(--love-color)]">Launch your droom and share it with the world—freely.</p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[var(--secondary-color)] flex flex-col items-center text-center rounded-lg">
                <h2 className="text-[var(--black-color)] text-5xl font-semibold mb-6">
                    Ready to create your droom site?
                </h2>
                <p className="text-[var(--g-color)] text-lg mb-10">
                    It's free. It's flexible. It's yours to build.
                </p>
                <button className="bg-[var(--green-color)] px-10 py-3 text-[var(--w-color)] rounded-md text-lg font-medium cursor-pointer transition-colors duration-150 hover:bg-opacity-90">
                    Get Started Now
                </button>
            </section>

            <section className="py-30 px-24 bg-[var(--bg-color)]">
                <h3 className="text-4xl font-semibold text-[var(--love-color)] mb-12 text-center">
                    Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <p className="text-[var(--green-color)] font-medium text-lg mb-4">Student Registration & Room Assignment</p>
                        <p className="text-[var(--love-color)] text-sm md:text-base">
                            Easily manage student registrations and assign them to their rooms with just a few clicks.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[var(--green-color)] font-medium text-lg mb-4">Real-time Room Supplies Tracking</p>
                        <p className="text-[var(--love-color)] text-sm md:text-base">
                            Track and manage room supplies in real-time, ensuring that everything is always in stock.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[var(--green-color)] font-medium text-lg mb-4">Maintenance Request Management</p>
                        <p className="text-[var(--love-color)] text-sm md:text-base">
                            Submit and track maintenance requests directly within the platform for fast resolution.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

const Footer = () => {
    return (
        <footer className="bg-[var(--footer-color)] text-[var(--g-color)] py-16 px-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[var(--g-color)]">
            <div className="flex flex-col items-start w-full md:w-1/4">
                <p className="text-lg md:text-xl font-semibold mb-4">© {new Date().getFullYear()} Roomet. All rights reserved.</p>
                <div className="mb-6">
                    <h4 className="text-[var(--w-color)] text-xl font-semibold mb-2">About Roomet</h4>
                    <p className="text-[var(--w-color)] text-sm md:text-base">
                        Roomet is an open-source platform to create and manage customizable droom sites for anyone, anywhere.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-start w-full md:w-1/4">
                <h4 className="text-[var(--w-color)] text-xl font-semibold mb-2">Contact</h4>
                <p className="text-[var(--w-color)] text-sm md:text-base">
                    <span className="font-medium">Email:</span> m_kaouche@estin.dz
                </p>
                <p className="text-[var(--w-color)] text-sm md:text-base">
                    <span className="font-medium">Phone:</span> +213 658066010
                </p>
            </div>

            <div className="flex flex-col items-start w-full md:w-1/4">
                <h4 className="text-[var(--w-color)] text-xl font-semibold mb-2">GitHub</h4>
                <a href="https://github.com/KMalek101/Roomet-front" target="_blank" className="text-[var(--green-color)] hover:text-[var(--w-color)] text-sm md:text-base">
                    Contribute on GitHub
                </a>
            </div>
        </footer>
    );
};


export function LandingPage() {
    return(
        <div className="flex flex-col">
            <Header />
            <BackgroundImage />
            <Body />
            <Footer />
        </div>
    )
}