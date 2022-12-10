import React from 'react' 

import Home from './Component/Home'
import {BrowserRouter as  Router ,Routes,Route} from "react-router-dom"
import Login from './Component/Login'


const App = () => {
  return (
  <React.Fragment>
 <Router>
    <Home />
    <Routes>
     <Route  path="/Home" element={<Home />} />
     <Route  path="/Login" element={<Login/>} />
     
    </Routes>
    </Router>
  </React.Fragment>
  )
}

export default App