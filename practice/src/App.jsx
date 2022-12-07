// // import React from 'react';
// // import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// // import Navbar from './Navbar/Navbar'
// // import Home from "./Navbar/Home"

// // const App = () => {
// //   return (
// //     <>
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path='/home'  element={<Home />}  />
// //       </Routes>
// //     </Router>
// //     </>
// //   )
// // }

// // export default App
// import React, { Component } from 'react'
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Navbar from './Navbar/Navbar'
// import Home from "./Navbar/Home"
//  class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path='/home'  element={<Home />} />
//         </Routes>
//       </Router>
//     )
//   }
// }

// export default App
import React from 'react'
import If_Else from './Conditional_Rendering/If_Else'
import Element_Variable from './Conditional_Rendering/Element_Variable'

const App = () => {
  return (
    <>
    <h1> Conditional rendering</h1>
    <hr />
    < If_Else />
    <hr />
    <Element_Variable />
    
    </>
    
  )
}

export default App