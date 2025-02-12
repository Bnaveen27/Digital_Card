import axios from "axios";

const API_URL = "http://localhost:5000/Routes/AuthRoutes";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/Pages/Register/Register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/pages/Login/Login`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Something went wrong" };
    }
  };