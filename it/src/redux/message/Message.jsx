import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { gmAction, gnAction} from "../redux1/mesage.action"

const Message = () => {
    let dispatch=useDispatch();
   let message=useSelector((state)=>{
    return state.message
   })
     let gmHandler=()=>{
        dispatch(gmAction())
     }
     let gnHandler=()=>{
        dispatch(gnAction())
     }
  return (
    <div>
       <h1>{JSON.stringify(message)}</h1>
       <h1>message:{message.message}</h1>
        <button onClick={gmHandler}> GM</button>
        <button onClick={gnHandler}> GN</button>
    </div>
  )
}

export default Message