import React from 'react'
import { useState } from 'react'
// import { json } from 'react-router-dom'

const Login = () => {
   let[form,stForm]=useState({email:"",password:""})
 
   
  return (
    <><pre>{JSON.stringify(form)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-4">
                <div className="card mt-5">
                    <div className="card-headder bg-warning">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col">
                             <h1>   Login Page </h1>  
                            </div>
                        </div>
                    </div>
                    <div className="card-body bg-info">
                        <form  onSubmit={(event)=>{
                            event.preventDefault()
                        }}>
                           < div  className='form-group'>
                            <input type="text" name="email" onChange={(event)=>{
                                stForm({...form,[event.target.name]:event.target.value})
                            }} placeholder='Email' className='form-control'/>
                           </div>
                           <div className='form-group'>
                            <input type="text" name="password"   onChange={(event)=>{
                                stForm({...form,[event.target.name]:event.target.value})
                            }} id="" placeholder='Password' className='Form-control' />
                           </div>
                           <button className='btn btn-warning  ml-5 ml-5'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login