import React from 'react';

import Hoc from '../../../../Hoc/hoc'
import './orderComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import OrderBox from './orderBox/orderBox'

const OrderComponent=(props)=>{
    const product=[{title:'Baby Care',price:25},{title:'Banana',price:15}]
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
                       
                        <div class="orderBox">
                            {
                                product.map((product)=>{
                                    return (<OrderBox product={product}/>)
                                })
                            }
                            
                        </div>
                </div>
                <div class="orderFooter">
                    <p>Showing 1 to 10 of 15 entries </p>
                    <div class="pagination">
                        <a href="" class="show">1</a>
                        <a href="">2</a>
                        <a href="">3</a>

                    </div>
                </div>
            </div>
        </Hoc>
    );
}
export default OrderComponent
