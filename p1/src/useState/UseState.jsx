import React from 'react'
import {useState} from "react"

const UseState = () => {
   const[count,setCount]=useState(0);
  return (
    <>
    <button onClick={()=>setCount(count+1)}> Counting Machine</button>
    <h4>you clicked {count} times</h4>
    </>
  )
}

export default UseState