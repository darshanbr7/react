import React from "react";
import { useState} from "react"
const U1 =()=>{
      const[count,setCount]= useState(0);
      
      function increment(){
        setCount(count+1)
      }
      function decrement(){
        setCount(count-1)
      }
    return(
        <>
        <button onClick={increment}>+</button>
        <h4>count is {count}</h4>
        <button onClick={decrement}>-</button>
       
        </>
    )
}
export default U1