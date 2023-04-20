import React from 'react'
import Axios from "axios"

const Registration = () => {
        const[userName,setUserName] =React.useState("")
        const[email,setEmail] =React.useState("")
        const[password,setPassword] =React.useState("")

        async function save( e){
          e.preventDefault();
          try{
            await Axios.post("http://localhost:8080/register/save",
            {
                userName:userName,
                email:email,
                password:password
            }
            
            )
            alert("data inserted succesfully")
          }
          catch(error){
            alert(error)
          }
        }


  return (
   <>
   <div className="container mt-4">
    <div className="card">
        <div className="card-body">
            <form action="">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2> Register Page</h2>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <div className="form-group">
                <label > UserName :</label>
                <input type="text" id=""  className='form-control' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>
                <div className="form-group">
                <label > Email :</label>
                <input type="text" id=""  className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="form-group">
                <label > Password :</label>
                <input type="text" id=""  className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <button className='btn btn-primary' onClick={save}> Submit</button>
                    </div>
                </div>

            </div>
            </div>
            </form>
        </div>
    </div>

   </div>
   </>
  )
}

export default Registration