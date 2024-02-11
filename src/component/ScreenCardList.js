import '../css/ScreenListCars.css'
const ScreenCardList=({details})=>{
  const btnStyle ={
    color:'white',
    cursor:'pointer'
    
  }
return(
<div class="screen-container">

  <div class="panel">
    <div class="ring">
      <div class="screen-card card1"></div>
      <div class="border">
        <p class="title"> SCREEN {details.id}</p>
        <div class="slide">
          <h6 class="para">SCREEN {details.id}</h6>
          <div class="line">
            <h6 class="para">SEATCOUNT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">{details.seatCount}</h6>
          </div>
          <div class="line">
            <h6 class="para">CHOOSE SEAT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <button class="para-button">CLICK</button>
          </div>
        </div>
      </div>
    </div>
  </div> 
</div>


  //   <div class="card">
  //   <div class="card-header">
  //     Screen {details.id}
  //   </div>
  //   <div class="card-body">
  //     <h5 class="card-title">Total Seat Count  {details.seatCount}</h5>
  //     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  //     <a href="#" class="btn btn-primary">Choose the seat</a>
  //   </div>
  // </div>
)
}
 export default ScreenCardList;