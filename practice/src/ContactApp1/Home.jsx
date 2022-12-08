import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Details from './Details'
import List from './List'

const Home = () => {
    let[state,stState]=useState([])
    let[view ,stView]=useState({})
  
    let Handler=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (respone)=>{
                    stState(respone.data)
            }
        ).catch()
    }
    useEffect(()=>{
        Handler()
    },[])
    let click=(contact)=>{
       stView(contact)
    }
  return (
    <>
    <pre>{JSON.stringify(state)}</pre>
    <pre>{JSON.stringify(view)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-8">
                <Details  state={state}  click={click}/>
            </div>
            <div className="col-4">
                <List  view={view} />
            </div>
        </div>
    </div>

    </>
  )
}

export default Home