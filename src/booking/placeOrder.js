import React,{Component} from "react";
import Header from '../Header';
import './placeorder.css'

const url = "https://zomatoajulypi.herokuapp.com/menuItem";

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }

    renderItems = (data) => {
       
        if(data){
           return data.map((item) => {
                return(
                    <>
                    <div className="menu card" style={{}}>
                        <div className="card-Image">
                            <img src={item.menu_image} style={{width:'220px',height:'120px'}} alt="menuImage"/>
                        </div>
                        <div className="card-body">
                            <h4>{item.menu_name}</h4>
                            <p>Rs. {item.menu_price}</p>
                        </div>
                    </div>
                    </>
                )
            })
        }
    }

    render(){
        return(
            <>
                <Header/>
                <div className="container">
                    <br/>
                    <div className="card">
                        <div className="card-heading" style={{backgroundColor:'powderblue'}}>
                            <h2 style={{Color:'midnightblue',fontWeight:'bold',margin:'8px 8px'}}>Your Order from {this.props.match.params.restName}</h2>
                        </div>
                       
                        <div className="card-body">
                            {this.renderItems(this.state.details)}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        var menuItem = sessionStorage.getItem('menu');
        var orderId = []
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'applicationn/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => 
        {
            this.setState({details:data})
        })
    }
}

export default PlaceOrder;