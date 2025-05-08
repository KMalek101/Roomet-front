import axios from "axios";
const API_BASE_URL = "http://localhost:5000";

// utils/blocks.js
export async function initializeBlocks(data) {
  // First verify session
  const sessionCheck = await fetch('http://localhost:5000/api/auth/is-logged-in', {
    credentials: 'include'
  });  

  // if (!sessionCheck.data.loggedIn) {
  //   throw new Error("Unauthorized - Please login again");
  // }

  // Proceed with the blocks initialization
  try {
    const response = await axios.post(`${API_BASE_URL}/api/blocks/initialize`, data, {
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

export async function getBlocks() {
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
    const response = await axios.get(`${API_BASE_URL}/api/blocks`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get blocks');
  }
}
