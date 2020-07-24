import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons';
import { NavLink,Link} from 'react-router-dom'
import './navbarComponent.css'
import BrandComponent from '../BrandComponent/brandComponent'
import Hoc from '../../../Hoc/hoc';
import AccountComponent from '../../accountComponent/accountComponent';
import Backdrop from '../../backdrop/backdrop';
import {useSelector} from 'react-redux'
const NavbarComponent=(props)=>{
    const [isOpen,setIsOpen]=useState(false);
    const [styles,setStyles]=useState({});
    const [icon,setIcon]=useState(faBars);
    const [loginOpen,setLoginOpen]=useState(false);
    const [loginForm,setLoginForm]=useState(false);

    const auth=useSelector(state=>state.auth)

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
           <li><NavLink to="/">Home</NavLink></li>

               <li><NavLink to=''>Categories</NavLink>
               <ul className="nest-ul">
                   <li><NavLink  to={{pathname:"/products/0"}}>All Products</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/1"}}>Baby Care</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/2"}}>Beverages</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/3"}}>Cleaning &amp; Household</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/4"}}>Daily Needs</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/5"}}>Dairy &amp; Bakery</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/6"}}>Fruits</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/8"}}>Oil &amp; Spices</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/7"}}>Personal Care</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/9"}}>Rice Grains</NavLink></li>
                   <li><NavLink  to={{pathname:"/products/10"}}>Snaks &amp; Foods</NavLink></li>

               </ul>
               </li>

               <li><NavLink to={{pathname:'/',hash:'specials'}}>Specials</NavLink></li>
               <li><NavLink to="">Brand</NavLink></li>

               <li><NavLink to="">About us</NavLink></li>
               
               <li><NavLink to="">My Account</NavLink>
               <ul>
                  {!auth.isAuth? <li><NavLink to='' onClick={()=>{toggleLoginHandler('login')}}>Login</NavLink></li>:null}
                  {!auth.isAuth? <li><NavLink to=''onClick={()=>{toggleLoginHandler('reg')}}>Register</NavLink></li>:null}
                  {auth.isAuth? <li><NavLink to="/account">profile</NavLink></li>:null}
                  {auth.isAuth? <li><NavLink to="/logout">Logout</NavLink></li>:null}
                  

               </ul>
               </li>
               <li><NavLink to={{pathname:'',hash:'footer'}}>Contact</NavLink></li>
               
           </ul>
           </div>

        </Hoc>
    );
}
export default NavbarComponent