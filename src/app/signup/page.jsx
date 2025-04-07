'use client'

import Header from "@/components/common/header/Header";
import { SignUp } from "@/components/common/singup/Signup";
import Image from "next/image";
export default function page() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex justify-center items-center gap-12 bg-[var(--w-color)] w-max p-8 rounded-xl">
        <SignUp />
        <Image src={"/illustration.png"} width={400} height={400} alt="logo" className="w-1/2 h-1/2 " priority={true} />
        {/* <div >
          <Image width={1500} height={1500} src="/ROOMET.png" className="w-1/8 h-1/8" priority={true} />
          <div className="flex items-center justify-items-center flex-col">
            <p className="font-bold ">Stay connected,  organized, </p>
            <p className="font-bold"> & informed with</p>
          </div>
        </div>
        <div className="flex items-center">
          <Image width={1500} height={1500} src="/illustration.png" alt="image" className="w-1/4 h-1/4" priority={true} />
          <SignUp />
        </div> */}
      </div>
    </div>
  );

}
