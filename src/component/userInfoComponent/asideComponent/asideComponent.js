import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faAddressCard,faHeart,faHeartbeat,faListUl,faUserLock,faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import Hoc from '../../../Hoc/hoc';
import img from '../../../assest/Draft-1593116874166.png'
import './asideComponent.css'
const AsideComponent=(props)=>{
    return(
        <Hoc class="aside">
            <div class="asideHeader">
                    <img src={img}></img>
                    <h3> Hi, Vansh</h3>
                </div>
            <div class="linklist">
                <ul>
                    <li><a href="">{<FontAwesomeIcon icon={faUser}/>} My Profile</a></li>
                    <li><a href="">{<FontAwesomeIcon icon={faAddressCard}/>} My Address</a></li>
                    <li><a href="">{<FontAwesomeIcon icon={faHeart}/>} Wish List</a></li>
                    <li><a href="">{<FontAwesomeIcon icon={faListUl}/>} Orders</a></li>
                    <li><a href="">{<FontAwesomeIcon icon={faUserLock}/>} Logout</a></li>
                    <li><a href="">{<FontAwesomeIcon icon={faPhoneAlt}/>} ContactUs</a></li>


                </ul>
            </div>
        </Hoc>
    );
}
export default AsideComponent
