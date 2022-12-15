import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
   <React.Fragment>
    <nav className="navbar navbar-expand-lg bg-dark mt-3">
        <div className="navbar-brand text-white"> Apartment Management</div>
        <div className="ml-auto">  
            <ul className="navbar-nav">
                <li className="nav-link"> <Link to="" className="nav-item text-white">Home</Link></li>
                <li className="nav-link"> <Link to="./login" className="nav-item text-white">login</Link></li>

            </ul>

        </div>

    </nav>
    <p> react home page</p>
   </React.Fragment>
  )
}

export default Home