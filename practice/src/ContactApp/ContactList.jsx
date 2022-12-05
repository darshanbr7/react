import React, { Component } from 'react'

 class ContactList extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body bg-primary">
            <ul className='list-group  '>
          <li className='list-group-item '>{this.props.View.id}</li>
          <li className='list-group-item'>{this.props.View.name}</li>
          <li className='list-group-item'>{this.props.View.email}</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default ContactList