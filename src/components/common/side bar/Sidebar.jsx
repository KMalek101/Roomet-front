'use client';
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const { user, logout, initialize } = useAuthStore();

    // Initialize auth state
    useEffect(() => {
        initialize();
    }, [initialize]);
if (!user) return <div className="sidebar">Loading...</div>;

    const menuItems = [
        { label: "Dashboard", roles: ['admin', 'director'], path: "/dashboard" },
        { label: "Profile", roles: ['student', 'admin', 'director'], path: `/students/${user?.id}` },
        { label: "Rooms", roles: ['admin', 'director'], path: "/rooms" },
        { label: "Reports", roles: ['admin', 'director'], path: "/reports" },
        { label: "Events", roles: ['student', 'admin', 'director'], path: "/events" },
        { label: "Restauration", roles: ['student', 'admin', 'director'], path: "/restauration" },
        { label: "Blocks", roles: ['director'], path: "/blocks" },
        { label: "Students", roles: ['admin', 'director'], path: "/students" },
        { label: "Admins", roles: ['director'], path: "/admins" },
        { label: "Settings", roles: ['student', 'admin', 'director'], path: "/settings" },
        { label: "Log out", roles: ['student', 'admin', 'director'], path: "/login" },
    ];

    const filteredItems = menuItems.filter(item => 
        user?.role && item.roles.includes(user.role)
    );

    const handleNavigation = (path, label) => {
        if (label === "Log out") {
            logout();
        }
        router.push(path);
    };

    return (
        <div className="sidebar bg-[var(--secondary-color)] text-sm w-60 h-[var(--sidebar-height)] border-r border-[var(--g-color)]">
            {filteredItems.map((item, index) => {
                const isActive = pathname === item.path || 
                               (item.label === 'Profile' && pathname.startsWith('/profile'));

                return (
                    <div
                        key={index}
                        onClick={() => handleNavigation(item.path, item.label)}
                        className={`flex items-center justify-between p-2 py-2.5 cursor-pointer transition-all duration-200 ${
                            isActive ? "bg-[var(--menu-hover)]" : "hover:bg-[var(--menu-hover)]"
                        }`}
                    >
                        <span>{item.label}</span>
                        {item.label !== "Log out" && <span>▸</span>}
                    </div>
                );
            })}
        </div>
    );
}