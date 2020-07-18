import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as Actions from '../../../../store/user/action'
import Hoc from '../../../../Hoc/hoc'
const AddressForm=(props)=>{
    useEffect(()=>{
        props.UserData();
        console.log(props)
   

    },[])

    const [Country,setCountry]=useState('')
    const [City,setCity]=useState('')
    const [ZipCode,setZipCode]=useState('')
    const [State,setState]=useState('')
    const [Address1,setAddress1]=useState('')
    const [Address2,setAddress2]=useState('')

    useEffect(()=>{
       
        setCountry(props.userData.country)
        setCity(props.userData.city)
        setZipCode(props.userData.zipCode)
        setState(props.userData.state)
        setAddress1(props.userData.Address1)
        setAddress2(props.userData.Address2)

    })

    return(
        <Hoc>
            <div class="form">
                <h3>Contact Address</h3>
                <form class="reviewForm">
                   
                   <div>
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
                   </div>
                   <div class="textarea">
                   <label>Address 1.</label>
                    <textarea placeholder="Address" rows={5} type="text"value={Address1} type="text" onChange={(event)=>setAddress1(event.target.value)}></textarea>
                   </div>
                   <div class="textarea">
                   <label>Address 2.</label>
                    <textarea placeholder="Address" rows={5} value={Address2} type="text" onChange={(event)=>setAddress2(event.target.value)}></textarea>
                   </div>
                   <div id="checkbox">
                    <input type="checkbox" />
                    <p> Same as contact address</p> 
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
        userData:state.wishList.userData
    
    }
    }
    const mapDispatchToProps=dispatch=>{
        return {
            UserData:()=>dispatch(Actions.fetchUserData())
    
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddressForm))

