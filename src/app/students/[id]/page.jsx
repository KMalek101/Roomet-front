'use client'

import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/side bar/Sidebar";
import ViewStudents from "@/components/students/ViewStudents";

export default function page() {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Header />
      <div className="flex overflow-hidden">
        <Sidebar />
        <div className="flex flex-col py-6 px-12 flex-1 overflow-y-auto h-screen no-scrollbar pb-24">
          <p className="font-semibold text-2xl pb-4">Students</p>
          <Student />
        </div>
      </div>
    </div>
  );
}