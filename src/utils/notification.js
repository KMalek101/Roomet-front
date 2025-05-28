import axios from "axios";
const API_BASE_URL = "http://localhost:5000";

export async function getNotifications() {
  // First verify session
  const sessionCheck = await fetch('http://localhost:5000/api/auth/is-logged-in', {
    credentials: 'include'
  });  

  console.log(sessionCheck);
  // if (!sessionCheck.data.loggedIn) {
  //   throw new Error("Unauthorized - Please login again");
  // }

  // Proceed with the blocks initialization
  try {
    const response = await axios.get(`${API_BASE_URL}/api/notifications`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch notifications!');
  }
}

export async function markAsRead(id) {
  // First verify session
  const sessionCheck = await fetch('http://localhost:5000/api/auth/is-logged-in', {
    credentials: 'include'
  });  

  console.log(sessionCheck);
  // if (!sessionCheck.data.loggedIn) {
  //   throw new Error("Unauthorized - Please login again");
  // }

  // Proceed with the blocks initialization
  try {
    const response = await axios.patch(`${API_BASE_URL}/api/notifications/${id}/read`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to read notification!');
  }
}

export async function markAllAsRead() {
  // First verify session
  const sessionCheck = await fetch('http://localhost:5000/api/auth/is-logged-in', {
    credentials: 'include'
  });  

  console.log(sessionCheck);
  // if (!sessionCheck.data.loggedIn) {
  //   throw new Error("Unauthorized - Please login again");
  // }

  // Proceed with the blocks initialization
  try {
    const response = await axios.patch(`${API_BASE_URL}/api/notifications/read-all`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to read all notification!');
  }
}

export async function deleteNotification(id) {
  // First verify session
  const sessionCheck = await fetch('http://localhost:5000/api/auth/is-logged-in', {
    credentials: 'include'
  });  

  console.log(sessionCheck);
  // if (!sessionCheck.data.loggedIn) {
  //   throw new Error("Unauthorized - Please login again");
  // }

  // Proceed with the blocks initialization
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/notifications/${id}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete notification!');
  }
}