
const ScreenCardList=({details})=>{
return(
    <div class="card">
    <div class="card-header">
      Screen {details.id}
    </div>
    <div class="card-body">
      <h5 class="card-title">Total Seat Count  {details.seatCount}</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Choose the seat</a>
    </div>
  </div>
)
}
 export default ScreenCardList;