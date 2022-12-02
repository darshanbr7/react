import React, { Component } from 'react'

class State extends Component {
    state={
        message:"hello React"
    }
  render() {
    return (
        <>
        <h1>{this.state.message}</h1>
        </>
      
    )
  }
}

export default State

/* state's are object . they are declared inside a component */