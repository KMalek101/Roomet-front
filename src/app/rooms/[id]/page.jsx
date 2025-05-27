'use client'
import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/side bar/Sidebar";
import Room from "@/components/room/Room";
import { useState, useEffect } from "react";
import ReportForum from "@/components/reports/ReportForume";
import { getRoom } from "@/utils/rooms";
import { useParams } from "next/navigation";

export default function Page() {
  const [showReportForum, setShowReportForum] = useState(false);
  const params = useParams();
  const id = params?.id;
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      (async () => {
        setLoading(true);
        try {
          const data = await getRoom(id);
          setRoomData(data); 
          console.log(data)
        } catch (error) {
          console.error("Error fetching room:", error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [id]);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="flex flex-col py-6 px-12 flex-1 overflow-y-auto h-screen no-scrollbar pb-24">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <span className="text-gray-500">Loading...</span>
            </div>
          ) : roomData ? (
            <Room 
              number={roomData.number}
              students={roomData.students}
              block={roomData.block}
              maxStudents={roomData.maxStudents}
              reports={roomData.reports}
              pillows={roomData.pillows}
              chairs={roomData.chairs}
              tables={roomData.tables}
              beds={roomData.beds}
              capacity={roomData.capacity}
            />
          ) : (
            <div className="flex justify-center items-center h-full">
              <span className="text-gray-500">No room data found</span>
            </div>
          )}
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