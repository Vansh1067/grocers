import React from 'react';

import './cartComponent.css'
import Hoc from '../../../../Hoc/hoc'
const CartComponent=(props)=>{
    return(
        <Hoc className="cart">
            <p>Cart</p>
        </Hoc>
    );
}
export default CartComponent