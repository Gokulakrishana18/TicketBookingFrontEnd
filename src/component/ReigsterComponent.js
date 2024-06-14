import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import '../css/RegisterPage.css';

const ReigsterComponent=()=>{
    const [isVisible, setIsVisible] = useState(true);
    const[email,setemail]=useState();
    const[password,setPassword]=useState();
    const[responseCode,setResponseCode]=useState();
    const[isOpen,setIsOpen]=useState("SignUp")

//     const container = document.querySelector(".container");
// const signUpBtn = document.querySelector(".green-bg button");

// signUpBtn.addEventListener("click", () => {
//   container.classList.toggle("change");
// });
function handleSignup(){
  console.log("okay");
  if(isVisible){
   setIsVisible(false);
  }
  else{
    setIsVisible(true);
  }
  if(isOpen=="SignUp")
  {
    setIsOpen("close")
  }
  else{
    setIsOpen("SignUp");
  }
}
const navigator = useNavigate();
const registerFunction=(e)=>{
console.log("inside the register function");
try{
  const response =  fetch('http://localhost:8080/register',{
              method : 'POST',
              headers :{
                'Content-Type':'application/json'
              } ,
              body :JSON.stringify({email,password})
            }).then((e)=>{
                setResponseCode(e.status)
            });
            if(responseCode==200){
              navigator("/login")
            }
            

}
catch(e){

}
}
function signInFunction(){
navigator(`/login`)
}
console.log(email);
console.log(password)
  // <div className={isVisible ? 'btndiv' : 'btndivhidden'}>
return(
  <div className={isVisible ?"container" : "container-change"}>
  <div class="form-wrapper">
    <div class="banner">
      <h1>Hello, Friend!</h1>
      <p>Enter your personal details and start journey with us</p>
    </div>
    <div class="green-bg">
      <button type="button" onClick={handleSignup}>{isOpen}</button>
    </div>
    <form class="signup-form">
      <h1>Create Account</h1>
      <div class="social-media">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
      </div>
      <p>or use your email for registration</p>
      <div class="input-group">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
      </div>
      {/* <div class="input-group">
        <i class="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div> */}
      <div class="input-group">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
      <div className="signup&INButtons">
      <button type="button" onClick={(e)=>{registerFunction(e)}}>Sign Up</button>
      <button type="button" onClick={(e)=>{signInFunction(e)}}>Sign IN</button>
      </div>
    </form>
  </div>
</div>

)
}
export default ReigsterComponent;