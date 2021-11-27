import React,{Component} from "react";
import {withRouter} from 'react-router-dom';

const url = "https://zomatoajulypi.herokuapp.com/menuItem";
const PostUrl = "https://zomoapp.herokuapp.com/placeOrder";

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
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
        .then(console.log("payment gateway"))
    }

    render(){
        return(
            <>
                <div className="container" key={this.state.amount}> 
                    <div className="card"> 
                        <div className="card-heading">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form method="POST" action="https://localhost:4000/paynow">
                                <div className=" row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label><b>Email</b></label>
                                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                                        </div> 
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label><b>Password</b></label>
                                            <input className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>     
                                <div className="row">
                                    <div className="col-md-4">
                                        <button className="btn btn-success" onClick={this.handleSubmit} type="submit">Checkout</button>
                                    </div>   
                                </div>
                            </form>
                        </div>
                    </div>    
                </div>
            </>
        )
    }
}

export default withRouter(Login);