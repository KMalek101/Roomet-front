'use client'
import { Activation } from "@/components/singup/Activation";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  const id = params?.id;
  console.log(id);

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="bg-[var(--w-color)] w-max rounded-xl relative">
        <div className="h-24 absolute w-full bg-[var(--green-color)] z-0 rounded-t-xl"></div>
        <div className="relative flex justify-center items-center gap-12 z-40 p-8 py-12">
            <Activation token={id} />
        </div>
      </div>
    </div>
  );
}
