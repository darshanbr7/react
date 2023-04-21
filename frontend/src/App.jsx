import React from 'react'
import Registration from './Register/Registration'
import Navbar1 from './Navbar/Navbar'
import {  
  BrowserRouter ,  
  Routes,  
  Route,    
 
}   
from 'react-router-dom';  
import Login from './Register/Login';
const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Navbar1/>
       <Routes>
        <Route path='/Registration' element={< Registration/>} />
        <Route path='/Login' element={< Login/>} />
       </Routes>
       </BrowserRouter>
      
    </div>
  )
}

export default App