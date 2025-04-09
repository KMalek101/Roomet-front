'use client'

import CreateBlocks from "@/components/common/blocks/CreateBlocks";
import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/side bar/Sidebar";

export default function page() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col py-6 px-12 flex-1 ">
          <p className="font-semibold text-2xl pb-4">Create your blocks</p>
          <CreateBlocks />
        </div>
      </div>
    </div>
  );
}
