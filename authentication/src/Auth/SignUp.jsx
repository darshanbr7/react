import React from 'react' 
import axios from "axios"

const SignUp = () => {
   const[ check,setCheck]= React.useState(false)
   const[ username,setUsername]= React.useState("")
   const[ email,setEmail]= React.useState("")
   const[ password,setPassword]= React.useState("")
    let submit=async(e)=>{
            e.preventDefault()
        try{
                await axios.post("http://localhost:8080/api/signup",{
                    username:username,
                    email:email,
                    password:password
                })
                alert("Account Created !!!")
        }catch(e){
            alert(e)
        }
       
    }

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-4">
                <form  onSubmit={submit}>
                    <center>
                       <h2> Register Page</h2>
                    </center>
                    <div className="form-group mt-3">
                        <label> USERNAME :</label>
                        <input type='text' className='form-control' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label> EMAIL :</label>
                        <input type='text' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label> PASSWORD :</label>
                        <input type='text' className='form-control' value={ password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <input type="checkbox"  onChange={(e)=>{setCheck(e.target.checked)}} />
                    <p> Pleace Accept Terms And Condition</p>
                    <center>
                        <button className='btn btn-primary'  disabled={!check}> REGISTER</button>
                    </center>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignUp