import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './userInfoComponent.css'
import Hoc from '../../Hoc/hoc';
import DetailComponent from './deatilComponent/detailComponent';
import AsideCompponent from './asideComponent/asideComponent'
const UserInfoComponent=(props)=>{
    return(
        <Hoc class="userInfo">
            <AsideCompponent/>
            <DetailComponent/>
        </Hoc>
    );
}
export default UserInfoComponent
