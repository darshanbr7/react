import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    eid="101"
    name="darshan"
render(){
    return <>
    <div> hello gm</div>
    <hr />
    <CompB id={this.eid} name={this.name} />
    </>
}
}
export default CompA