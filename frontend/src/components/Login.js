import React, {useState} from 'react'
import axios from 'axios'
import qs from 'qs'
import './Login.css'
import { useNavigate } from "react-router";
import { fetchToken, setToken

 } from './Auth';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleUsername = event  => {
        setUsername(event.target.value)
        
    }

    const handlePassword = event  => {
        setPassword(event.target.value)
        
    }
    const LoginBtn = () => {
        const data = { "username": username, 
                "password": password };
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(data),
          url: "http://127.0.0.1:8000/auth/token",
        };
        
            axios(options)
            .then(function (response) {
                console.log(response.data.access_token, "response.data.token");
                if (response.data.access_token) {
                  setToken(response.data.access_token);
                  navigate("/home");
                }
              }).catch((err) => {
                console.log(err)
                
            })
      }

  return (
    <div>
        <div>
        {fetchToken() ? (
          <p>you are logged in</p>
        ) : (
            <div>
            <h1>Login</h1>
            <p>Username:</p>
            <input type='text'  onChange={handleUsername}/>
            <p>Password:</p>
            <input type='password' onChange={handlePassword}/>
            <div className='login-btn'>
            <button onClick={LoginBtn}>Login</button>
            </div>
            </div>
            
        )}
        </div>
        
       
    </div>
  )
}

export default Login