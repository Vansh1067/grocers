import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../Hoc/hoc';
import img from '../../assest/Draft-1593116874166.png'
import './accountComponent.css'
const AccountComponent=(props)=>{
    const [loginForm,setLoginForm]=useState(!props.formType);

    const changeHandler=(dir)=>{
        dir==='login'?setLoginForm(false):setLoginForm(true)
     
    }
    return(
        <Hoc class="AccountContainer">
            <div class="acc">
            <FontAwesomeIcon onClick={()=>{props.toggleHandler(false)}}className="accIcon"icon={faTimes}/>
            <div class="image">
                <img src={img}/>
                </div>
                <div class="form">
                <h3>{loginForm?'Register':'Login'} Now !</h3>
                <form class="reviewForm">
                    <label>Email/Mobile Number</label>
                    <input placeholder="Enter Your Name" type="text"></input>
                    <label>Password</label>
                    <input type="text"></input>
                    {loginForm?<label>Confirm Password</label>:null}
                   {loginForm? <input placeholder="Give your review a title " type="text"></input>:null}
                    <button id="accBtn" type="submit">Enter To your Account</button>
             </form>
                <div class="socialhandler">
                    <p>Or {loginForm?'Register':'login'} with your social profile</p>
                    <div class="buttons">
                    <button>Facebook</button>
                    <button>Google</button>
                    <button>Twitter</button>

                    </div>
                </div>
              {loginForm? <div id="checkbox">
                    <input type="checkbox" /><p> I Agree with Term &amp; Condition</p> 
                    </div>:
                <div id="checkbox">
                    <input type="checkbox" /><p> Remeber Me</p> 
                </div>}
                <div class="buttons">
                    <button disabled={!loginForm} onClick={()=>changeHandler('login')}>Login</button>
                    <button disabled={loginForm} onClick={()=>changeHandler('reg')}>Register</button>

                </div>
            </div>
            </div>
        </Hoc>
    );
}
export default AccountComponent
