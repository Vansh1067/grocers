import React from 'react';

import Hoc from '../../../Hoc/hoc'
import './detailComponent.css'
import ProfileForm from './profileForm/profileForm'
import AddressForm from './addressForm/addressForm'
import OrderComponent from './orderComponent/orderComponent'
import WishList from './wishList/wishList'
import { Switch, Route } from 'react-router-dom';
const DetailComponent=(props)=>{

    return(
        <Hoc class="details">
            <Switch>
                <Route path='/account' exact component={ProfileForm}/>
                <Route path='/account/address' component={AddressForm}/>
                <Route path='/account/orders' component={OrderComponent}/>
                <Route path='/account/wishlist' component={WishList}/>
            </Switch>
            
         
        </Hoc>
    );
}
export default DetailComponent
