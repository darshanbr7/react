

//import Movie from "./Movie"
//import Cls1 from "./Cls1"
//import Car from "./Car"
//import CompA from "./c-c/CompA"
//import FuncA from "./f-f/FuncA"
//import FucnA from "./f-f/FuncA"
//import CompA from "./c_f/CompA"
// import  Data1 from "./f-c/Data1"
//import Data1 from "./func-class/Data1"
//import State1 from "./state/State1"
//import Bootstrap from "./Bootstrap"
//import Flip from "./product/Flip"
//import Message from "./bind/Message"
//import Table from "./table/Table"
//import Regboot  from "./form/Reg-boot"
//import AxiosFetch from "./Axios/AxiosFetch"
//import Contact_app from "./Contact_app/Contact_details"
//import Navbar1 from "./Navbar/Navbar1"
import Home from "./Navbar/Home"
import About from "./Navbar/About"
import Service from "./Navbar/Service"
import {  BrowserRouter as Router,Routes,Link,Route} from "react-router-dom"
let App=()=>{
    
   return (  <>
   <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/Service' element={< Service />}></Route>
          </Routes>
          </div>
       </Router>
       </>)
}
   
 export default App