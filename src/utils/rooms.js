import axios from "axios";
const API_BASE_URL = "http://localhost:5000";

export async function createRoom(data) {
  // First verify session
  const sessionCheck = await fetch('http://localhost:5000/api/auth/is-logged-in', {
    credentials: 'include'
  });  

  try {
    const response = await axios.post(`${API_BASE_URL}/api/rooms/create-room`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to initialize blocks');
  }
}

export async function getRooms() {
  // First verify session
  const sessionCheck = await fetch('http://localhost:5000/api/auth/is-logged-in', {
    credentials: 'include'
  });  

  console.log(sessionCheck);

  try {
    const response = await axios.get(`${API_BASE_URL}/api/rooms`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get rooms');
  }
}