import React   from "react";
class Form extends React.Component{
    state={
        email:"",
        password:""
    }

    render(){
        return <div>
        <div className="container">
           
            <div className="row">
                <div className="col-3"></div>
                <div className="col-4">
                    <form action="">
                
                        <h1> login form</h1>
                        <div className="form-group">
                        <label > email:</label>
                        <input type="text" className=" form-control" /> <br /> <br /></div>
                        <div className="form-group">
                        <label > password:</label>
                        <input type="text"  className=" form-control"/> <br /> <br /></div>
                        <input type="submit"  value="login"/>
                    </form>
                </div>
            </div>
        </div>
        </div>
    }
}
export default Form