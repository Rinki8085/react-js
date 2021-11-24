import React,{Component} from "react";
import {withRouter} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './placeorder.css';

const url = "https://zomatoajulypi.herokuapp.com/menuItem";
const PostUrl = "https://zomoapp.herokuapp.com/placeOrder";

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            details:'',
            hotel_name:this.props.match.params.restName,
            amount:0,
            name:'',
            phone:0,
            address:'',
            email:'',
            status:'pending'
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(PostUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/viewOrderApi'))
    }

    renderItems = (data) => {
        if(data){
           return data.map((item) => {
                return(
                    <>
                    <div className="menu card" >
                        <div className="card-image" key={this.menu_id}>
                            <img src={item.menu_image} alt="menuImage"/>
                        </div>
                        <div className="card-body">
                            <h4>{item.menu_name}</h4>
                            <p><span className="badge badge-success">{item.menu_type}</span></p>
                            <p>Rs. {item.menu_price}</p>
                        </div>
                    </div>
                    </>
                )
            })
        }else{
            return(
                <div>
                    <div className="spinner-border text-muted"></div>
                    <div className="spinner-grow text-muted"></div>
                    <div className="spinner-border text-success"></div>
                    <div className="spinner-grow text-success"></div>
                </div>
            )
        }
    }   

    render(){
        return(
            <>
                <Header/>
                <div className="container" key={this.state.amount}>
                    <br/>
                    <div className="card">
                        <div className="card-heading" style={{backgroundColor:'powderblue'}}>
                            <h2 style={{Color:'midnightblue',fontWeight:'bold',margin:'8px 8px'}}>Your Order from {this.props.match.params.restName}</h2>
                        </div>
                       
                        <div className="card-body">
                            {this.renderItems(this.state.details)}
                        </div>
                        <div style={{marginLeft:'10px',color:'maroon'}}><b><h3> Total Price : {this.state.amount}</h3></b></div>
                    </div>    
                    <form className="form row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label><b>Name</b></label>
                                <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label><b>Email</b></label>
                                <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label><b>Phone</b></label>
                                <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label><b>Address</b></label>
                                <input className="form-control" name="address" value={this.state.address} onChange={this.handleChange}/>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-success" onClick={this.handleSubmit}>Checkout</button>
                            </div>   
                        </div>   
                    </form>       
                </div>
                <Footer/>
            </>
        )
    }

    componentDidMount(){
        var menuItem = sessionStorage.getItem('menu');
        console.log("menuItem",menuItem)
        var orderId = []
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => 
        { 
            /*
            data.map((item) =>{
                Totalprice = Totalprice+Number(item[0].menu_price)
            })

            data.map((item) => {
                Totalprice = Totalprice+parseInt(item.menu_price)            
            */
            var Totalprice = 0;
            data.map((item) =>{
                Totalprice = Totalprice+Number(item.menu_price)
                //Totalprice = Totalprice+Number(Number(menuItem).menu_price)
                console.log("totalprice",Totalprice)
                return 'ok'
            }) 
            this.setState({details:data,amount:Totalprice})
        })
    }
}

export default withRouter(PlaceOrder);