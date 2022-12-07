import React, { Component } from 'react'

 class Element_Variable extends Component {

    constructor (){
        super()
        this.state={
            condition:false
        }
    }
  render() {
     let message 
     if(this.state.condition){
        message=<> Welcome As a admin</>
     } else {
        message=<> Welcome As Guestf</>
     }
    return (
     <> {message} </>
    )
  }
}

export default Element_Variable