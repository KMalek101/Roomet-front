'use client'

import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/side bar/Sidebar";
import ViewReports from "@/components/reports/ViewReports";

export default function page() {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="flex items-center justify-center flex-1 h-screen font-medium text-2xl">
          Comming soon...
        </div>
      </div>
    </div>
  );
}