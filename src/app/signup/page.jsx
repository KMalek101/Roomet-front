'use client'

import Header from "@/components/common/header/Header";
import { SignUp } from "@/components/singup/Signup";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="bg-[var(--w-color)] w-max rounded-xl relative">
        <div className="h-24 absolute w-full bg-[var(--green-color)] z-0 rounded-t-xl"></div>
        <div className="relative flex justify-center items-center gap-12 z-40 p-8 py-12">
          <SignUp />
          <Image src={"/illustration.png"} width={400} height={400} alt="logo" className="w-1/2 h-1/2 " priority={true} />
        </div>
      </div>
    </div>
  );
}
