import React from 'react';

import Hoc from '../../../../Hoc/hoc'
import './orderComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons'

const OrderComponent=(props)=>{
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
                        <table>
                            <thead>
                                <tr>
                                    <th>Order#</th>
                                    <th class="date">Date Purchased</th>
                                    <th >Status</th>
                                    <th>Total</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>#243</th>
                                    <th>Dec 8,2017</th>
                                    <th><span class="status">Canceled</span></th>
                                    <th>$150</th>
                                    <th class='iconth'><FontAwesomeIcon className="eyeIcon" icon={faEye}/></th>

                                </tr>
                             
                            </tbody>
                        </table>
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
