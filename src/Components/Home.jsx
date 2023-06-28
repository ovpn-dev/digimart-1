import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div classname='Container'>
    Hello
    <ul>
      <li><Link to='/options'>Options page</Link></li>
     

    </ul>
    </div>
  )
}

export default Home