import React from 'react';

import './navViewComponent.css'
import Hoc from '../../../Hoc/hoc';
import SearchComponent from './SearchComponent/searchComponent'
import CartComponent from './CartComponent/cartComponent'
import BrandComponent from './BrandComponent/brandComponent'

const NavViewComponent=(props)=>{
    return(
        <Hoc className="navView">
            <BrandComponent></BrandComponent>
            <SearchComponent></SearchComponent>
            <CartComponent></CartComponent>
        </Hoc>
    );
}
export default NavViewComponent