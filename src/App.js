
import React, { useEffect, useState } from 'react';
import ScreenComponen from './component/ScreenComponent';
import TheaterDashboard from './component/TheaterDashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [screen, setScreen] = useState();

  const handleScreenDetails = (data) => {
    console.log(data);
    setScreen(data);
    return screen;
  }

  useEffect(() => {
    console.log("okay")
    console.log(screen)
  }, [screen]);

  return (

    <Routes>
      <Route

        path="/"
        element={ <TheaterDashboard screenDetails={handleScreenDetails} />}
      />
      <Route
        path="/screen"
        element={ <ScreenComponen screen={handleScreenDetails} />}
      />



      {/* {!screen&& <TheaterDashboard screenDetails={handleScreenDetails}/>}
   {screen&& <ScreenComponen screen={screen}/> } */}

    </Routes>
  );
}

export default App;
