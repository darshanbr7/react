/*import React from "react";
class Navbar1 extends React.Component{
render(){
    return (<>
    <nav className="navbar navbar-expand-lg bg-dark">
        <a href="/" className="navbar-brand"> React Component</a>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-item"> <a href="/" className="nav-link"> Home</a></li>
                <li className="nav-item"> <a href="/" className="nav-link"> About</a></li>
                <li className="nav-item"> <a href="/" className="nav-link"> Services</a></li>

            </ul>
        </div>

    </nav>
    </>)
}
}
export default Navbar1  */
import React from "react";
import {Link, Router } from "react-router-dom"
class Navbar1 extends React.Component{
    render(){
        return (<>
        <nav className="navbar navbar-expand-lg bg-dark">
            <Link  class name="navbar-brand" to="/"> Navbar </Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <Router>
                    <Link to="/home" className="nav-link"> Home</Link>
             <Link to="/home" className="nav-link"> About</Link>
                     <Link to="/Service" className="nav-link"> Service</Link>
                    </Router>
                </ul>
            </div>

        </nav>
        </>)
    }

}export default Navbar1