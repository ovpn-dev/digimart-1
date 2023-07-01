import React, {useState} from 'react'
import logo from './assets/logo.png'
import './css/forgot.css'
import { useNavigate } from 'react-router-dom'

const Forgot = () => {
  const [email, setEmail] =useState('')
  const navigate = useNavigate()

  const handleClick = async (e)=>{
    e.preventDefault()
    navigate('/reset')
  }
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
         
          <input type="email" onChange={(e)=> setEmail(e.target.value)} className="forgotMail" placeholder='Email address' />
          <button className="submit-btn" onClick={handleClick}>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default Forgot