import React, {useState} from 'react'
import './css/register.css'
import logo from './assets/logoWhite.png'
import hands from './assets/hands.png'
import GImage from './assets/GImage.png'
import {Link} from 'react-router-dom'
import eyes from './assets/eyes.svg'

const Register = () => {
  const [password, setPassword] = useState('')
  return (
    <div className='Container'>
       <div className="left">
          <div className="child">
          <img src={logo} alt="digimart" className="whitelogo" />
          <img src={hands} alt="handshake" className="hands" width='550' />
          </div>
       </div>

       <div className="right">
         <h2 className="regisHead">Register</h2>
         <form action="" className="registrationForm">
           <input type='text' placeholder='First name' className='firstName' />
           <input type="text" placeholder='Last name' className="lastName" />
           <input type="email" placeholder='Email' className="email" />
           <input type="number" className="number" placeholder='Phone number' />
           <span className="pass">
           <input type="password" className="password" placeholder='Password' />
           <img src={eyes} alt="visibility" className="eyes" />
           </span>
           <span className="con">
           <input type="password" placeholder='Confirm password' className="confirm" />
           <img src={eyes} alt="visibility" className="eyes" />
           </span>
           
           <button className="register">
            CREATE AN ACCOUNT 
          </button>
          <p className="or"><hr className='left-line' /> or <hr className='right-line' /></p>
          <button className="google">
            <span className="goog">
            <img src={GImage} alt='google' className='googl' width='40'/>
            </span> 
            <span className="words">Signup with Google</span>
            
          </button>
          <p className="login">Already have an account? <Link className='log' to='/login'>Login</Link></p>
         </form>
       </div>
    </div>
  )
}

export default Register