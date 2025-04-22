'use client'
import Header from "@/components/common/header/Header";
import ViewRooms from "@/components/room/ViewRooms";
import Sidebar from "@/components/common/side bar/Sidebar";
import Room from "@/components/room/Room";
import { useState } from "react";
import ReportForum from "@/components/reports/ReportForume";
export default function page() {
  const [showReportForum, setShowReportForum] = useState(false); 

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="flex flex-col py-6 px-12 flex-1 overflow-y-auto h-screen no-scrollbar pb-24">
            <Room />
        </div>
      </div>
      <button 
        onClick={() => setShowReportForum(true)}
        className="text-[var(--w-color)] p-2 cursor-pointer flex items-center justify-center absolute bottom-12 right-18 bg-[var(--green-color)] rounded-md opacity-50 hover:opacity-100 transition-all duration-25 ease-in">
        Report Issue
      </button>

      {showReportForum && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center no-scrollbar">
          <div className="bg-[var(--secondary-color)] rounded-lg shadow-xl w-[800px] max-h-[90vh] overflow-y-auto no-scrollbar border border-[var(--g-color)]">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Report Issue</h3>
            </div>
            <ReportForum setShowReportForum={setShowReportForum} />
          </div>
        </div>
      )}
    </div>
  );
}