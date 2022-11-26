// class
import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    name="darhan"
    id=101
    info={
        from:"mandya",
        pin:571425
    }
    color=["red" ,"green"]

    render(){
        return (
            <>
            <h1> class</h1>
            <hr />
            <CompB  name={this.name}  id={this.id} info={this.info} color={this.color}/>
            </>
        )
    }

}
export default CompA