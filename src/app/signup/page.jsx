'use client'

import Header from "@/components/common/header/Header";
import { SignUp } from "@/components/common/singup/Signup";
import Image from "next/image";
export default function page() {
  return (
    <div className="flex-col">
      <div className="flex items-center">
        <Image width={1500} height={1500} src="/illustration.png" alt="image" className="w-1/3 h-1/3" priority={true} />
        <SignUp />
      </div>
    </div>
  );

}
