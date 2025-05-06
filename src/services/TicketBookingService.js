import axios from "axios";
import { getToken } from "./AuthService";

const BASE_REST_API_URL = 'http://localhost:8080/api/ticketBooking';

// Automatically attach Authorization Token to all requests
axios.interceptors.request.use(config => {
  config.headers['Authorization'] = getToken();
  return config;
}, error => {
  return Promise.reject(error);
});

// API Calls
export const getAllTheater = () => axios.get(`${BASE_REST_API_URL}/theatres`);

export const getAuditorium = (screen) => axios.get(`${BASE_REST_API_URL}/${screen}/auditoriums`);

export const getSeat = (auditoriumId) => axios.get(`${BASE_REST_API_URL}/1/${auditoriumId}/seats`);

export const seatBooking = (selectedSeat) => fetch(`${BASE_REST_API_URL}/bookingSeat`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': getToken()
  },
  body: JSON.stringify(selectedSeat)
});


