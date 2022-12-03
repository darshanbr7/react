import React from "react";
import Child  from "./Child";
class Parent extends React.Component{
    constructor(props){
        super( props)
        this.state={
            name:"parenet"
        }
     this.getMethod=this.getMethod.bind(this)
    }
    getMethod=()=>{
        console.log("succesfully worked")
         alert(` hello ${this.state.name}`)
    }

    render(){
        return (
            <>
        <Child   getHandler={this.getMethod}/>
            </>
        )
    }

}
export default Parent