import React from "react";
class Product extends React.Component{
    state={
        name:"realme C31 (Dark Green, 32 GB)  (3 GB RAM)",
        Image:"https://rukminim1.flixcart.com/image/832/832/l1dwknk0/mobile/p/r/0/-original-imagcyj2prahc4pk.jpeg?q=70",
        quntity:1,
        price:13999
    }
    
    incr=()=>{
        this.setState({quntity:this.state.quntity+1})
         
    }
    decr=()=>{
        this.setState({quntity:this.state.quntity-1})
        if(this.state.quntity<1){
           
            
        }
    }
    render(){
        return <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-4">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th> Name</th>
                                <th> Image</th>
                                <th> price</th>
                                <th> Quality</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.name}</td>
                                 <td><img src={this.state.Image} alt="" height="100px" /></td>
                                 <td>{this.state.price}</td>
                                 <td><i className="fa fa-minus-circle" onClick={this.decr}></i>{this.state.quntity}<i className="fa fa-plus-circle" onClick={this.incr}></i></td>
                                 <td>{this.state.price*this.state.quntity}</td>
                            </tr>
                            <tr>
                                <td>{this.state.name}</td>
                                 <td><img src={this.state.Image} alt="" height="100px" /></td>
                                 <td>{this.state.price}</td>
                                 <td><i className="fa fa-minus-circle" onClick={this.decr}></i>{this.state.quntity}<i className="fa fa-plus-circle" onClick={this.incr}></i></td>
                                 <td>{this.state.price*this.state.quntity}</td>
                            </tr>
                            <tr>
                                <td>{this.state.name}</td>
                                 <td><img src={this.state.Image} alt="" height="100px" /></td>
                                 <td>{this.state.price}</td>
                                 <td><i className="fa fa-minus-circle" onClick={this.decr}></i>{this.state.quntity}<i className="fa fa-plus-circle" onClick={this.incr}></i></td>
                                 <td>{this.state.price*this.state.quntity}</td>
                            </tr>
                            <tr>
                                <td>{this.state.name}</td>
                                 <td><img src={this.state.Image} alt="" height="100px" /></td>
                                 <td>{this.state.price}</td>
                                 <td><i className="fa fa-minus-circle" onClick={this.decr}></i>{this.state.quntity}<i className="fa fa-plus-circle" onClick={this.incr}></i></td>
                                 <td>{this.state.price*this.state.quntity}</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
              </div>
        </div>
        </>
    }

}
export default Product