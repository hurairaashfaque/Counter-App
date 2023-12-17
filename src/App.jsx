import React from 'react'
import { useState } from 'react'
import "./App.css"
const App = () => {
    const [fristName, setFristName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [webName, setWebName] = useState("")
  return (
    // <>
    // <input type="text"  placeholder='Enter Frist Name' 
    // }}/> <br /><br />
    // <input type="text"  placeholder='Enter Last Name'  value={lastName} onChange={(e)=>{
    //     setLastName(e.target.value)
    // }}/> <br /><br />
    // <input type="email"  placeholder='Enter Email'  value={email} onChange={(e)=>{
    //     setEmail(e.target.value)
    // }}/> <br /><br />
    // <input type="password"  placeholder='Enter Password'  value={password} onChange={(e)=>{
    //     setPassword(e.target.value)
    // }}/> <br /><br />
    // <input type="text"  placeholder='Enter Website Name' value={web} onChange={(e)=>{
    //     setWebName(e.target.value)
    // }}/> <br /><br />
    // <button type='submit' onClick={()=>{
    //     console.log(fristName,lastName,email,password,web);
    // }}>Submit</button>
    // </>

    <>
    <div className="container">
  <div className="title">Registration Form</div>
    <div className="user__details">
      <div className="input__box">
        <span className="details">Full Name</span>
        <input type="text" placeholder="Enter Frist Name" required value={fristName} onChange={(e)=>{
          setFristName(e.target.value)
        }}/>
      </div>
      <div className="input__box">
        <span className="details">Last Name</span>
        <input type="text" placeholder="Enter Last Name" required value={lastName} onChange={(e)=>{
          setLastName(e.target.value)}} />
      </div>
      <div className="input__box">
        <span className="details">Email</span>
        <input type="email" placeholder="Email" required value={email} onChange={(e)=>{
          setEmail(e.target.value)}} />
      </div>
      <div className="input__box">
        <span className="details">Password</span>
        <input
          type="password"
          placeholder="Enter Password"
          required 
          value={password} 
          onChange={(e)=>{
            setPassword(e.target.value)}}
        />
      </div>
      <div className="Inp">
        <span className="details">Website Name</span> <br />
        <input type="text" placeholder="Enter Website Name" required value={webName} onChange={(e)=>{
          setWebName(e.target.value)}}/>
      </div>
    </div>
    <div className='btn'>
        <button className='button' onClick={()=>{
          console.log(fristName,lastName,email,password,webName);
        }}>Submit</button>
    
    </div>
</div>

    </>
  )
}

export default App