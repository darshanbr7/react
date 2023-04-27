import React from 'react'
import AuthNavbar from './Navbar/AuthNavbar'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Auth/Login'
import SignUp from "./Auth/SignUp"
const App = () => {
  return (
    <>
    <BrowserRouter>
        <AuthNavbar/>
            <Routes>
                <Route  path='/Login' element={<Login/>}/>
                <Route  path='/SignUP' element={<SignUp/>}/>
            </Routes>
    </BrowserRouter>
    </>
  )
}

export default App