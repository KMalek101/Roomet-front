'use client'

import Header from "@/components/common/header/Header";
import ViewRooms from "@/components/room/ViewRooms";
import Sidebar from "@/components/common/side bar/Sidebar";

export default function page() {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="flex flex-col py-6 px-12 flex-1 overflow-y-auto h-screen no-scrollbar pb-24">
          <p className="font-semibold text-2xl pb-4">View the rooms</p>
          <ViewRooms />
        </div>
      </div>
      
      <button className="cursor-pointer flex items-center justify-center absolute h-12 w-12 bottom-12 right-18 bg-[var(--green-color)] rounded-md opacity-50 hover:opacity-100 transition-all duration-25 ease-in">
        <div className="flex h-1/3 w-[1px] bg-[var(--w-color)] absolute"></div>
        <div className="w-1/3 h-[1px] bg-[var(--w-color)] absolute"></div>
      </button>
    </div>
  );
}