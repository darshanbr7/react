import React from 'react'

const List = (props) => {
  return (
   <>
   <div className="card">
    <div className="card-headder">
        Contact List
    </div>
    <div className="card-body">
        <ul className='list-group'>
            <li className='list-group-item'>{props.id}</li>
        </ul>
    </div>
   </div>

   </>
  )
}

export default List