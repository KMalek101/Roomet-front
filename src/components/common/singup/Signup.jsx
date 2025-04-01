export function SignUp() {
    return(
        <div className="w-min flex flex-col items-center justify-center p-52 border-2 border-[var(--g-color)] ">
            <h2>Sign Up</h2>
            <form action="" className="p-6">
                <input style={{width : "380px"}} className='px-4 py-2 text-xl text-[var(--black-color)] placeholder-[var(--g-color)] rounded-md border border-[var(--main-color-hover' type="text"
                  placeholder='Username' required/>
            </form>
        </div>
    )
}