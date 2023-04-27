import React from 'react'
import{ Link} from "react-router-dom"

const AuthNavbar = () => {
  return (
        <>
          {/*  <nav className="navbar navbar-expand-lg bg-dark">
                <div className="navbar-brand"> Navbar</div>
                <div className="ml-auto">
                <ul className="navbar-nav text-white">
                <li className="nav-link"><Link to="#" className="nav-item"> Home</Link></li>
               
                <li className="nav-link"><Link to="#" className="nav-item"> Login</Link></li>
        </ul>
        </div>
         </nav> */}

         <nav className='navbar  navbar-expand-lg bg-dark'>
            <div className="navbar-brand text-white"> HELLO</div>
            <div className="ml-auto">
                <ul className="navbar-nav text-white">
                    <li className='nav-link'> <Link to="/Login"> LOGIN</Link></li>

                </ul>
            </div>

         </nav>
        </>
  )
}

export default AuthNavbar