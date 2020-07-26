import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {connect, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'
import * as Action from '../../store/auth/action';
import * as Actions from '../../store/user/action';

import Hoc from '../../Hoc/hoc';
import img from '../../assest/logo2.jpeg'
import './accountComponent.css'
const AccountComponent=(props)=>{
    const [loginForm,setLoginForm]=useState(!props.formType);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [check,setCheck]=useState(false);

    useEffect(()=>{
        if(props.user.isAuth){
            props.toggleHandler(false);
            props.FetchUser();
        }
       
    },[props.user.isAuth])
    const changeHandler=(dir)=>{
        dir==='login'?setLoginForm(false):setLoginForm(true)
     
    }
    const clickhandler=()=>{
     
        const user={
            email,
            password,
            check
        }
        if(loginForm){
            user.confirmPassword=confirmPassword;
           
        }
        props.Login(user)

        
        
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setCheck(false)
        

    }
  
    return(
        
        <Hoc class="AccountContainer">
            <div class="acc">
            <FontAwesomeIcon onClick={()=>{props.toggleHandler(false)}}className="accIcon" icon={faTimes}/>
            <div class="image">
                <img src={img}/>
                </div>
                <div class="form">
                <h3>{loginForm?'Register':'Login'} Now !</h3>
               
                <form class="reviewForm" >
                    <label>Email/Mobile Number</label>
                    <input placeholder="Enter Your Name" type="text" onChange={(event)=>{setEmail(event.target.value)}}  value={email}></input>
                    <label>Password</label>
                    <input type="text"  value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
                    {loginForm?<label>Confirm Password</label>:null}
                   {loginForm? <input placeholder="Confirm Password "  onChange={(event)=>{setConfirmPassword(event.target.value)}} value={confirmPassword} type="text"></input>:null}
                   {loginForm? <div id="checkbox">
                    <input type="checkbox" /><p> I Agree with Term &amp; Condition</p> 
                    </div>:
                <div id="checkbox">
                    <input type="checkbox" onChange={(event)=>{setCheck(event.target.checked)}} /><p> Remeber Me</p> 
                </div>}
                    <a id="accBtn" className="button"  onClick={clickhandler} >Enter To your Account</a>
             </form>
                <div class="socialhandler">
                    <p>Or {loginForm?'Register':'login'} with your social profile</p>
                    <div class="buttons">
                    <button>Facebook</button>
                    <button>Google</button>
                    <button>Twitter</button>

                    </div>
                </div>
             
                <div class="buttons">
                    <button disabled={!loginForm} onClick={()=>changeHandler('login')}>Login</button>
                    <button disabled={loginForm} onClick={()=>changeHandler('reg')}>Register</button>

                </div>
            </div>
            </div>
        </Hoc>
    );
}
const mapStateToProps=state=>{
        return {
            user:state.auth
        }
}
const mapDispatchToProps=dispatch=>{
    return {
        Login:(user)=>dispatch(Action.login(user)),
        FetchUser:()=>dispatch(Actions.fetchUserData()),
   

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AccountComponent)
