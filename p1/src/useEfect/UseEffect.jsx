import React from "react";
import {useState,useEffect} from "react";
const UseEffect=()=>{
       const[count,setCount]=useState(0);
    useEffect(()=>{
        
    })
    return(<>
     <button onClick={()=>setCount(count+1 )}>Click</button>
    </>)
}
export default UseEffect
