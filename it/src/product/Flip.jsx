import React  from "react";
class Flip extends React.Component{
    state={
        Image:"https://rukminim1.flixcart.com/image/832/832/l1dwknk0/mobile/p/r/0/-original-imagcyj2prahc4pk.jpeg?q=70"
    }
    render(){
        return<>
        <div className="conatiner">
            <div className="row">
                <div className="col-4">
                    <img src={this.state.Image} alt="" srcset="" height="400px" />
                </div>
               
                <div className="col-5">
                    <h4> realme C31 (Dark Green, 32 GB)  (3 GB RAM)</h4>
                </div>
            </div>
        </div>

        </>
    }

}
export default Flip