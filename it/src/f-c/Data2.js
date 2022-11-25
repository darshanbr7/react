
import React from "react";
class Data2 extends React.Component{
    render( props){
        return <>
        <h1> class</h1>
        <hr />
        <p> {JSON.stringify(this.props)}</p>
         <h3> name is:{this.props.name}</h3>
         <h3>age is :{this.props.arr[0]} </h3>
         <h3> from :{this.props.info.vilage}</h3>
        </>
    }

}
export default Data2