import 'bootstrap/dist/css/bootstrap.min.css'
import TheaterList from '../sampledata/threaterlist';
import TheaterListCard from './TheaterListCard';
import '../css/TheaterListCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {getToken} from '../services/AuthService';
import { getAllTheater } from '../services/TicketBookingService';

const TheaterDashboard=()=>{

    const [ListOfTheater,setTheaterlist] = useState(TheaterList);
    const [query,setQuery] = useState();
    const[data,setData] = useState();
    const [childComponent,setChildComponent]=useState('');
    const [screen,setScreen]= useState();
    //const[id,setId]=useState();




    useEffect(()=>{
      getAllTheater().then((respons)=>{
        console.log(respons.data);
        const theaterList = respons.data;
        setData(theaterList)
      })
      .catch(error=>{
            console.error("error:",error);
           });
      
    },[]);
  
    // useEffect(()=>{
    //   axios.get('http://localhost:8080/api/ticketBooking/theatres').
    //   then(async response=>{
    //    setData(response.data)
    //     console.log(response);
    //   })
    //   .catch(error=>{
    //     console.error("error:",error);
    //   });
    // },[]);

    // const keys = ["name", "location"];
    const keys = ["name"];
      const search = (e) => {
        console.log();
        if(query){
          return  e.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(query)))
        
          
        }
        else{
          return data
          // console.log(data)
        }
        // return e.filter((item) =>
        //   keys.some((key) => item[key].toLowerCase().includes(query))
        // )||  data;
      };
   

return(
    <div className="theaterDashboard-container">
        <div className='input-group mt-3'>
            <input type="text" className='form-control' placeholder='Search...'value={query || ''} onChange={(e)=>{setQuery(e.target.value)}} ></input>
            <button className='btn btn-outline-secondary' type="button">Search</button>
            </div>
           <div className='container'>
            <div className='row'>
            < TheaterListCard  key={TheaterList.id}  theaterList={search(data)}   className="cardList col-md-3"/>       
            </div>
 
           </div>
          
            
    </div>
);
}
export default TheaterDashboard;