import React from 'react';
import "./Authentication.css";
import Login from './Login';

function Authentication() {
  return (
    <div className="authentication">
        <div className="auth__left">
            <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
        </div>
        <div className="auth__right">
            <Login />
            <div className="auth__more">
                <span>
                    Dont have an account? <button>Sign Up</button>
                </span>
            </div>
        </div>
    </div>
  );
}

export default Authentication;
