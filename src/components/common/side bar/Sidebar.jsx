import React from "react";
export default function Sidebar() {
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
    
    return (
      <div className="sidebar bg-[var(--secondary-color)] w-60 flex-1 h-[var(--sidebar-height)]">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 py-2.5 hover:bg-[var(--menu-hover)] cursor-pointer ${
              item.label === "Room" ? "bg-[var(--menu-hover)]" : ""
            }`}
          >
            <span>{item.label}</span>
            <span>▸</span>
          </div>
        ))}
      </div>
    );
  }
  