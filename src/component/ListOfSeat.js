import {React,useCallback,useState} from 'react'
const ListOfSeat=({seat,getTheSeatPrice,decerseTheSeatPrice})=>{
   const[price,setPrice]=useState();
    // let price =0;
    const [clickSteat,setClickSeat]= useState([]);
    const [Seatcolor,setSeatColor]= useState(false);
    let a=0;
    const getTheSeatDetails=((e)=>{
        console.log(price)
        getTheSeatPrice(e)
        setPrice(price+e.seatPrice);     
        console.log(price);
       Seatcolor ? setSeatColor(false) : setSeatColor(true);
        
  
    });

 const rediuseThePrice=(e)=>{
   
    decerseTheSeatPrice(e.seatPrice)
 }

   
return(
<div>

<div className= {seat.booked ? `occupied` :(Seatcolor ? 'selected':'seat')} value={seat.seatPrice} onDoubleClick={()=>{rediuseThePrice(seat)}} onClick={()=>getTheSeatDetails(seat)}>
    <p></p>
    </div>
    
</div>
);
}
export default ListOfSeat;