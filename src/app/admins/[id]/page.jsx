'use client';

import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/side bar/Sidebar";
import Admin from "@/components/common/admin/Admin";
import { getAdmin } from "@/utils/admin";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params?.id;
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      (async () => {
        setLoading(true);
        const data = await getAdmin(id); // Fetch admin data instead of student
        console.log(data);
        setAdminData(data.admin);
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
            adminData && (
              <Admin
                firstName={adminData.firstName}
                lastName={adminData.lastName}
                email={adminData.email}
                phone={adminData.phone}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}