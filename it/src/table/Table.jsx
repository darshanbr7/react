import React from "react";
import Data from "./data";
class Table extends React.Component{
    render(){
        return<>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <table className=" table table-hover">
                        <thead>
                            <tr >
                                <th> Id</th>
                                <th> Name</th>
                                <th> email</th>
                                <th> gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data.map((emp,index)=>{
                                    return <tr key={index}>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.gender}</td>
                                     
                                    </tr>
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
        </>
    }

}
export default Table