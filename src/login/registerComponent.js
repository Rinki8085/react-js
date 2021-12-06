import React,{Component} from "react";
import {withRouter} from 'react-router-dom';

const Url = "https://user-login-api.herokuapp.com/api/auth/register";

class Register extends Component{
    constructor(props){
        super(props)

        this.state={
            name:'',
            phone:'',
            email:'',
            password:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(Url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
    }

    render(){
        return(
            <>
                <div className="container" key={this.state.amount}> 
                    <div className="card"> 
                        <div className="card-heading">
                            <h3>Register Yourself</h3>
                        </div>
                        <div className="card-body">
                                <div className="form row">
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
                                            <label><b>Password</b></label>
                                            <input className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    
                                </div>     
                                <div className="row">
                                    <div className="col-md-4">
                                        <button className="btn btn-success" onClick={this.handleSubmit} type="submit">Register</button>
                                    </div>   
                                </div>
                        </div>
                    </div>    
                </div>
            </>
        )
    }
}

export default withRouter(Register);