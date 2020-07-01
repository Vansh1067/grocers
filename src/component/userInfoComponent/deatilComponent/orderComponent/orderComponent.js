import React from 'react';

import Hoc from '../../../../Hoc/hoc'
import './orderComponent.css'
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

                </div>
            </div>
        </Hoc>
    );
}
export default OrderComponent
