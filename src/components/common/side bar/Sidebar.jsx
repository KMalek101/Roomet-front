"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: "Profile" },
    { label: "Rooms" },
    { label: "Reports" },
    { label: "Notifications" },
    { label: "Events" },
    { label: "Restauration" },
    { label: "Blocks" },
    { label: "Settings" },
    { label: "Log out" },
    { label: "Dashboard" },
    { label: "Support" },
    { label: "Students" },
  ];

  const getRouteFromLabel = (label) =>
    "/" + label.toLowerCase().replace(/\s+/g, "-");

  const handleClick = (label) => {
    const route = getRouteFromLabel(label);
    router.push(route);
  };

  return (
    <div className="sidebar bg-[var(--secondary-color)] text-sm w-60 h-[var(--sidebar-height)] border-r border-[var(--g-color)]">
      {menuItems.map((item, index) => {
        const itemRoute = getRouteFromLabel(item.label);
        const isActive = pathname === itemRoute;

        return (
          <div
            key={index}
            onClick={() => handleClick(item.label)}
            className={`flex items-center justify-between p-2 py-2.5 cursor-pointer transition-all duration-200 ${
              isActive
                ? "bg-[var(--menu-hover)]"
                : "hover:bg-[var(--menu-hover)]"
            }`}
          >
            <span>{item.label}</span>
            <span>▸</span>
          </div>
        );
      })}
    </div>
  );
}
