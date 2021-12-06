import React,{Component} from "react";
import {withRouter} from 'react-router-dom';

const url = "https://user-login-api.herokuapp.com/api/auth/login";
class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false) {
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
                <div className="container" key={this.state.amount}> 
                    <div className="card"> 
                        <div className="card-heading">
                            <h3>Login !</h3>
                        </div>
                        <div className="card-body">
                                <h4 style={{color:'red'}}>{this.state.message}</h4>
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
                                        <button className="btn btn-success" onClick={this.handleSubmit} type="submit">Login</button>
                                    </div>   
                                </div>
                        </div>
                    </div>    
                </div>
            </>
        )
    }
}

export default withRouter(Login);