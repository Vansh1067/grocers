import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom'

import Hoc from '../../../../Hoc/hoc'
import './orderComponent.css'
import {connect, useSelector} from 'react-redux';
import * as Actions from '../../../../store/order/action'
import OrderBox from './orderBox/orderBox';
import { Route, Switch } from 'react-router-dom';

const OrderComponent=(props)=>{
  const Orders=useSelector(state=>state.order.orders);
  const [refersh,setRefersh]=useState(false)
   
    useEffect(()=>{
        props.Order()
    },[refersh])
    const ReftreshHAndler=()=>{
        setRefersh(!refersh)
    }
    return(
        <Hoc>
           

            <div class="order">
                <h3>Orders</h3>
                <div class="orderHeader">
                    <span>Show<select>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>

                    </select>entries
                    </span>
                    <span>
                        Search<input type="text"></input>
                    </span>
                </div>
            
           
                <div class="table">
                    <Switch>

                    <Route path="/account/orders/"  exact render={ ()=><div class="">
                            {
                                props.orders.map((product)=>{
                                    return (<OrderBox refresh={ReftreshHAndler}product={product}/>)
                                })
                            }
                            
                        </div>}/>
                    
                    </Switch>
                       
                </div>
                <div class="orderFooter">
                    <p>Showing 1 to 10 of 15 entries </p>
                    <div class="pagination">
                        <a href="" class="Oshow">1</a>
                        <a href="">2</a>
                        <a href="">3</a>

                    </div>
                </div>
            </div>
        </Hoc>
    );
}
const mapStateToProps=state=>{
    return {
            orders:state.order.orders
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        Order:()=>dispatch(Actions.fetchOrder())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(OrderComponent))
