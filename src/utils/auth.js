import axios from "axios";
const API_BASE_URL = "http://localhost:5000";

export async function signUp(data) {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/register-director`, data);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
}