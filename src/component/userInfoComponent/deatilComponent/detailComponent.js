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
             

                <Route path='/account/orders' exact component={OrderComponent}/>
                <Route path='/account/wishlist' exact component={WishList}/>
                <Route path='/account/:token' exact component={ProfileForm}/> 
                <Route path='/account/address/:token' exact component={AddressForm}/> 

            </Switch>
            
         
        </Hoc>
    );
}
export default DetailComponent
