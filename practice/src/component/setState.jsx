import React, { Component } from 'react'

 class SetState extends Component {
    
    state={ 
        message:"hello everyone"
      
    }
    updateHandler=()=>{
       this.setState({message:"hello gays"})
       
    }
  render() {
    return (
     <>
     <h1> {this.state.message}</h1>
     <button onClick={this.updateHandler}> submit</button>
     </>
    )
  }
}

export default SetState