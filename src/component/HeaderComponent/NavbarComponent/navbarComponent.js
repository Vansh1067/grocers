import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import './navbarComponent.css'
import BrandComponent from '../BrandComponent/brandComponent'
import Hoc from '../../../Hoc/hoc';
import AccountComponent from '../../accountComponent/accountComponent';
import Backdrop from '../../backdrop/backdrop'
const NavbarComponent=(props)=>{
    const [isOpen,setIsOpen]=useState(false);
    const [styles,setStyles]=useState({});
    const [icon,setIcon]=useState(faBars);
    const [loginOpen,setLoginOpen]=useState(false);
    const [loginForm,setLoginForm]=useState(false);

    



    const toggleLoginHandler=(dir)=>{
        dir==="login"?setLoginForm(true):setLoginForm(false)
        setLoginOpen(!loginOpen)
    
        
    }
    const toggleHandler=()=>{
        setIsOpen(!isOpen)
        if(!isOpen){
            setStyles({display:'block'})
            setIcon(faTimes)

        }else{
           setStyles({})
           setIcon(faBars)

        }
    }
    return(
        <Hoc className="navbar">
            {loginOpen?<div><Backdrop><AccountComponent toggleHandler={(value)=>setLoginOpen(value)} formType={loginForm}/></Backdrop></div>:null}

            <FontAwesomeIcon className="bars" onClick={toggleHandler} icon={icon}/>

            <div class="navs" style={styles}>
                <div class="brandMenu">
               <BrandComponent></BrandComponent>
               </div>
               
           <ul class="nav-ul" >
               <li><a href="#">Categories</a>
               <ul class="nest-ul">
                   <li><a href="">Baby Care</a></li>
                   <li><a href="">Beverages</a></li>
                   <li><a href="">Cleaning &amp; Household</a></li>
                   <li><a href="">Daily Needs</a></li>
                   <li><a href="">Dairy &amp; Bakery</a></li>
                   <li><a href="">Fruits</a></li>
                   <li><a href="">Oil &amp; Spices</a></li>
                   <li><a href="">Personal Care</a></li>
                   <li><a href="">Rice Grains</a></li>
                   <li><a href="">Snaks &amp; Foods</a></li>

               </ul>
               </li>

               <li><a href="">Home</a></li>
               <li><a href="">Specials</a></li>
               <li><a href="">Brand</a></li>

               <li><a href="">About us</a></li>
               
               <li><a href="#">My Account</a>
               <ul>
                   <li><a onClick={()=>{toggleLoginHandler('login')}}>Login</a></li>
                   <li><a onClick={()=>{toggleLoginHandler('reg')}}>Register</a></li>
                  

               </ul>
               </li>
               <li><a href="">Contact</a></li>
               
           </ul>
           </div>

        </Hoc>
    );
}
export default NavbarComponent