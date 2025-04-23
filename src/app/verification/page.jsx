'use client'
import { Verification } from "@/components/singup/Verification";
export default function page() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="bg-[var(--w-color)] w-max rounded-xl relative">
        <div className="h-24 absolute w-full bg-[var(--green-color)] z-0 rounded-t-xl"></div>
        <div className="relative flex justify-center items-center gap-12 z-40 p-8 py-12">
            <Verification />
        </div>
      </div>
    </div>
  );
}
