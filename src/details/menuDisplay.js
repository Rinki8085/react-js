import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class MenuDisplay extends Component {
    constructor(props){
        super(props);

        this.state={
            orders:''
        }
    }

    orderId = []
    placeOrder = (id) => {
        this.orderId.push(id)
    } 

    proceed = () => {
        sessionStorage.setItem('menu',this.orderId)
        sessionStorage.setItem('restId',this.props.restId)
        this.props.history.push('/placeOrder')
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <React.Fragment>
                        <div className="row details" key={item.menu_id}>
                            <div className="col-sm-3">
                                <img src={item.menu_image} alt="restaurant_image" className="restImage" />
                            </div>
                            <div className="col-md-4">
                                <h3>{item.menu_name}</h3>
                                <p><span className="badge badge-success">{item.menu_type}</span></p>
                                <p>Rs.{item.menu_price}</p>
                            </div>
                            <div className='col-sm-2'>
                                <button type="button" className="btn btn-danger" onClick={() => {this.placeOrder(item.menu_id)}}>Add</button>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })
        }
    }

    render(){
        return(
            <div>
                <div>
                    {this.renderMenu(this.props)}
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <button type='button' className="btn btn-success" onClick={this.proceed}>Proceed</button>
                    </div>
                </div>
            </div>
        )
    }
   
}

export default withRouter(MenuDisplay);