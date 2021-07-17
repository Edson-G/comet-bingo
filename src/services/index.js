import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;
const contest = process.env.REACT_APP_CONTEST;

const api = axios.create({
  baseURL: url,
});

const results = async () => {
  const response = await api.get(`/results/${contest}`);
  return response.data;
};

const rounds = async () => {
  const response = await api.get(`/rounds/${contest}`);
  return response.data;
};

const currentRound = async () => {
  const response = await api.get(`/rounds/${contest}`);
  if (response.data) return response.data[1].tier;
  return 9;
};

const bracketService = {
  results,
  rounds,
  currentRound,
};

export default bracketService;
