import React from 'react'
import Axios from "axios"

const Axis = () => {
    let [value,setValue]=React.useState(null)
    React.useEffect(()=>{
        Axios.get("http://localhost:8080/api/get")
        .then( (response)=>{ setValue(response.data)})
        .catch(()=>{console.log("error")})

    })
  return (
    <div>{value}</div>
  )
}

export default Axis