import React, { useEffect, useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components'
import * as Actions from '../../../../store/user/action'
import Hoc from '../../../../Hoc/hoc'
const Button=styled.button`
width:120px;
    padding: 10px;
    border: none;
    margin: 0px auto;
    border-radius: 10px;
    cursor: pointer;
    background-color: green;
    color:black;
    font-weight:bold ;
`
const ProfileForm=(props)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        props.UserData();
        console.log(props)
   

    },[])
    const [fName,setFname]=useState('')
    const [lName,setLname]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [country,setCountry]=useState('')
    const [city,setCity]=useState('')
    const [zipCode,setZipCode]=useState('')
    const [state,setState]=useState('')
    const [Address1,setAddress1]=useState('')
    const [Address2,setAddress2]=useState('')
    const [Address3,setAddress3]=useState('')
    console.log(props)

    useEffect(()=>{
       
            setFname(props.userData.fName);
            setLname(props.userData.lName);
            setPhone(props.userData.phone)
            setEmail(props.userData.email)
            setCountry(props.userData.country)
            setCity(props.userData.city)
            setZipCode(props.userData.zipCode)
            setState(props.userData.state)
            setAddress1(props.userData.Address1)
            setAddress2(props.userData.Address2)
            setAddress3(props.userData.Address3)
       
        

    },[props.userData])

    const SaveHandler=()=>{
    
           const  address={fName,lName,email,phone,Address1,Address2,Address3,city,state,zipCode,country}
     
        dispatch(Actions.updateAddress(address))

       
    }
    return(
        <Hoc>
            <div className="form">
                <h3>My Profile</h3>
                <form className="reviewForm">
                    <div>
                    <label>First Name</label>
                    <input placeholder="Vansh" type="text" value={fName} onChange={(event)=>setFname(event.target.value)}></input>
                    </div>
                 <div>
                 <label>Last Name</label>
                    <input type="text" placeholder="Tandon" value={lName} onChange={(event)=>setLname(event.target.value)}></input>
                 </div>
                   <div>
                   <label>Phone</label>
                    <input placeholder="9760030288" type="text" value={phone} onChange={(event)=>setPhone(event.target.value)}></input>
                   </div>
                   <div>
                   <label>Email Address</label>
                    <input placeholder="example@exapmle.com" type="text" value={email} onChange={(event)=>setEmail(event.target.value)}></input>
                   </div><div>
                   <label>Country</label>
                    <input placeholder="India" type="text" value={country} onChange={(event)=>setCountry(event.target.value)}></input>
                   </div><div>
                   <label>City</label>
                    <input placeholder="Roorkee" type="text" value={city} onChange={(event)=>setCity(event.target.value)}></input>
                   </div><div>
                   <label>Zip Code</label>
                    <input placeholder="247667" type="text" value={zipCode} onChange={(event)=>setZipCode(event.target.value)}></input>
                   </div><div>
                   <label>State</label>
                    <select value={state} onChange={(event)=>setState(event.target.value)}>
                        <option selected={true} disabled={true}>State</option>
                        <option>Uttrakhand</option>
                        <option>Uttrapradesh</option>
                        <option>Himachal</option>
                        <option>Delhi</option>
                        <option>Harayana</option>

                        </select>
                   </div>
                   <div className="textarea">
                   <label>Flat, House no., Building, Apartment:</label>
                    <input placeholder="Give your review a title "   value={Address1} type="text" onChange={(event)=>setAddress1(event.target.value)}></input>
                   </div>
                   <div className="textarea">
                   <label>Area, Colony, Street, Sector, Village:</label>
                    <input placeholder="Give your review a title "  value={Address2} type="text" onChange={(event)=>setAddress2(event.target.value)}></input>
                   </div>
                   <div className="textarea">
                   <label>Landmark e.g. near apollo hospital:</label>
                    <input placeholder="Give your review a title "   value={Address3} type="text" onChange={(event)=>setAddress3(event.target.value)}></input>
                    </div>
                   <div id="btnn">
                  
                   </div>
                    

                  
                </form>
                <Button  onClick={SaveHandler}>Save Changes</Button>

            </div>
        </Hoc>
    );
}
const mapStateToProps=state=>{
    return {
        userData:state.wishList.userData
    
    }
    }
    const mapDispatchToProps=dispatch=>{
        return {
            UserData:()=>dispatch(Actions.fetchUserData())
    
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileForm))
