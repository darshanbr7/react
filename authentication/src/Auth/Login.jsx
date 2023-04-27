import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 mt-4">
                <center>
                  <h2> Login Page</h2>
                </center>

                <form >
                   <div className='form-froup'>
                    <label htmlFor=""> UserName</label>
                    <input type='text' className='form-control my-2'/>
                   </div>
                   <div className='form-froup'>
                    <label htmlFor=""> Password</label>
                    <input type='text' className='form-control my-2'/>
                   </div>
                   <center>
                    <button   className='btn btn-danger mt-3'> Login</button>
                   </center>
                   <p> new User?  <Link to="/SignUp"> SignUp</Link></p>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login