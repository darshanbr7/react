import axios from 'axios'
import React, { Component } from 'react'
import ContactDetails from './ContactDetails'
import ContactList from './ContactList'

 class ContactHome extends Component {
  constructor(){
    super()
    this.state={
      users:[],
      view:{}
    }
  }
  show_Data=(contact)=>{
    console.log(contact)
    this.setState({view:contact})
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
     this.setState({users:response.data})
    }).catch()
  }
  render() {
    return (
     <>
     <div className="container">

     
      <div className="row">
        <div className="col-md-8">{
          this.state.users.length >0? <>{
          <ContactDetails  Details={this.state.users}  show_Data={this.show_Data}  />}
          </> :null
        }

        </div>
        <div className="col-md-4">{
      
          Object.keys(this.state.view).length >0  ? <ContactList  View={this.state.view}  /> :null
    

        }

        </div>
      </div>
     </div>
     </>
    )
  }
}

export default ContactHome