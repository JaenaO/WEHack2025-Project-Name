import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000'; // Backend URL

// Function to assess an investment
export const assessInvestment = async (investmentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/assess/`, investmentData);
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error assessing investment:', error);
    throw error;
  }
};