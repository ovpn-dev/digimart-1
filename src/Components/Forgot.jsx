import React, {useState} from 'react'
import logo from './assets/logo.png'
import './css/forgot.css'
// import { useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from './firebase/Firebase';
import {toast} from 'react-toastify'
import { collection, doc, setDoc } from "firebase/firestore"
import { getFirestore } from 'firebase/firestore';


const Forgot = () => {
  const [email, setEmail] =useState('')
  // const navigate = useNavigate()

  
  const handleClick = async (e) => {
  e.preventDefault();
  const auth = getAuth(app);
  const actionCodeSettings = {
    url: `https://digimart-exchange.vercel.app/reset`,
    handleCodeInApp: true,
  };
  try {
    const sent = await sendPasswordResetEmail(auth, email, actionCodeSettings);
    toast.success("Email verification sent");
    console.log(sent, savedCode)
  } catch (error) {
    error.message === "Firebase: Error (auth/user-not-found)."? toast.error("User not found") : toast.error(error.message);
    console.log(error.message);
  }
};

  
  return (
    <div className='fgCont'>
      <div className="main">
        <div className="digi">
        <img src={logo} alt="digimart" className="mainlogo" />
        </div>

        <div className="mainForgot">
          <h1 className="forgotHeader">Forgot your password</h1>
          <div className="eDescriptionDiv">
          <p className="eDescription">Enter your email,and we'll send a link to get</p> <br/>
          <span ><p className='back'>back into your account</p></span>
          </div>
         
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="forgotMail" placeholder='Email address' />
          <button className="submit-btn" onClick={handleClick}>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default Forgot