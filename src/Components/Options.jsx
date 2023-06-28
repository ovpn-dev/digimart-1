import React from 'react'
import './css/options.css'
import logo from './assets/logoWhite.png'
import {Link} from 'react-router-dom'




const Options = () => {
  return (
    <div className='optionsContainer'>
      <div className='optionsdiv'>
        <div className="logo">
          <img src={logo} alt="digimart" className="whitelogo" />
        </div>

        <div className="options">
          <button className="regist">
            <Link to='/register' className='reg'>CREATE AN ACCOUNT </Link>
          </button>

          <button className="login">
            <Link to='/login' className='log'>LOGIN</Link>
          </button>
        </div>
      </div>
    
    </div>
  )
}

export default Options