import React from "react";
import {gmAction, gnAction} from "./main.action"
import {useDispatch ,useSelector} from "react-redux"
let Main =()=>{
    let Message=useSelector((state)=>{
        return state.Message
    });
    let dispatch=useDispatch();
   
   let gmHandler=()=>{
    dispatch(gmAction())
   }
   let gnHandler=()=>{
    dispatch(gnAction())
   }
    return(
        <div>
            <h1>Message:{Message}</h1>
            <h1>{JSON.stringify(Message)}</h1>
            <button onClick={gmHandler}> GM</button>
            <button onClick={gnHandler}> GN</button>

        </div>
    )

}
export {Main}