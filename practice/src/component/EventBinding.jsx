import React, { Component } from 'react'

 class EventBinding extends Component {
    state={
        message:"hello"
    }
    clickHandle=(value)=>{
        this.setState(()=>{
           this.state.message= "hello react"
        })
    
    }
   clickHandle =this.clickHandle.bind(this)
  render() {
    return (
      <>
      <p>{this.state.message}</p>
      <button onClick={this.clickHandle.bind(this,"click succesfully")}> click</button>
      <button onClick={this.clickHandle.bind(this," login succesfully")}> login</button>
      <button onClick={this.clickHandle}  value="logout succesfuly"> logout</button>
      </>
    )
  }
}

export default EventBinding
/* in bindining it binds the associative value to the curresponding value */
