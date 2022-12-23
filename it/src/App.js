

// //import Movie from "./Movie"
// //import Cls1 from "./Cls1"
// //import Car from "./Car"
// //import CompA from "./c-c/CompA"
// //import FuncA from "./f-f/FuncA"
// //import FucnA from "./f-f/FuncA"
// //import CompA from "./c_f/CompA"
// // import  Data1 from "./f-c/Data1"
// //import Data1 from "./func-class/Data1"
// //import State1 from "./state/State1"
// //import Bootstrap from "./Bootstrap"
// //import Flip from "./product/Flip"
// //import Message from "./bind/Message"
// //import Table from "./table/Table"
// //import Regboot  from "./form/Reg-boot"
// //import AxiosFetch from "./Axios/AxiosFetch"
// //import Contact_app from "./Contact_app/Contact_details"
// //import Navbar1 from "./Navbar/Navbar1"
// import Home from "./Navbar/Home"
// import About from "./Navbar/About"
// import Service from "./Navbar/Service"
// import Navbar1 from "./Navbar/Navbar1"
// import Login from "./Hook/Form/Login"
// import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Clock from "./Hook/Clock"
// let App=()=>{
    
//    return (  <>

//         <Router>
//           < Navbar1 />
//           <Routes>
//             <Route path="/home"  element={<Home  />}   /> 
//             <Route path="/about"  element={<About />}   /> 
//             <Route path="/service"  element={<Service />}   /> 
//             <Route path="/Clock"  element={<Clock />}   /> 
//             <Route path="/Login"  element={<Login />}   /> 
//           </Routes>
//         </Router>
//        </>)
// }
   
//  export default App
//  import React from "react";
//  import Navbar from "./Navbar1/Navbar"
//  import Home from "./Navbar1/Home"
//  import Login from "./Navbar1/Login";
//  import {BrowserRouter as  Router ,Routes,Route} from "react-router-dom"
//  let App= ()=>{
//   return (<>
//     <h1> App component</h1>
//     <hr />
//     <Router>
//     <Navbar />
//     <Routes>
//      <Route  path="/Home" element={<Home />} />
//      <Route  path="/Login" element={<Login />} />
//     </Routes>
//     </Router>
    
//   </>)

//  }
//  export default App
import React from 'react'
import Message from './redux/message/Message'
import {Provider} from "react-redux"
import {store} from "./redux/store"

const App = () => {
  return (
    <div>
      <Provider store={store}>
      < Message />
      </Provider>
    </div>
  )
}

export default App
// import React from 'react'
// import { Main} from "./redux-Practice/Main"
// import { Provider } from 'react-redux'
// import { Store } from './redux-Practice/store'

// const App = () => {
//   return (
//     <div>
//       <Provider store={Store} >
//       <Main />
//       </Provider>
     
//     </div>
//   )
// }

// export default App