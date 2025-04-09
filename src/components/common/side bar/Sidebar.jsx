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
      <div className="sidebar bg-gray-200 p-2 w-60 flex-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 hover:bg-green-300 cursor-pointer ${
              item.label === "Room" ? "bg-green-300" : ""
            }`}
          >
            <span>{item.label}</span>
            <span>▸</span>
          </div>
        ))}
      </div>
    );
  }
  