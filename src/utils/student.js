import axios from "axios";
const API_BASE_URL = "http://localhost:5000";

export async function uploadBulkStudents(file) {
  const sessionCheck = await fetch(`${API_BASE_URL}/api/auth/is-logged-in`, {
    credentials: 'include'
  });

  const sessionData = await sessionCheck.json();

//   if (!sessionData.loggedIn) {
//     throw new Error("Unauthorized - Please login again");
//   }

  // Step 2: Prepare FormData for file upload
  const formData = new FormData();
  formData.append("file", file);

  // Step 3: Make authenticated POST request to /bulk
  try {
    const response = await axios.post(`${API_BASE_URL}/api/assignments/bulk`, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Bulk upload failed');
  }
}

export async function addStudent(data) {
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
    const response = await axios.post(`${API_BASE_URL}/api/assignments/add-student`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to add student');
  }
}

export async function getStudents() {
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
      const response = await axios.get(`${API_BASE_URL}/api/assignments/students`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add student');
    }
}

export async function getStudent(id) {
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
      const response = await axios.get(`${API_BASE_URL}/api/assignments/student/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add student');
    }
}

export async function updateStudent(id, studentData) {
  try {
    const requestData = {
      firstName: studentData.firstName,
      lastName: studentData.lastName,
      email: studentData.email,
      phone: studentData.phone,
      room: studentData.room ? { _id: studentData.room._id } : null
    };

    const response = await axios.patch(
      `${API_BASE_URL}/api/assignments/student/${id}`,
      requestData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.student;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update student');
  }
}