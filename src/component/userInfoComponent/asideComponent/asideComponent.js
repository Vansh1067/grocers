import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faAddressCard,faHeart,faHeartbeat,faListUl,faUserLock,faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import Hoc from '../../../Hoc/hoc';
import img from '../../../assest/Draft-1593116874166.png'
import './asideComponent.css'
import { useDispatch } from 'react-redux';
import {logout} from '../../../store/auth/action'
const AsideComponent=(props)=>{
    const dispatch=useDispatch()
    const logouthandler=()=>{
        dispatch(logout())
    }
    return(
        <Hoc className="aside">
            <div className="asideHeader">
                    <img src={img}></img>
                    <h3> Hi, Vansh</h3>
                </div>
            <div className="linklist">
                <ul>
                    <li><NavLink to="/account">{<FontAwesomeIcon icon={faUser}/>} My Profile</NavLink></li>
                    <li><NavLink to="/account/address/">{<FontAwesomeIcon icon={faAddressCard}/>} My Address</NavLink></li>
                    <li><NavLink to="/account/wishlist">{<FontAwesomeIcon icon={faHeart}/>} Wish List</NavLink></li>
                    <li><NavLink to="/account/orders">{<FontAwesomeIcon icon={faListUl}/>} Orders</NavLink></li>
                    <li onClick={logouthandler}><a >{<FontAwesomeIcon icon={faUserLock}/>} Logout</a></li>
                {/*     <li><NavLink to="/contactus">{<FontAwesomeIcon icon={faPhoneAlt}/>} ContactUs</NavLink></li> */}


                </ul>
            </div>
        </Hoc>
    );
}
export default AsideComponent
