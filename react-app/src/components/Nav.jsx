import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from '../pages/About'

const Nav = () => {
  return (
    
    <div>
        <nav className='nav'>
            <ul className='nav-items'>
                <li>Pricing</li>
                <li>
                  About
                </li>
                <li>Contact</li>
            </ul>
      </nav>
    </div>
  

  )
}

export default Nav
