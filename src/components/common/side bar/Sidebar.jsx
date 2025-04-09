import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Room");
  const router = useRouter();

  const menuItems = [
    { label: "Profile" },
    { label: "Room" },
    { label: "Reports" },
    { label: "Notifications" },
    { label: "Events" },
    { label: "Restauration" },
    { label: "Blocks" },
    { label: "Settings" },
    { label: "Log out" },
    { label: "Dashboard" },
    { label: "Support" }
  ];

  const handleClick = (label) => {
    setActiveItem(label);
    const route = "/" + label.toLowerCase().replace(/\s+/g, "-");
    router.push(route);
  };

  return (
    <div className="sidebar bg-[var(--secondary-color)] w-60 flex-1 h-[var(--sidebar-height)] border-r border-[var(--g-color)]">
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(item.label)}
          className={`flex items-center justify-between p-2 py-2.5 cursor-pointer transition-all duration-50 ease-in-out ${
            activeItem === item.label ? "bg-[var(--menu-hover)]" : "hover:bg-[var(--menu-hover)]"
          }`}
        >
          <span>{item.label}</span>
          <span>▸</span>
        </div>
      ))}
    </div>
  );
}
