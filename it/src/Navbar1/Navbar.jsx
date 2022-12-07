import React from 'react'
 import {Link} from "react-router-dom"
const Navbar = () => {
  return (
  <>
  <nav className='navbar  navbar-expand-lg bg-dark'>
   <h1 className='navbar-brand text-white'> navbar</h1>
   <div className=' ml-auto'>
    <ul className='navbar-nav'>
        <li className='nav-link'> <Link to="./Home" className='navitem'> Home</Link></li>
        <li className='nav-link'> <Link to="./Login" className='navitem'> Login</Link></li>
        </ul>
        </div> 
  </nav>
  </>
  )
}

export default Navbar