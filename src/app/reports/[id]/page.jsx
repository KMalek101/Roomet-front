'use client'

import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/side bar/Sidebar";
import Report from "@/components/reports/Report";
import { useParams } from "next/navigation";
import { getReport } from "@/utils/maintenance";
import { useState, useEffect } from "react";

export default function page() {
    const params = useParams();
    const id = params?.id;
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (id) {
        (async () => {
          setLoading(true);
          const data = await getReport(id);
          console.log("Raw API data:", data);
          
          // Transform the data to match your Report component's expected format
          const formattedData = {
            name: `${data?.student?.firstName || ''} ${data?.student?.lastName || ''}`.trim() || "Unknown Student",
            submittedAt: new Date(data?.createdAt).toLocaleString(),
            urgency: data?.urgency || "Unknown",
            status: data?.status || "Unknown",
            description: data?.additionalDescription || "No description provided",
            issues: data?.issues || [],
            roomNumber: data?.room?.number || "N/A",
            blockName: data?.room?.block?.name || "N/A",
            studentEmail: data?.student?.email || "No email provided"
          };
          
          console.log("Formatted report data:", formattedData);
          setReportData(formattedData);
          setLoading(false);
        })();
      }
    }, [id]);
  
    return (
      <div className="h-screen w-screen overflow-hidden relative">
        <Header />
        <div className="flex overflow-hidden">
          <Sidebar />
          <div className="flex flex-col py-6 px-12 flex-1 overflow-y-auto h-screen no-scrollbar pb-14">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <span className="text-gray-500">Loading...</span>
              </div>
            ) : (
              reportData && (
                <Report
                  name={reportData.name}
                  submittedAt={reportData.submittedAt}
                  urgency={reportData.urgency}
                  status={reportData.status}
                  description={reportData.description}
                  issues={reportData.issues}
                  roomNumber={reportData.roomNumber}
                  blockName={reportData.blockName}
                  studentEmail={reportData.studentEmail}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
}