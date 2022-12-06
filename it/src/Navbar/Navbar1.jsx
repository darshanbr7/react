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
import {Link} from "react-router-dom"
class Navbar1 extends React.Component{
    render(){
        return (<>
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="navbar-brand"> Navbar</div>
        <div className="ml-auto">
        <ul className="navbar-nav text-white">
                <li className="nav-link"><Link to="./home" className="nav-item"> Home</Link></li>
                <li className="nav-link"><Link to="./about" className="nav-item"> About</Link></li>
                <li className="nav-link"><Link to="./service" className="nav-item"> Service</Link></li>
        </ul>
        </div>
         </nav>
        </>)
    }

}export default Navbar1