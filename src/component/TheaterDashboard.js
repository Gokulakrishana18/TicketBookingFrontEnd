import 'bootstrap/dist/css/bootstrap.min.css'
import TheaterList from '../sampledata/threaterlist';
import TheaterListCard from './TheaterListCard';
import '../css/TheaterListCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TheaterDashboard=({screenDetails})=>{

    const [ListOfTheater,setTheaterlist] = useState(TheaterList);
    const [query,setQuery] = useState();
    const[data,setData] = useState();
    const [childComponent,setChildComponent]=useState('');
    const [screen,setScreen]= useState();
    const[id,setId]=useState();

    const handleThechildComponent=(data)=>{
      setId(data);
    }
   
  useEffect(()=>{
      axios.get(`http://localhost:8080/${id}/auditoriums`).
      then(response=>{
        screenDetails(response.data);
        console.log(response);
      })
      .catch(error=>{
        console.error("error:",error);
      }); 
      console.log(screenDetails.data) 

},[id])
 console.log("Id :",id);
    useEffect(()=>{
      axios.get('http://localhost:8080/theatres').
      then(async response=>{
       setData(response.data)
        console.log(response);
      })
      .catch(error=>{
        console.error("error:",error);
      });
    },[]);

    const keys = ["name", "location"];
      const search = (data) => {
        console.log();
        return data?.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(query))
        )|| data;
      };
   

return(
    <div className="container">
        <div className='input-group mt-3'>
            <input type="text" className='form-control' placeholder='Search...'value={query} onChange={(e)=>{setQuery(e.target.value)}} ></input>
            <button className='btn btn-outline-secondary' type="button">Search</button>
            </div>
           <div className='container'>
            <div className='row'>
            < TheaterListCard  key={TheaterList.id}  theaterList={search(data)} toparent={handleThechildComponent}  className="cardList col-md-3"/>       
            </div>
           </div>
          
            
    </div>
);
}
export default TheaterDashboard;