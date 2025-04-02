export function SignUp() {
    return(
        <div className="bg-[var(--secondary-color)] w-min flex flex-col items-center justify-center p-2 rounded-md border-1 border-[var(--g-color)] ">
            <h2 className="text-2xl font-semibold py-2">Sign Up</h2>
            <form action="" className="p-6 flex flex-col gap-4">
                <input 
                 style={{width : "340px"}} 
                 className='px-2 py-1.5 text-l text-[var(--black-color)] placeholder-[var(--g-color)] rounded-md border border-[var(--main-color-hover' type="text"
                 placeholder='First Name' 
                 required
                />
                <input 
                 style={{width : "340px"}} 
                 className='px-2 py-1.5 text-l text-[var(--black-color)] placeholder-[var(--g-color)] rounded-md border border-[var(--main-color-hover' type="text"
                 placeholder='Last Name' 
                 required
                />
                <input 
                 style={{width : "340px"}} 
                 className='px-2 py-1.5 text-l text-[var(--black-color)] placeholder-[var(--g-color)] rounded-md border border-[var(--main-color-hover' type="text"
                 placeholder='Email' 
                 required
                />
                <input 
                 style={{width : "340px"}} 
                 className='px-2 py-1.5 text-l text-[var(--black-color)] placeholder-[var(--g-color)] rounded-md border border-[var(--main-color-hover' type="text"
                 placeholder='Password' 
                 required
                />
                <input 
                 style={{width : "340px"}} 
                 className='px-2 py-1.5 text-l text-[var(--black-color)] placeholder-[var(--g-color)] rounded-md border border-[var(--main-color-hover' type="text"
                 placeholder='Conrim Password' 
                 required
                />
                <div className='flex items-center gap-2 w-full pt-4'>
                    <div style={{height: "1px"}} className='w-1/2 bg-[var(--g-color)]'></div>
                    <p className='text-[var(--g-color)] text-sm'>Or</p>
                    <div style={{height: "1px"}} className='w-1/2 bg-[var(--g-color)]'></div>
                </div>

                <a>
                    <div style={{width : "340px"}} className='cursor-pointer -mt-2 mb-2 px-2 py-1.5 bg-[var(--secondary-color)] items-center flex text-l text-[var(--g-color)] rounded-sm border border-[var(--main-color-hover)]'>
                        <svg className='w-5 h-5' viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
                        <p className='ml-auto mr-auto text-[var(--g-color)]'>Login with Google</p>
                    </div>
                </a>

                <button className="py-2 px-4 bg-[var(--green-color)] text-[var(--w-color)] border border-[var(--g-color)] cursor-pointer hover:bg-[var(--green-color-hover)] rounded-sm">
                    Sign Up
                </button>
            </form>
        </div>
    )
}