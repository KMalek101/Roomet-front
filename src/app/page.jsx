'use client'

import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/side bar/Sidebar";

export default function page() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <Sidebar />
    </div>
  );
}
