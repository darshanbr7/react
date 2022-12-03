import axios from 'axios'
import React, { Component } from 'react'

export class AxiosFetch extends Component {
  constructor(props){
    super(props)
    this.state={
      user:[]
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(
      (recuest)=>{
        this.setState({user:recuest.data})
      }
    ).catch((err)=>{
      console.log(err)
    })
  }
  render() {
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th> id</th>
                    <th> name</th>
                    <th> email</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.user .length>0 ? <>
                    {
                      this.state.user.map((user)=>{
                        return (<>
                        <tr>
                          <td> {user.id}</td>
                          <td> {user.name}</td>
                          <td> {user.email}</td>
                        </tr>
                        </>)
                      })
                    }
                    </> : null
                  }
                </tbody>
             
              </table>
            }
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default AxiosFetch