import React from 'react'
import F2 from './F2'
const F1 = () => {
  let user=[{id:101,name:"darshan",palce:"mandya"},
  {id:102,name:"muni",palce:"mandya"},
  {id:103,name:"chirag",palce:"mandya"},]
  return (<>
   <F2 user={user}/>
    </>
  )
}

export default F1