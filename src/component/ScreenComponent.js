import axios from "axios";
import React, { useEffect, useState } from "react"
import ScreenCardList from "./ScreenCardList";
import '../css/ScreenListCars.css';
import { getAuditorium } from '../services/TicketBookingService'

const ScreenComponen=({screen})=>{
    const [screenDetails,SetscreenDetails]= useState([]);
    console.log(screen)
    const[a,setA]=useState();
    useEffect(()=>{
      // axios.get(`http://localhost:8080/api/ticketBooking/auditoriums/${screen}/`).
      const theaterId = localStorage.getItem("TheaterId");
     console.log(theaterId);
      getAuditorium(theaterId).
      then(response=>{
        SetscreenDetails(response.data);
        console.log(response);
      })
      .catch(error=>{
        console.error("error:",error);
      }); 
       console.log(screenDetails) 

},[])

const getTheId=(e)=>{
  console.log("get the id");
  console.log(e);
}
// console.log(getAuditoriumId);

    // useEffect(()=>{
    //     const {screenDetails}= screen;
    //     Object.entries(screen).map(([key,value])=>{
    //      {value&& setA(value)}
    //       })
      
    // },[])
    console.log("okay");

    // a &&
    // a.map((e)=>{
    //   console.log("id :",e.id)
    // })
// const  CardStyle={
//  background-color:"green;"
// }
    
return(
  <div className="Screen-dashboard">
    <h1>Screen Component</h1>
   <div ></div>
   <ul style={{
        
        display: 'flex',
        gap:'1rem',
      }}>
   {
    screenDetails?.map((e)=>(
      <ScreenCardList key={e.id} details={e} getAuditoriumId={getTheId}/>
    ))
   }
   </ul>
</div>
);

};

export default ScreenComponen;
