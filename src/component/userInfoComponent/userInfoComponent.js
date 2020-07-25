import React, { useEffect } from 'react';
import * as action from '../../store/auth/action'
import './userInfoComponent.css'
import Hoc from '../../Hoc/hoc';
import DetailComponent from './deatilComponent/detailComponent';
import AsideCompponent from './asideComponent/asideComponent'
import { useDispatch } from 'react-redux';
const UserInfoComponent=(props)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
       /*  dispatch(action.autoLogin()) */
    })
    return(
        <Hoc class="userInfo">
            <AsideCompponent/>
            <DetailComponent/>
        </Hoc>
    );
}
export default UserInfoComponent
