import React, { Component } from 'react'

class Form1 extends Component {
  state={
    user_name:" ",
    password:" "
  }

  username=(event)=>{
    this.setState({ user_name:event.target.value})
  }
  userpassword=(event)=>{
    this.setState({password:event.target.value})
  }
  hanslesubmit=(event)=>{
    alert(`${this.state.user_name} ${this.state.password}`)
    event.preventDefault()
  }
  render() {
    return ( 
    <>
      <div className="container">
       <div className="row">
         <div className="col-3"></div>
         <div className="col-4">
           <div className="row">
            <div className="col-2"></div>
             <div className="col"> <h2> Login Form</h2></div>
           </div>
         <form onSubmit={this.hanslesubmit}>
          <div className="form-group">
          <label>user_name:</label>
             <input type="text"  className='form-control ' value={this.state.user_name} onChange={this.username} />
            </div>
            <div className="form-group">
             <label> Password :</label>
             <input type="text" className='form-control'  value={this.state.password} onChange={this.userpassword} />
            </div>
            <input type="submit" value="login" />
            </form>
         </div>
       </div>
      </div>
     </>
   )
 }
 
  }


export default Form1