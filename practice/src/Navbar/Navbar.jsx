import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar  navbar-expand-lg bg-dark'>
      <h1 className=' navbar-brand'> Navbar</h1>
      <div className='ml-auto'>
      <ul className='navbar-nav'>
        <li className='lav-link'> 
        <Link  to="/Home" className='nav-item'> Home</Link>
        </li>

      </ul>
      </div>

    </nav>
   
  )
}

export default Navbar