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

            <div className="navs" style={styles}>
                <div className="brandMenu">
               <BrandComponent></BrandComponent>
               </div>
               
           <ul className="nav-ul" >
               <li><a >Categories</a>
               <ul className="nest-ul">
                   <li><a href="/products/0">All Products</a></li>
                   <li><a href="/products/1">Baby Care</a></li>
                   <li><a href="/products/2">Beverages</a></li>
                   <li><a href="/products/3">Cleaning &amp; Household</a></li>
                   <li><a href="/products/4">Daily Needs</a></li>
                   <li><a href="/products/5">Dairy &amp; Bakery</a></li>
                   <li><a href="/products/6">Fruits</a></li>
                   <li><a href="/products/7">Oil &amp; Spices</a></li>
                   <li><a href="/products/8">Personal Care</a></li>
                   <li><a href="/products/9">Rice Grains</a></li>
                   <li><a href="/products/10">Snaks &amp; Foods</a></li>

               </ul>
               </li>

               <li><a href="/">Home</a></li>
               <li><a href="/#specials">Specials</a></li>
               <li><a href="">Brand</a></li>

               <li><a href="">About us</a></li>
               
               <li><a href="#">My Account</a>
               <ul>
                   <li><a onClick={()=>{toggleLoginHandler('login')}}>Login</a></li>
                   <li><a onClick={()=>{toggleLoginHandler('reg')}}>Register</a></li>
                   <li><a href="/account">profile</a></li>
                   <li><a href="/logout">Logout</a></li>
                  

               </ul>
               </li>
               <li><a href="">Contact</a></li>
               
           </ul>
           </div>

        </Hoc>
    );
}
export default NavbarComponent