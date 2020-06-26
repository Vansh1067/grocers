import React from 'react';

import './navViewComponent.css'
import Hoc from '../../../Hoc/hoc';
import SearchComponent from './SearchComponent/searchComponent'
import CartComponent from './CartComponent/cartComponent'

const NavViewComponent=(props)=>{
    return(
        <Hoc className="navView">
            <SearchComponent></SearchComponent>
            <CartComponent></CartComponent>
        </Hoc>
    );
}
export default NavViewComponent