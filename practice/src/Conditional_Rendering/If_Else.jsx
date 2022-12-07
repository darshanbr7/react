import React, { Component } from 'react'

class If_Else extends Component {
    constructor(props){
        super(props)
        this.state={
            islogin:false
        }
    }
  render() {
    if(this.state.islogin){
        return <> Login As a Admin</>
    }
    else {
        return <>
        Login As a guest
        </>
    }
    // return (
    //   <div>If_Else</div>
    // )
  }
}

export default If_Else