import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/BookingSeat.css'
import ListOfSeat from "./ListOfSeat";
import { getSeat ,seatBooking} from '../services/TicketBookingService';
import { getToken,getUserName } from "../services/AuthService";

const SeatComponent = () => {
    const[seatDetails,setSeatDetails]=useState();
    const[seatPrice,setSeatPrice] = useState(0);
    const[seatCount,setSeatCount] = useState(0);
    const[selectedSeat,setSelectedSeat]= useState([]);
    const[isBookedMessage,setIsBookedMessage] = useState();
    const[responseCode,setResponseCode]= useState();
    const[ user_email,setUserEmail]=useState();
    const[seat,setSeatId]=useState();
    const[choosedSeat,setChoosedSeat] = useState([]);
    const[a,setA]=useState();
   const userName = localStorage.getItem("user_email");
   useEffect(()=>{
const screenID = localStorage.getItem("screenId");
getSeat(screenID).
  then(response=>{
     setSeatDetails(response.data);
    console.log(response.data);
  })
  .catch(error=>{
    console.error("error:",error);
  });
   },[]) ;
//    console.log(choosedSeat);

   const getTheSeatPrice=(e)=>{
    const user_email=userName;
    const seat = e.id;
    // console.log("seat price for this Seat :",e.price);
    const existingIndex = selectedSeat.findIndex(item=>item.id==e.id); 
    
    const existingSeat = choosedSeat.findIndex(item=>item.seat==e.id); 
    console.log(a);
    console.log("seatAndUser",existingSeat);
    console.log("User",existingIndex);
    if(existingIndex!==-1 ){
    console.log("something work");
     const filteredList = selectedSeat.filter(item=>item.id!=e.id);
     const filteredUserList = choosedSeat.filter(item=>item.seat!=e.id);
     choosedSeat.map((item)=>(
      console.log("seat :",item.seat,"Id :",e.id)
     ))
     setChoosedSeat(filteredUserList);
    setSeatPrice(seatPrice-e.price);
setSeatCount(seatCount-1);
setSelectedSeat(filteredList);
// console.log(seatPrice);
 }
 else{
    // console.log("Inside the else part");
     const userAndSeat =[...choosedSeat,{seat,user_email}] 
     setChoosedSeat(userAndSeat);
     const markAsBooked ={...e,booked:true}
     const seats = [...selectedSeat,markAsBooked];
    setSeatPrice (seatPrice+e.price);
    setSeatId(e.id);
//    setChoosedSeat(userAndSeat);
    setSelectedSeat(seats);
    setSeatCount(seatCount+1);
    // console.log(seatPrice)
    // console.log(selectedSeat);
    console.log(choosedSeat);
 }
 

   }
 const decerseTheSeatPrice=(price)=>{
    console.log("seat price for this Seat :",price);
    setSeatPrice (seatPrice-price)
 }

 const confirmTicket=(e)=>{
  
    if(selectedSeat.length==0){
        alert("Ple choose the seat...")
    }
    else{
        try{

             const response =  fetch('http://localhost:8080/api/ticketBooking/booktheTicket',{
               method : 'POST',
            
              headers :{
                'Content-Type':'application/json',
                 'Authorization': getToken(),
              } ,
              body :JSON.stringify(choosedSeat)
            }
            )
            .then((e)=>{
                if(e.status==200){
                    setIsBookedMessage("Booked successFully");
                               }
                               else{
                                   setIsBookedMessage("Something went wrong ple book after some time");
                               }
            });
        }
        catch(error){
                   console.log('Error :',e);
        }
      
    }
 }

const referceThePage=()=>{
    setSeatPrice(0);
    setSeatCount(0);
    setSelectedSeat([]);
    setChoosedSeat([]);

}
useEffect(()=>{   },[selectedSeat,seatPrice]);
   
   
   return (
   <div className="Bookingpage">
            <div className="booking-container">
              <button style={{backgroundcolor:'green'}}>&times; </button>
                <ul className="showcase">
                    <li>
                        <div className="seat">
                        </div>
                        <small>NA</small>
                    </li>
                    <li>
                        <div className="seat selected">

                        </div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div className="seat occupied">

                        </div>
                        {/* windows+.  for emoji*/}n
                        <small>Occupied🪑🪑🪑</small>
                    </li>
                </ul>
               <div className="booking-row-container">
                    <div className="booking-screen"></div>
                    <div className="booking-row">
                        {seatDetails?.map((e)=>(
                          <ListOfSeat key={e.id}seat={e} getTheSeatPrice={getTheSeatPrice} 
                          decerseTheSeatPrice={decerseTheSeatPrice}
                         
                          />
                        ))}
                    </div>
                   
                </div>
                <div className="Price">
                    <p>
                        You have selected <span id="count">{seatCount}</span> seats for a price of $<span
                     >{seatPrice}</span
                        >

                    </p>
                </div>
               { isBookedMessage && <p>{isBookedMessage}</p>}
                <button className='btn btn-primary' onClick={(e)=>{confirmTicket(e)}}>
        Confirm the ticket
    </button>
            <button className="btn btn-danger" onClick={(e)=>{referceThePage(e)}}>cancle</button>
            </div>
        </div>



    );
}
export default SeatComponent;


{/* after here i want to selected seat to back end and save this data into backed */}