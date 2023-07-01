import React, {useState} from 'react'
import logo from './assets/logo.png'
import './css/reset.css'
import {Link} from 'react-router-dom'


const Reset = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')



  const handleClick = async (e)=>{
    e.preventDefault()
    console.log(password)
    console.log(confirm)
  }
  return (
    <div className='resetCont'>
      <div className="main">
      <div className="digi">
        <img src={logo} alt="digimart" className="mainlogo" />
        </div>

        <div className="mainReset">
          <h1 className="resetHeader">Reset your password</h1>
          <div className="eDescriptionDiv">
          <p className="eDescription">To reset your password, enter a new password</p> <br/>
          <span ><p className='box'>in the box below</p></span>
          </div>
         
          <input type="password" onChange={(e)=> setPassword(e.target.value)} className="resetPass" placeholder='New password' />
          <input type="password" onChange={(e)=> setConfirm(e.target.value)}placeholder='Re-type new password' className="retype" />
          <button className="submit-btn" onClick={handleClick}>SUBMIT</button>
          <p className="loginD">Didn't get a mail? <Link className='log' to='/register'>Resend it</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Reset