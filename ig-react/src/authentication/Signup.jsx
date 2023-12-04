import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <div className='signup'>
      <img 
        src="https://pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
        alt=""
       />
      <input type="email" placeholder="Email"/>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
    </div>
  )
}

export default Signup;