import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const fetchBudget = async (data: {
  income: number;
  fixed: number;
  variable: number;
  goal: number;
  months: number;
}) => {
  const response = await axios.post(`${API_BASE_URL}/api/budget`, data);
  return response.data;
};
