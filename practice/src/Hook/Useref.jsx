import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Useref = () => {
let btnCheck= useRef(null)
let [state,Upstate]=useState(false)
   let Checked=(event)=>{
    Upstate(event.target.checked)
    if(event.target.checked===true){
        btnCheck.current.disabled=false
    }
    else{
        btnCheck.current.disabled=true
    }
   }
  return (
    <>
    <pre>{JSON.stringify(state)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-5">
                <div className="card mt-5">
                    <div className="card-headder bg-warning">
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col">
                             <h3>  Login Form</h3>  
                            </div>
                        </div>
                    </div>
                    <div className="card-body bg-info">
                        <form >
                            <div className='form-group'>
                                <input type="text" placeholder='Email ' className='form-control text-red'/>
                            </div>
                            <div className='form-group'>
                                <input type="text" placeholder='Password' className='form-control'/>
                            </div>
                            <div className='form-check'>
                                <input onClick={Checked} type="checkbox" className='form-input-check'/> Pleace Accept terms and Condition
                            </div>
                            <button className='btn btn-warning ml-5'ref={btnCheck} disabled> Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Useref