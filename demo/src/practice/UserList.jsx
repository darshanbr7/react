// displaying 
import React from 'react'

const UserList = () => {
    let user=[
        {name:"user1"},
        {name:"user2"},
        {name:"user3"},
        {name:"user4"},
]
  return (
    <div>
        {/* <p>{user.length}</p> */}
        <p>{user.map((ele,index)=>{ return <p key={index}>{index+1 +"  " +ele.name}</p>})}</p>
    </div>
  )
}

export default UserList