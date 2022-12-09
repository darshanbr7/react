import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Product = () => {
   
    let[users,stUsers]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
        stUsers(response.data)
        }).catch()
    },[])
  return (
    <React.Fragment>
        <pre>{JSON.stringify(users)}</pre>
        <div className="container">
                    <div className="row">
                    {
            users.map((user)=>{
                return(<>
                
                        <div className="col-3">
                            <div className="card mt-5">
                                <div className="card-headder bg-success  ">
                                    <p className='justify-content-center'>items list</p>
                                   <div className="row">
                                    <div className="col-3"></div>
                                    <div className="col-4">
                                        
                                    <img src={user.image} alt="" height="100px" />
                                    </div>
                                   </div>
                                </div>
                                <div className="card-body bg-warning">
                                    <ul className='list-group'>
                                        <li className='list-group-item bg-info'><h3>Id {user.id}</h3></li>
                                        <li className='list-group-item  bg-info'>{user.category}</li>
                                        <li className='list-group-item  bg-info'>{user.price}</li>
                                        <li className='list-group-item  bg-info'>{user.rating.rate}</li>
                                        <li className='list-group-item  bg-info'>{user.count}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                   
                </>)
            })
        }
                    </div>
       
         </div>
 
    </React.Fragment>
  )
}

export default Product