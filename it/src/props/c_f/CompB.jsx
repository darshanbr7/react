 // function
 let CompB=(props)=>{
    return (<>
        <h1> function</h1> 
        <hr />
        <p>{JSON.stringify(props)}</p>
        <h3> name is:{props.name}</h3>
        <h3> id is:{ props.id} </h3>
        <h3> from:{props.info.from}</h3>
        <h3> colors:{props.color[0]}</h3>
        </>
    )

 }
 export default CompB