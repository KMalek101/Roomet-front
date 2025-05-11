'use client';

import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/side bar/Sidebar";
import Student from "@/components/students/Student";
import { getStudent } from "@/utils/student";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params?.id;
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      (async () => {
        setLoading(true);
        const data = await getStudent(id);
        console.log(data);
        setStudentData(data.student);
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
            studentData && (
              <Student
                firstName={studentData.firstName}
                lastName={studentData.lastName}
                email={studentData.email}
                phone={studentData.phone}
                room={studentData.room}
                studentId={studentData.studentId}
                block={studentData.block}
                reports={studentData.reports}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
