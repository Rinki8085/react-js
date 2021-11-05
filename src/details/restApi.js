import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const menuUrl = "https://zomoajulypi.heroku.com/menu";
const restMenu = "https://zomoajulypi.heroku.com/restaurant";

class RestApi extends Component {
    constructor(props){
        super()

        this.state={
            restMenu:'',
            restImage:''
        }
    }

    render(){
        return(
            <div>
                <Details menu={this.state.restMenu} image={this.state.restImage}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(menuUrl)
    }
}