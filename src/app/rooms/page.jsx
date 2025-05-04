'use client'

import Header from "@/components/common/header/Header";
import ViewRooms from "@/components/room/ViewRooms";
import Sidebar from "@/components/common/side bar/Sidebar";
import { useState } from "react";
import AddRoom from "@/components/room/AddRoom";

export default function page() {
  const [showAddRoom, setShowAddRoom] = useState(false);

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

      <button 
        onClick={() => setShowAddRoom(true)} 
        className="cursor-pointer flex items-center justify-center absolute h-12 w-12 bottom-12 right-18 bg-[var(--green-color)] rounded-md opacity-50 hover:opacity-100 transition-all duration-25 ease-in"
      >
        <div className="flex h-1/3 w-[1px] bg-[var(--w-color)] absolute"></div>
        <div className="w-1/3 h-[1px] bg-[var(--w-color)] absolute"></div>
      </button>
      
      {showAddRoom && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center no-scrollbar">
          <div className="bg-[var(--secondary-color)] rounded-lg shadow-xl w-[1200px] max-h-[90vh] overflow-y-auto no-scrollbar border border-[var(--g-color)]">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Add New Room</h3>
            </div>
            <AddRoom setShowAddRoom={setShowAddRoom} blocks={["A", "B", "C", "D", "E"]} />
          </div>
        </div>
      )}

    </div>
  );
}