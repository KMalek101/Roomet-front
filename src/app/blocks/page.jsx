'use client'

import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/side bar/Sidebar";

export default function page() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar />
        <p className="font-semibold text-2xl">Create your blocks</p>
        
      </div>
    </div>
  );
}
