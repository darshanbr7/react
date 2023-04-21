import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="container">
        <div className="row mt-4">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <h2> Login Page</h2>
                <div className="card mt-4">
                    <form action="">
                        <div className="form-group mt-2">
                          <h5 className='ml-4'>  <label htmlFor=""> EMAIL</label></h5>
                            <input type="text"  className='form-control'  />
                        </div>
                        <div className="form-group">
                           <h5 className='ml-4'> <label htmlFor=""> PASSWORD</label></h5>
                            <input type="text"  className='form-control '  />
                        </div>
                        <center>
                            <button className='btn btn-primary mb-3'>Login</button>
                        </center>

                        <p>Don't have an Account? <Link to="/Registration"> Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login