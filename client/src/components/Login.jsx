import { useState } from 'react'
import axios from 'axios'
import '../styles/LoginStyle.css'
export default function Login(){
    const [error , setError] = useState('')
    const [formData , setData] = useState({
        email : "",
        password : ""
    })

    function handleSubmit(e){
        e.preventDefault()
      
        axios({
            method : 'post',
            url : "http://localhost:5000/v1/login",
            data : formData
        })
        .catch(e=>setError(e.response?.data?.message))
    
    }
    return(
        <div className='cont'>
            <h3>Sign In</h3>
            {error && <h6>{error}</h6>}
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email address:</label>
                <div>
                <input type="email" placeholder='Enter email' id='email'
                 value={formData.email}
                 onChange = {(e)=>setData({...formData,email : e.target.value})}
                 />
                 </div>
                <label htmlFor='password'>Password:</label>
                <div>
                <input type="password" placeholder='Enter password' id='password'
                 value={formData.password}
                 onChange = {(e)=>setData({...formData,password : e.target.value})}
                 />
                 </div>
                 <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}