import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../Hoc/hoc'
import './accountComponent.css'
const AccountComponent=(props)=>{
    return(
        <Hoc class="AccountContainer">
            <div class="acc">
            <FontAwesomeIcon className="accIcon"icon={faTimes}/>
            <div class="image">
                <p>d</p>
                </div>
                <div class="form">
                <h3>Register Now !</h3>
                <form class="reviewForm">
                    <label>Email/Mobile Number</label>
                    <input placeholder="Enter Your Name" type="text"></input>
                    <label>Password</label>
                    <input type="text"></input>
                    <label>Confirm Password</label>
                    <input placeholder="Give your review a title " type="text"></input>
                    <button type="submit">Create Your Account</button>
                    <div id="checkbox">
                    <input type="checkbox" /><p> I Agree with Term &amp; Condition</p>

                    </div>
                </form>
                <div class="buttons">
                    <button>Login</button>
                    <button>Register</button>

                </div>
            </div>
            </div>
        </Hoc>
    );
}
export default AccountComponent
