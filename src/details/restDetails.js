import React, {Component} from 'react';
import Header from '../Header';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './menuDisplay'
import './details.css'

const url = "https://zomatoajulypi.herokuapp.com/details";
const menu = "https://zomatoajulypi.herokuapp.com/menu"

class Details extends Component {
    constructor(){
        super()

        this.state={
            details:'',
            menuList:''
        }
    }

    render(){
        let {details} = this.state;

        return(
            <>
            <Header/>
            <div className="container">
                <div className="card" style={{width:'80%', marginLeft:'8%',backgroundColor:'wheat'}}>
                    <div>
                        <img className="card-img-top" src={details.restaurant_thumb} alt="Card" style={{width:'100%'}}/>
                        <button className="btn galButton" type="button" data-toggle="modal" data-target="#myGal">Click to See Image Gallery</button>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title restHeading">{this.state.details.restaurant_name}</h2>
                        <Tabs>
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Menu</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>
                                
                                <TabPanel>
                                <h4><b>About This Place</b></h4>
                                    <p><b>Average rating</b> - {details.average_rating}</p>
                                    <br/>
                                    <p><b>Rating text</b> - {details.rating_text}</p>
                                    <br/>
                                </TabPanel>
                                <TabPanel>
                                    <h3 style={{color:'midnightblue'}}><b>Menu</b></h3>
                                    <MenuDisplay menudata={this.state.menuList} restId={this.props.match.restId}/>
                                </TabPanel>
                                <TabPanel>
                                    <h4><b>Contact</b></h4>
                                    <p>{details.contact_number}</p>
                                    <br/>
                                    <h4><b>Address</b></h4>
                                    <p>{details.address}</p>
                                </TabPanel>
                            </Tabs>
                    </div>
                </div>
            </div>
            </>
        )
    }

    //api calling
    async componentDidMount(){
        let restId = this.props.match.params.restId;
        let response = await axios.get(`${url}/${restId}`);
        let menudata = await axios.get(`${menu}/${restId}`);
        console.log(response.data)
        console.log(menudata.data)
        this.setState({details:response.data[0],menuList:menudata.data})
    }

}

export default Details;