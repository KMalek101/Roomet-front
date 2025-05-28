import { useState, useEffect, useRef } from "react";
import { getNotifications, markAllAsRead, markAsRead, deleteNotification } from "@/utils/notification";
import { formatDistanceToNow } from 'date-fns';

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fetch notifications with auto-refresh
  const fetchNotifications = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getNotifications();
      setNotifications(data.notifications);
    } catch (err) {
      console.error("Error fetching notifications:", err);
      setError("Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    
    // Set up polling for new notifications (every 30 seconds)
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleMarkAsRead = async (id) => {
    try {
      await markAsRead(id);
      setNotifications(notifications.map(notification => 
        notification._id === id 
          ? { ...notification, isRead: true, readAt: new Date() } 
          : notification
      ));
    } catch (err) {
      console.error("Error marking notification as read:", err);
      setError("Failed to mark as read");
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead();
      setNotifications(notifications.map(notification => ({
        ...notification,
        isRead: true,
        readAt: new Date()
      })));
    } catch (err) {
      console.error("Error marking all notifications as read:", err);
      setError("Failed to mark all as read");
    }
  };

  const handleDeleteNotification = async (id, e) => {
    e.stopPropagation();
    try {
      await deleteNotification(id);
      setNotifications(notifications.filter(notification => notification._id !== id));
    } catch (err) {
      console.error("Error deleting notification:", err);
      setError("Failed to delete notification");
    }
  };

  const formatTime = (dateString) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  return (
    <header className="flex items-center justify-between h-14 pl-4 py-9 bg-[var(--secondary-color)] border-b border-[var(--g-color)] relative">
      {/* Logo and menu icon */}
      <div className="flex gap-14 items-center">
        <svg className="h-10 w-12 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6.5H19V8H5V6.5Z" fill="#1F2328"></path>
          <path d="M5 16.5H19V18H5V16.5Z" fill="#1F2328"></path>
          <path d="M5 11.5H19V13H5V11.5Z" fill="#1F2328"></path>
        </svg>
        <p style={{fontFamily: "cherrybomb"}} className="cursor-pointer text-[var(--green-color)] text-2xl">ROOMET</p>
      </div>

      {/* Notification and logout buttons */}
      <div className="flex gap-4 items-center pr-4">
        {/* Notifications */}
        <div className="relative" ref={dropdownRef}>
          <div 
            className="border border-[var(--g-color)] rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-colors relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <svg width="24" height="24" viewBox="0 0 31 31" fill="#1C1B1F" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.1665 24.5417V21.9583H7.74984V12.9167C7.74984 11.1299 8.28803 9.54219 9.36442 8.15365C10.4408 6.7651 11.8401 5.85556 13.5623 5.425V4.52083C13.5623 3.98264 13.7507 3.52517 14.1274 3.14844C14.5042 2.7717 14.9616 2.58333 15.4998 2.58333C16.038 2.58333 16.4955 2.7717 16.8722 3.14844C17.249 3.52517 17.4373 3.98264 17.4373 4.52083V5.425C19.1596 5.85556 20.5589 6.7651 21.6353 8.15365C22.7116 9.54219 23.2498 11.1299 23.2498 12.9167V21.9583H25.8332V24.5417H5.1665ZM15.4998 28.4167C14.7894 28.4167 14.1813 28.1637 13.6754 27.6578C13.1695 27.1519 12.9165 26.5438 12.9165 25.8333H18.0832C18.0832 26.5438 17.8302 27.1519 17.3243 27.6578C16.8184 28.1637 16.2103 28.4167 15.4998 28.4167ZM10.3332 21.9583H20.6665V12.9167C20.6665 11.4958 20.1606 10.2795 19.1488 9.26771C18.137 8.2559 16.9207 7.75 15.4998 7.75C14.079 7.75 12.8627 8.2559 11.8509 9.26771C10.8391 10.2795 10.3332 11.4958 10.3332 12.9167V21.9583Z" fill="#1C1B1F"/>
            </svg>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </div>
          
          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200">
              <div className="px-4 py-2 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => fetchNotifications()}
                    className="text-xs text-gray-500 hover:text-blue-700"
                    title="Refresh"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  {unreadCount > 0 && (
                    <button 
                      onClick={handleMarkAllAsRead}
                      className="text-xs text-blue-500 hover:text-blue-700"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>
              </div>
              
              {error && (
                <div className="px-4 py-2 bg-red-50 text-red-600 text-sm">
                  {error}
                  <button onClick={() => setError(null)} className="float-right font-bold">×</button>
                </div>
              )}

              <div className="max-h-96 overflow-y-auto">
                {loading ? (
                  <div className="px-4 py-6 text-center text-gray-500">
                    <svg className="animate-spin h-5 w-5 mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading notifications...
                  </div>
                ) : notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div 
                      key={notification._id}
                      onClick={() => !notification.isRead && handleMarkAsRead(notification._id)}
                      className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                        !notification.isRead ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-900">
                          {notification.message.length > 50 
                            ? `${notification.message.substring(0, 50)}...` 
                            : notification.message}
                        </h4>
                        <div className="flex items-center gap-2">
                          {!notification.isRead && (
                            <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                          )}
                          <button 
                            onClick={(e) => handleDeleteNotification(notification._id, e)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            title="Delete notification"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        {formatTime(notification.createdAt)}
                      </p>
                      {notification.relatedRequest && (
                        <a 
                          href={`/reports/${notification.relatedRequest}`}
                          className="text-xs text-blue-500 mt-1 hover:underline inline-block"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View request
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500">
                    No new notifications
                  </div>
                )}
              </div>
              
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-center">
                <a 
                  href="/notifications" 
                  className="text-sm text-blue-500 hover:text-blue-700 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("View all notifications clicked");
                  }}
                >
                  View all notifications
                </a>
              </div>
            </div>
          )}
        </div>
        
        {/* Logout Button */}
        <div className="border border-[var(--g-color)] rounded-md p-2 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
          <svg width="24" height="24" viewBox="0 0 28 24" fill="#1C1B1F" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.8667 13.3333H6.66667V10.6667H22.8667L20.8 8.6L22.6667 6.66667L28 12L22.6667 17.3333L20.8 15.4L22.8667 13.3333ZM16 8V2.66667H2.66667V21.3333H16V16H18.6667V21.3333C18.6667 22.0667 18.4056 22.6944 17.8833 23.2167C17.3611 23.7389 16.7333 24 16 24H2.66667C1.93333 24 1.30556 23.7389 0.783333 23.2167C0.261111 22.6944 0 22.0667 0 21.3333V2.66667C0 1.93333 0.261111 1.30556 0.783333 0.783333C1.30556 0.261111 1.93333 0 2.66667 0H16C16.7333 0 17.3611 0.261111 17.8833 0.783333C18.4056 1.30556 18.6667 1.93333 18.6667 2.66667V8H16Z" fill="#1C1B1F"/>
          </svg>
        </div>
      </div>
    </header>
  );
}