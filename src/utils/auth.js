import axios from "axios";
const API_BASE_URL = "http://localhost:5000";

export async function signUp(data) {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/register-director`, data);
      return response.data;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
}

export async function login(data) {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Login failed");
    }
    
    return result;
}

