import axios from "axios";
const API_BASE_URL = "http://localhost:5000";

export async function submitReport(data) {
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
    const response = await axios.post(`${API_BASE_URL}/api/maintenance`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to post request!');
  }
}

export async function getReports() {
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
    const response = await axios.get(`${API_BASE_URL}/api/maintenance`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch requests!');
  }
}

export async function getReport(id) {
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
      const response = await axios.get(`${API_BASE_URL}/api/maintenance/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get report');
    }
}
