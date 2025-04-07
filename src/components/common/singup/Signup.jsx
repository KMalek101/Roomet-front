export function SignUp() {
    const inputStyle = "w-[280px] px-2 py-1 text-sm text-[var(--black-color)] placeholder-[var(--g-color)] rounded-md border border-[var(--main-color-hover)]";

    return (
        <div className="bg-[var(--w-color)] w-min flex flex-col items-center justify-center p-2 rounded-md border border-[var(--g-color)] shadow-2xl">
            <h2 className="text-xl font-semibold py-1">Sign Up</h2>
            <form className="p-4 flex flex-col gap-3">
                <input className={inputStyle} type="text" placeholder="First Name" required />
                <input className={inputStyle} type="text" placeholder="Last Name" required />
                <input className={inputStyle} type="email" placeholder="Email" required />
                <input className={inputStyle} type="password" placeholder="Password" required />
                <input className={inputStyle} type="password" placeholder="Confirm Password" required />

                <div className="flex items-center gap-2 w-full pt-2">
                    <div className="h-px w-1/2 bg-[var(--g-color)]"></div>
                    <p className="text-[var(--g-color)] text-xs">Or</p>
                    <div className="h-px w-1/2 bg-[var(--g-color)]"></div>
                </div>

                <div className={`${inputStyle} flex items-center bg-[var(--secondary-color)] cursor-pointer -mt-1 mb-2`}>
                    <svg className="w-4 h-4" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
                        <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
                        <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
                        <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></g>
                    </svg>
                    <p className="ml-auto mr-auto text-[var(--g-color)] text-sm">Login with Google</p>
                </div>

                <button className="py-1.5 px-3 bg-[var(--green-color)] text-[var(--w-color)] text-sm border border-[var(--g-color)] cursor-pointer hover:bg-[var(--green-color-hover)] rounded-sm">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
