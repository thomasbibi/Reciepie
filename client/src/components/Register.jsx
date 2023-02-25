import { useState } from 'react'
import axios from 'axios'
import '../styles/LoginStyle.css'
import '../styles/Register.css'
export default function Register(){
    const [registerError , setRegisterError] = useState('')
    const [regisData , setRegisData] = useState({
        email : "",
        password : "",
        retypePassword : ""
    })

    function handleRegister(e){
        e.preventDefault()
        if(password !== retypePassword){
            setRegisterError("Passwords does not match")
        }
        if(!registerError){
        axios({
            method : 'post',
            url : "http://localhost:5000/v1/register",
            data : regisData
        })
        .catch(e=>setRegisterError(e.response?.data?.message))
        }
    }
    return(
        <div className="cont">
         <h3>Sign Up</h3>
         {registerError && <h6>{registerError}</h6>}
         <form onSubmit={handleRegister}>
                <label htmlFor='email'>Email address:</label>
                <div>
                <input type="email" placeholder='Enter email' id='email'
                 value={regisData.email}
                 onChange = {(e)=>setRegisData({...regisData,email : e.target.value})}
                 />
                 </div>
                <label htmlFor='password'>Password:</label>
                <div>
                <input type="password" placeholder='Enter password' id='password'
                 value={regisData.password}
                 onChange = {(e)=>setRegisData({...regisData,password : e.target.value})}
                 />
                 </div>
                <label htmlFor='retypePassword'>Re-type Password:</label>
                <div>
                <input type="password" placeholder='Re-type password' id='retypePassword'
                 value={regisData.retypePassword}
                 onChange = {(e)=>setRegisData({...regisData,retypePassword : e.target.value})}
                 />
                 </div>
                 <input type="checkbox"/>i agree with Terms and conditions
                 <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}