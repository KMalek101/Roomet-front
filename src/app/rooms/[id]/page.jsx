'use client'
import Header from "@/components/common/header/Header";
import ViewRooms from "@/components/room/ViewRooms";
import Sidebar from "@/components/common/side bar/Sidebar";
import Room from "@/components/room/Room";

export default function page() {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="flex flex-col py-6 px-12 flex-1 overflow-y-auto h-screen no-scrollbar pb-24">
            <Room />
        </div>
      </div>
    </div>
  );
}