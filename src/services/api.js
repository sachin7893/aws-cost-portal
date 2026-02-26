import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const sendPrompt = async (prompt) => {
	  return await axios.post(`${API}/chat`, { prompt });
};

export const getTopIncrease = async () => {
	  return await axios.get(`${API}/top-increase`);
};

export const getCostTrend = async () => {
	  return await axios.get(`${API}/cost-trend`);
};
