import React, { Component } from 'react'

 class ContactDetails extends Component {

    view_Data=(contact)=>{
        this.props.show_Data(contact)
    }

  render() {
    return (
      <>
      <h1> Contact List</h1>
      <table className='table table-hover'>
        
        <thead className='bg-success'>
            <tr>
                <th >Id</th>
                <th >name</th>
                <th >Details</th>
            </tr>
        </thead>
        <tbody className=' bg-info'>
            {
                this.props.Details.map((contact)=>{
                    return(<>
                    <tr  key={contact.id}   onMouseOver={this.view_Data.bind(this,contact)}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                    </tr>
                    </>)

                })
            }
        </tbody>
         </table>
      </>
    )
  }
}

export default ContactDetails