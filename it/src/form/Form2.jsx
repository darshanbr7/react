import React, { Component } from 'react'

class Form2 extends Component {
state={
   user_name:"" ,
   password:" "
    }
 Username=(event)=>{
        this.setState({user_name:event.target.value})
    }
    PAssword=(event)=>{
        this.setState({password:event.target.value})
    }
    Prevent=(event)=>{
        alert(`${this.state.user_name}  ${this.state.password}`)
        event.preventDefault()
    }
  render() {
    return (
      <>
      <center>
        <h2> login page</h2>
      <form onSubmit={this.Prevent}>
        <label> user_name:</label>
        <input type="text"  value={this.state.user_name} onChange={this.Username}/> <br/> <br />
        <label > Password :</label>
        <input type="text" value={this.state.password} onChange={this.PAssword}/> <br/> <br />
        <input type="submit" value=" login"  />
      </form>
      </center>
      </>
    )
  }
}

export default Form2