import React, { useEffect, useState } from 'react';

import './navViewComponent.css'
import Hoc from '../../../Hoc/hoc';
import SearchComponent from './SearchComponent/searchComponent'
import CartComponent from './CartComponent/cartComponent'
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '../../../store/cart/action'


const NavViewComponent=(props)=>{
   /*  const dispatch=useDispatch()

    dispatch(Action.fetchCart())

    const CartItems=useSelector(state=>state.cart.cart.items);
    const[ TotalItems,setTotalItems]=useState(0)

    useEffect(()=>{
        setTotalItems(CartItems.length)
    },[])
    */
    return(
        <Hoc className="navView">
            <SearchComponent></SearchComponent>
            <CartComponent ></CartComponent>
        </Hoc>
    );
}
export default NavViewComponent