import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Clock = () => {
  let[time ,stTime]=  useState(new Date().toLocaleTimeString())
    useEffect(()=>{
        setInterval(()=>{
        stTime(new Date().toLocaleTimeString())
        },[1000])
         return ()=>{
            console.log("hello server")
         }
},[])
  return (
    <>
    <h1> {time}</h1>
    
    </>
   
  )
}

export default Clock