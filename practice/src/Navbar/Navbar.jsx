import React from "react";
import {Link} from "react-router-dom"
class Navbar extends React.Component{
render (){
    return (<>
    <nav className="navbar navbar-expand-lg  bg-dark"> 
    <div className="navbar-brand">Navbar</div>
    <div className="ml-auto" >
        <ul className="navbar-nav">
            <li className="nav-list"> <Link className="nav-link" to="./home">Home</Link></li>

        </ul>
    </div>

    </nav>
    </>)
}
}
export default Navbar