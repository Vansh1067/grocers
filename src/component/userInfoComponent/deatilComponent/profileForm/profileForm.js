import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as Actions from '../../../../store/auth/action'
import Hoc from '../../../../Hoc/hoc'
const ProfileForm=(props)=>{
    useEffect(()=>{
        props.UserData(12);
        console.log(props)
   

    },[])
    const [Fname,setFname]=useState(props.userData.FirstName)
    const [Lname,setLname]=useState(props.userData.LastName)
    const [Phone,setPhone]=useState(props.userData.Phone)
    const [Email,setEmail]=useState(props.userData.Email)
    const [Country,setCountry]=useState(props.userData.Country)
    const [City,setCity]=useState(props.userData.City)
    const [ZipCode,setZipCode]=useState(props.userData.ZipCode)
    const [State,setState]=useState(props.userData.State)
    const [Address1,setAddress1]=useState(props.userData.Address1)



    return(
        <Hoc>
            <div class="form">
                <h3>My Profile</h3>
                <form class="reviewForm">
                    <div>
                    <label>First Name</label>
                    <input placeholder="Vansh" type="text" value={Fname} onChange={(event)=>setFname(event.target.value)}></input>
                    </div>
                 <div>
                 <label>Last Name</label>
                    <input type="text" placeholder="Tandon" value={Lname} onChange={(event)=>setLname(event.target.value)}></input>
                 </div>
                   <div>
                   <label>Phone</label>
                    <input placeholder="9760030288" type="text" value={Phone} onChange={(event)=>setPhone(event.target.value)}></input>
                   </div>
                   <div>
                   <label>Email Address</label>
                    <input placeholder="example@exapmle.com" type="text" value={Email} onChange={(event)=>setEmail(event.target.value)}></input>
                   </div><div>
                   <label>Country</label>
                    <input placeholder="India" type="text" value={Country} onChange={(event)=>setCountry(event.target.value)}></input>
                   </div><div>
                   <label>City</label>
                    <input placeholder="Roorkee" type="text" value={City} onChange={(event)=>setCity(event.target.value)}></input>
                   </div><div>
                   <label>Zip Code</label>
                    <input placeholder="247667" type="text" value={ZipCode} onChange={(event)=>setZipCode(event.target.value)}></input>
                   </div><div>
                   <label>State</label>
                    <select value={State} onChange={(event)=>setState(event.target.value)}>
                        <option selected={true} disabled={true}>State</option>
                        <option>Uttrakhand</option>
                        <option>Uttrapradesh</option>
                        <option>Himachal</option>
                        <option>Delhi</option>
                        <option>Harayana</option>

                        </select>
                   </div><div class="textarea">
                   <label>Address</label>
                    <textarea placeholder="Give your review a title " rows={5} value={Address1} type="text" onChange={(event)=>setAddress1(event.target.value)}></textarea>
                   </div>
                   <div id="btnn">
                   <button type="submit">Cancel</button>
                    <button type="submit">Save Changes</button>
                   </div>
                    

                  
                </form>
            </div>
        </Hoc>
    );
}
const mapStateToProps=state=>{
    return {
        userData:state.auth.userData
    
    }
    }
    const mapDispatchToProps=dispatch=>{
        return {
            UserData:(id)=>dispatch(Actions.fetchUserData(+id))
    
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileForm))
