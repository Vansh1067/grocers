import React,{ useEffect } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import Hoc from '../../Hoc/hoc';
import * as Action from '../../store/cart/action'


import CartComponent from '../../component/HeaderComponent/NavViewComponent/CartComponent/cartComponent'
const UserCartContainer=(props)=>{

    const dispatch=useDispatch();
    const CartItems=useSelector(state=>state.cart.cart)
    console.log(CartItems)
    useEffect(()=>{

        dispatch(Action.fetchCart())
        
    },[])
    return(
        <Hoc>
            <CartComponent cartProducts={CartItems}></CartComponent>
        </Hoc>
    );
}

export default UserCartContainer