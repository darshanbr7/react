import React from 'react'

const F2 = (props) => {
    let Showdetails=(props)=>{
      console.log("show" +props.user)
    }
    
  return (
    <div>
        {props.user.map((p)=>{
          return <li key={p.id}>{p.id}  <button onClick={()=>{Showdetails(p)}}> show</button></li>})}
    </div>
  )
}

export default F2