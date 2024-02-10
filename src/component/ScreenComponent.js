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

    
return(
  <div>
    <h1>Screen Component</h1>
   
   {
    a&&
    a.map((i)=>(
      <ul>
        <ScreenCardList details={i}/>
        </ul>
      ))
    
   }
</div>
);

};

export default ScreenComponen;
