import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCartArrowDown,faCaretRight} from '@fortawesome/free-solid-svg-icons'
import './userCartComponent.css'
import Hoc from '../../Hoc/hoc'
const userCartComponent=(props)=>{
    return(
        <Hoc>
            <div class="userCart">
                <div class="cartheader">
                <h3>My Cart <span >(5 item)</span></h3>
                <FontAwesomeIcon className="userIcon" icon={faTimes}/>
                </div>
                <div class="ProductArea">

                </div>
                <div class="priceSummary">
                    <div>
                        <p>Sub Total</p>
                        <p>$900</p>
                    </div>
                    <div>
                        <p>Delivery Charges</p>
                        <p>$9</p>
                    </div>
                    <div>
                        <p style={{fontWeight:'bold'}}>Your Total Savings</p>
                        <p>$55 (5%)</p>
                    </div>
                    <div class="button">
                        <button>
                            <div>
                            <FontAwesomeIcon icon={faCartArrowDown}/>
                            <span>Proceed to Checkout</span>
                            </div>
                            <p>$845 &nbsp;<FontAwesomeIcon icon={faCaretRight}/></p> 
                          
                        </button>
                    </div>
                </div>
            </div>
        </Hoc>
    );
}
export default userCartComponent