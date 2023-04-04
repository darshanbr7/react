import React from "react";


let ArrayDisplay=()=>{
    let a=[10,11,12,13,14,15,16,17,19]
   
    // normal iteraton using for loop
   /*  for(let i=0;i<a.length;i++){
        result.push(<li>{a[i]}</li>)
    } */

    // iterating using map method
    //a.map((ele)=>{result.push(<li>{ele}</li>)})

    // using foreach method
   // a.forEach((ele)=>{result.push(<li>{ele}</li>)})
  
   /* let result=a.map((ele)=>{
   return <li>{ele}</li> 
  })*/
    return(
        <>
      
        <p>{
        a.map((ele)=>{
            return <li>{ele}</li>
        })
        }</p>
     
        </>)
}
export default ArrayDisplay;