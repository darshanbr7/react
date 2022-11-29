
import React from "react";
class Message  extends React.Component{
    state={
        msg:"binding method"
    }
    binding=(value)=>{
        this.setState({msg:value})

    }

    render(){
        return<>
        <p> Message:{this.state.msg}</p>
        <button onClick={this.binding.bind(this,"Login succesfully")}> Login</button>&nbsp;
        <button onClick={this.binding.bind(this,"logout Succesfully")}> Logout</button>

        </>
    }
}
export default Message

/* in react binding helps to  avoids write multiple conditions to perform multple task*/