import React, { useEffect, useState } from "react"
import ScreenCardList from "./ScreenCardList";

const ScreenComponen=(screen)=>{
    const {screenDetails}= screen;
    const[a,setA]=useState();
    useEffect(()=>{
        const {screenDetails}= screen;
        Object.entries(screen).map(([key,value])=>{
         {value&& setA(value)}
          })
      
    },[])
    console.log("okay");

    a &&
    a.map((e)=>{
      console.log("id :",e.id)
    })
// const  CardStyle={
//  background-color:"green;"
// }
    
return(
  <div>
    <h1>Screen Component</h1>
   <div ></div>
   <ul style={{
        
        display: 'flex',
        gap:'1rem',
      }}>
   {
    a&&
    a.map((i)=>(
      
        <ScreenCardList details={i}/>
        
      ))
    
   }
   </ul>
</div>
);

};

export default ScreenComponen;
