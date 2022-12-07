import React from 'react'
import { useRef } from 'react'

const Login = () => {
    useRef()

  return (<>

  <div className="container">
    <div className="row">
        <div className="col-3"></div>
        <div className="col-5">
            <div className="card bg-primary">
                <div className="card-headder content-justify-center ">
                  <h1 className='content-justify-center'> Login Page</h1> 
                </div>
                <div className="card-body">
                    <div className='from-group'>
                        <input type="text" className='form-control' placeholder='User Name'/>
                    </div> <br/>
                    <div className='from-group'>
                        <input type="text" className='form-control' placeholder='Password'/>
                    </div>
                    <br/>
                    <div className='from-check'>
                        <input type="checkbox" className='form-chech-input' /> Plece accept terms and condition
                    </div><br />
                    <input type="button" value="submit" className='btn btn-success' disabled />
                </div>
            </div>
        </div>
    </div>
  </div>
  </>)
}

export default Login