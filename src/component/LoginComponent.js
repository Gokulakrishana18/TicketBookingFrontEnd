import React, { useState } from 'react'
import { loginAPICall, saveLoggedInUser, storeToken,userName,isAuthentication } from '../services/AuthService';
import { useNavigate,Link } from "react-router-dom";

import '../css/loginpage.css'
const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[responseCode,setResponseCode]=useState();
    const[user,setUser]=useState();
   

    const navigator = useNavigate();
    // setUser(username,password);

     function handleLoginForm(e){ 
console.log("Email :",email)
console.log("Password :", password)
        e.preventDefault();
      
        try{

            const response =  fetch('http://localhost:8080/user',{
              method : 'POST',
              headers :{
                'Content-Type':'application/json'
              } ,
              body :JSON.stringify({email,password})
            }).then((e)=>{
               // setResponseCode(e.status)
                if(e.status==200){
                  const token = 'Basic ' + window.btoa(email + ":" + password);
                  storeToken(token);
                  const isCheck = true;
                  isAuthentication(true);
                  const user_email = email;
                  userName(user_email);
                  navigator(`/theater`)
                }
                else{
                  console.log(e)
                  console.log("something wrong");
                }
            });
          }
        
          catch(error){
                     console.log('Error :',e);
          }

//             if(responseCode==200){
//                 const token = 'Basic ' + window.btoa(email + ":" + password);
//                 const user_email = email;
//                 userName(user_email);
//                 navigator(`/theater`)
//                   storeToken(token);
//                 // <Link to={`/theater`}></Link>
// console.log("okay")
            

          //   else{
          //       // setIsBookedMessage("Something went wrong ple book after some time");
          // console.log("not okay");
          //   }
       
      

        // await loginAPICall(username, password).then((response) => {
        //     console.log(response.data);

        //     const token = 'Basic ' + window.btoa(username + ":" + password);
        //     storeToken(token);

        //     saveLoggedInUser(username);
        //     navigator("/todos")

        //     window.location.reload(false);
        // }).catch(error => {
        //     console.error(error);
        // })

    }
  

    function handleregister(){
      navigator(`/register/`)
    }

  return (
   
    // <div className='container1'>
    //     <br /> <br />
    //     <div className='row'>
    //         <div className='col-md-6 offset-md-3'>
    //             <div className='card'>
    //                 <div className='card-header'>
    //                     <h2 className='text-center'> Login Form </h2>
    //                 </div>

    //                 <div className='card-body'>
    //                     <form>

    //                         <div className='row mb-3'>
    //                             <label className='col-md-3 control-label'> Username or Email</label>
    //                             <div className='col-md-9'>
    //                                 <input
    //                                     type='text'
    //                                     name='username'
    //                                     className='form-control'
    //                                     placeholder='Enter username'
    //                                     value={email}
    //                                     onChange={ (e) => setEmail(e.target.value)}
    //                                 >

    //                                 </input>
    //                             </div>
    //                         </div>

    //                         <div className='row mb-3'>
    //                             <label className='col-md-3 control-label'> Password </label>
    //                             <div className='col-md-9'>
    //                                 <input
    //                                     type='password'
    //                                     name='password'
    //                                     className='form-control'
    //                                     placeholder='Enter password'
    //                                     value={password}
    //                                     onChange={ (e) => setPassword(e.target.value)}
    //                                 >
    //                                 </input>
    //                             </div>
    //                         </div>

    //                         <div className='form-group mb-3'>
    //                             <button className='btn btn-primary'onClick={ (e) => handleLoginForm(e)}>Submit</button>

    //                         </div>
    //                     </form>

    //                 </div>

    //             </div>
    //         </div>
    //     </div>
    //     </div>
      
            <div className='loginPage-container'>

            <div className='heading'>Sign In</div>
            <form className='form'>
                <input />
      <input required="" className="input" 
      type="email" 
      name="email" 
      id="email"
       placeholder="E-mail"
      value={email}
      onChange={ (e) => setEmail(e.target.value)}
      /> 
      <input required="" 
      className="input"
       type="password" 
       name="password" 
       id="password" 
       placeholder="Password"
       value={password}
   onChange={ (e) => setPassword(e.target.value)}
       />
      <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
       <input className="login-button" type="submit" value="Sign In"
       onClick={ (e) => handleLoginForm(e)}
       />
     </form>
     <div>
     <p>If you don't have a account ple register</p>
     <input className="register-button" type="submit" value="Sign Up"
       onClick={ (e) => handleregister(e)}
       />   
     </div>
     
            </div>

     
 
  )
}

export default LoginComponent;