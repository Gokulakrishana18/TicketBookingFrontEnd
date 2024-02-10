
import React, { useEffect, useState } from 'react';
import ScreenComponen from './component/ScreenComponent';
import TheaterDashboard from './component/TheaterDashboard';

function App() {
  const[screen,setScreen]=useState();

 const handleScreenDetails=(data)=>{
  console.log(data);
   setScreen(data);
  }
  useEffect(()=>{
    console.log("okay")
console.log(screen)
  },[screen]);
  return (
    <div >
  {!screen&& <TheaterDashboard screenDetails={handleScreenDetails}/>}
   {screen&& <ScreenComponen screen={screen}/> }

    </div>
  );
}

export default App;
