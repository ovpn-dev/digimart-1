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
        <Link to='/register' className='reg'>
          <button className="regist">
            CREATE AN ACCOUNT
          </button>
          </Link>
          <Link to='/login' className='logg'>
          <button className="login">
            LOGIN
          </button>
          </Link>
        </div>
      </div>
    
    </div>
  )
}

export default Options