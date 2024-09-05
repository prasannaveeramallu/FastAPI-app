import React, {useState} from 'react'
import axios from 'axios'
import './Register.css'



function Register(){
 const [username, setUsername] = useState("")
 const [email, setEmail] = useState("")
 const [firstname, setFirstname] = useState("")
 const [lastname, setLastname] = useState("")
 const [password, setPassword] = useState("")
 const [role, setRole] = useState("")
 
 const handleUsername = event  => {
    setUsername(event.target.value)
    
}
const handleEmail = event  => {
    setEmail(event.target.value)
    
}

const handleFirstname = event  => {
    setFirstname(event.target.value)
}

const handleLastname = event  => {
    setLastname(event.target.value)
    
}

const handlePassword = event  => {
    setPassword(event.target.value)
    
}

const handleRole = event  => {
    setRole(event.target.value)
    
}


    
    
   
    
 const registerBtn = () => {
    
       
        axios
        .post("http://127.0.0.1:8000/auth/", {
           "username": username,
            "email": email,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "role": role
        
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
            
        })
  }
  return (
    <div>
        <h1>Register</h1>
        <p>Username:</p>
        <input type='text' onChange={handleUsername}/>
        <p>Email:</p>
        <input type='email'  onChange={handleEmail}/>
        <p>First name:</p>
        <input type='text'  onChange={handleFirstname}/>
        <p>Last name:</p>
        <input type='text'  onChange={handleLastname}/>
        <p>Password:</p>
        <input type='password'  onChange={handlePassword}/>
        <p>Role:</p>
        <input type='text'  onChange={handleRole}/>
        <div className='register-btn'>
        <button onClick={registerBtn}>Register user</button>
        </div>
       
    </div>
  )
}

export default Register