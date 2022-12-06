// import React from 'react';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Navbar from './Navbar/Navbar'
// import Home from "./Navbar/Home"

// const App = () => {
//   return (
//     <>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/home'  element={<Home />}  />
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App
import React, { Component } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import Home from "./Navbar/Home"
 class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home'  element={<Home />} />
        </Routes>
      </Router>
    )
  }
}

export default App