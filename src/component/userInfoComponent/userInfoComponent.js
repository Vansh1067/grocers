import React from 'react';

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
