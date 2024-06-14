import axios from "axios";
import { getToken } from "./AuthService";

const BASE_REST_API_URL = 'http://localhost:8080/api/ticketBooking';
// /api/ticketBooking/theater

// export function getAllTodos(){
//     return axios.get(BASE_REST_API_URL);
// }

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  const theaterId = localStorage.getItem("TheaterId");
  console.log(theaterId);
  
export const getAllTheater = () => axios.get(BASE_REST_API_URL +'/theater')

// axios.get(`http://localhost:8080/api/ticketBooking/auditorium/${screen}`)
export const getAuditorium = (screen) => axios.get(BASE_REST_API_URL + '/Auditorium/'+  screen )

// axios.get(`http://localhost:8080/api/ticketBooking/${auditoriumId}/seats`)

export const getSeat = (auditoriumId) => axios.get(BASE_REST_API_URL + '/' + auditoriumId +"/seat");

// // http://localhost:8080/bookingSeat
// export const bookTheSeat = () => axios.put(BASE_REST_API_URL + '/bookingSeat',{
//   method
// } )

export const seatBooking =(selectedSeat)=>  fetch(BASE_REST_API_URL + '/bookingSeat',{
  method : 'PUT',
    headers :{
      'Content-Type':'application/json'
    } ,
    body :JSON.stringify(selectedSeat)
  })


export const deleteTodo = (id) => axios.delete(BASE_REST_API_URL + '/' + id)

export const completeTodo = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/complete')

export const inCompleteTodo = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/in-complete')