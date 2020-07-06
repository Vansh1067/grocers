import React,{ useEffect } from 'react';
import {connect} from 'react-redux';
import Hoc from '../../Hoc/hoc';
import * as Action from '../../store/product/action'

import CartComponent from '../../component/HeaderComponent/NavViewComponent/CartComponent/cartComponent'
const UserCartContainer=(props)=>{
    console.log(props)
    useEffect(()=>{
        props.Cart()
    },[])
    return(
        <Hoc>
            <CartComponent cartProducts={props.cart}></CartComponent>
        </Hoc>
    );
}

export default UserCartContainer