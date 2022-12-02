import React, { Component } from 'react'

 class Regboot extends Component {
    state={
        username:" ",
        email:" ",
        dob:" ",
        password:""
    }
    updateHandler1=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler=(event)=>{
        console.log(this.state)
         event.preventDefault()
    }
  render() {
    return (
      <>
      <div className="container">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-6">
                <form   onSubmit={this.submitHandler}>
                    <pre> {JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-9"><h1> Registratin Form</h1></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> username:</label>
                        <input type="text" value={this.state.username} name="username"className="form-control" onChange={this.updateHandler1}  />
                    </div>
                    <div className="form-group">
                   <label>email :</label>
                   <input type="text " value={this.state.email} name="email" className="form-control" onChange={this.updateHandler1}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> dob:</label>
                        <input type="date"  value={ this.state.dob} name="dob" className='form-control' onChange={this.updateHandler1}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> password</label>
                        <input type="text" value={this.state.password} name="password" className='form-control' onChange={this.updateHandler1} />
                    </div>
                    <input type="submit" value="Registration" className='btn btn-info' />

                </form>
            </div>
        </div>
      </div>
      </>
    )
  }
}

export default Regboot