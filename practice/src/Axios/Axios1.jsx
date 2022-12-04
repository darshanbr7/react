import axios from "axios";
import React from "react";
import axios_Data from "./Axios_Data"
class Axios1 extends React.Component{
    constructor ( props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(()=>{

        })
        .catch(()=>{})
    }
render(){
    return (<>
    <div className="component">
        <div className="row">
            <div className="col-7">
                < axios_Data />
            </div>
        </div>
    </div>
   
    </>)
}
}
export default Axios1