import React from "react";

const ViewOrder = (props) => {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr style={{color:'black'}}>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.amount}</td>
                        <td>{item.status}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div>
            <br/><center><h2>Orders</h2></center><br/>
            <div className="container">
                <table className="table" style={{border:'1px solid black'}}>
                    <thead style={{backgroundColor:'black',color:"white"}}>
                        <tr>
                            <th style={{backgroundColor:'grey',color:'white'}}>Id</th>
                            <th>Rest Name</th>
                            <th>Name</th>
                            <th>Phone no.</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(props)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewOrder;