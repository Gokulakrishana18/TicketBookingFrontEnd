
import React, { useEffect, useState } from 'react';
import ScreenComponen from './component/ScreenComponent';
import TheaterDashboard from './component/TheaterDashboard';
import {getAuthentication} from './services/AuthService'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import SeatComponent from './component/SeatComponent';
import LoginComponent from './component/LoginComponent';
import ReigsterComponent from './component/ReigsterComponent';

function App() {
  const [theaterId, setTheater] = useState();
  const[auditoriumId,setAuditoriumId] = useState();
  const handleScreenDetails = (data) => {
    console.log(data);
    setTheater(data);
    
  }
  const passTheAuditoriumID=(e)=>{
console.log(e);
setAuditoriumId(e);
  }


console.log(getAuthentication);

  return (

    <Routes>
      <Route
path="/register"
element={<ReigsterComponent/>}>
</Route>


<Route path='/login' element = { <LoginComponent /> }></Route>
      <Route
        path="/theater"
        element={getAuthentication()?<TheaterDashboard  />: <Navigate to="/login"/>}
      />
      <Route
        path="/screen"
        element={ <ScreenComponen screen={theaterId} getAuditoriumId={passTheAuditoriumID} />}
      />
      <Route 
      path="/booking"
      element={<SeatComponent theater={theaterId} auditoriumId={auditoriumId}/>}/>



      {/* {!screen&& <TheaterDashboard screenDetails={handleScreenDetails}/>}
   {screen&& <ScreenComponen screen={screen}/> } */}

    </Routes>
  );
}

export default App;
