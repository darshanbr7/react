import React from "react"
class Car extends React.Component{
    
    constructor(){
        super()
     this.state={color:"red"}

    }
    render(){
        return <>
        <p> the color of the car is {this.state.color}</p>
        </>
    }
}
export default Car