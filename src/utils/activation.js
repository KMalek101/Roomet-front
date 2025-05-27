import axios from "axios";
const API_BASE_URL = "http://localhost:5000";

export async function activateUser(token, data) {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/activate/${token}`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Activation failed');
  }
}