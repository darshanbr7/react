import React from "react";
class CompB extends React.Component{
    
     render(){
        return <>
        <p>hello gm</p>
        <hr />
        <p>{JSON.stringify(this.props)}</p>
        <p> name is:{this.props.name}</p>
        <p> id is :{this.props.id}</p>
        </>
     }

}
export default CompB