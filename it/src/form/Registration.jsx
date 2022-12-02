import React, { Component } from 'react'

 class Registration extends Component {
    state={
        User_name:"",
        Email:"",
        Phone_number:"",
        password:""
    }
    updateHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state)
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log("data submitted successfully")
    }
  render() {
    return (<>
    
    <form onSubmit={this.submitHandler}>
        <pre>{JSON.stringify(this.state)}</pre>
        <label htmlFor=""> User_name:</label>
        <input type="text " value={this.state.User_name} onChange={this.updateHandler} name="User_name"/><br /><br/>
        <label htmlFor=""> Email :</label>
        <input type="text " value={this.state.Email} onChange={this.updateHandler} name="Email"/><br /><br />
        <label htmlFor=""> Phone_number : </label>
        <input type="text " value={this.state.Phone_number} onChange={this.updateHandler} name="Phone_number"/><br /><br />
        <label htmlFor="">password :</label>
        <input type="text " value={this.state.password} onChange={this.updateHandler} name="password"/><br /><br />
        <input type="submit" value="registration"/>
    </form>
    </>)
  }
}

export default Registration