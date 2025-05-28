import { useState, useEffect } from "react";
import AdminGridCard from "./AdminGridCard";
import { useRouter } from "next/navigation";
import { getAdmins } from "@/utils/admin"; // Assuming you have an admin API utility

export default function ViewAdmins() {
  const [filters, setFilters] = useState([]);
  const router = useRouter();
  
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchAdminsData = async () => {
      try {
        const data = await getAdmins();
        setAdmins(data.admins);
      } catch (err) {
        setError("Failed to fetch admins.");
        console.error("Admins fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchAdminsData();
  }, []);

  // Filter admins based on selected filters (if needed)
  const filteredAdmins = admins.filter((admin) => {
    if (filters.length === 0) return true;
    // Add filter logic if needed
    return true;
  });
  
  const handleAdminClick = (admin) => {
    router.push(`/admins/${admin._id}`);
  }

  return (
    <div className="flex flex-col gap-4 p-6 rounded-md flex-1">
      <div className="bg-[var(--secondary-color)] flex items-center gap-4 p-6 rounded-md">
        <h1 className="text-xl font-semibold">Administrators</h1>
        {/* Add filter controls here if needed */}
      </div>
  
      <div className="h-[1px] w-full p-2">
        <div className="h-[1px] w-full bg-[var(--g-color)] opacity-25"></div>
      </div>
  
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredAdmins.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400 text-lg">No administrators found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAdmins.map((admin) => (
            <div 
              onClick={() => handleAdminClick(admin)} 
              key={admin._id}
              className="cursor-pointer"
            >
              <AdminGridCard
                firstName={admin.firstName}
                lastName={admin.lastName}
                email={admin.email}
                phone={admin.phone}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );  
}