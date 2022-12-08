import React from 'react'

const Details = (props) => {
     let click=(contact)=>{
        props.click(contact)
     }
  return (
    <table className='table table-hover'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                props.state.map((contact,index)=>{
                    return(<React.Fragment>
                    <tr onClick={click} key={index}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                    </tr>
                    </React.Fragment>
                    )
                })
            }
        </tbody>
       

    </table>
    
  )
}

export default Details