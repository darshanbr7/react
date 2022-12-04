import React from "react";
class Navbar extends React.Component{
render (){
    return (<>
    <nav className=" navbar  navbar-dark bg-dark">
        <p> Navbar</p>
    <div className="ml-auto">
        <ul className="navbar-nav text-white">
           <li className="navbar-item text-white"> <a href="./" className="">Home</a></li>
        </ul>
        
    </div>
    </nav>
    </>)
}
}
export default Navbar