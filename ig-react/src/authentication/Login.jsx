import React from 'react';
import "./Login.css"

function Login() {
  return (
    <div className='login'>
      <img 
        src="https://pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
        alt=""
       />
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password" />
      <button>Log in</button>
    </div>
  );
}

export default Login;