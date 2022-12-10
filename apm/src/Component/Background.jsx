import React from "react";

const myStyle={
    backgroundImage: 
"url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg')",
    height:'100vh',
  
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}
function  BackgroundImage() {
    return (
      <React.Fragment>
        <div style={myStyle}>
        <h1 style={{color:"red"}}> Hello World</h1>
       </div>
        
      </React.Fragment>
    );
  }
  export default BackgroundImage