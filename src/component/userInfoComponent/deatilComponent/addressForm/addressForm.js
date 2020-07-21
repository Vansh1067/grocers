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
    const [Address3,setAddress3]=useState('')
    const [same,setSame]=useState('')
    const [ContactAddress,setContactAddress]=useState('')

    useEffect(()=>{
       
        setCountry(props.userData.country)
        setCity(props.userData.city)
        setZipCode(props.userData.zipCode)
        setState(props.userData.state)
        setAddress1(props.userData.Address1)
        setAddress2(props.userData.Address2)
        setAddress3(props.userData.Address3)
        
       

    })
 
    const checkedHandler=()=>{
        
        setSame(!same)
        if(!same){
            setContactAddress(`${Address1} ${Address2} ${Address3} `)
        }else{
            setContactAddress('')
        }
    }
    return(
        <Hoc>
            <div class="form">
                <h3>Contact Address</h3>
                <form class="reviewForm">
                   
                   <div>
                   <label>Country</label>
                    <input  type="text" value={Country} readOnly></input>
                   </div>
                   <div>
                   <label>City</label>
                   <input  type="text" value={City} readOnly></input>
                   </div>
                   <div>
                   <label>Zip Code</label>
                    <input  type="text" value={ZipCode} readOnly></input>
                   </div>
                   <div>
                   <label>State</label>
                    <input  type="text" value={State} readOnly></input>
                    </div>
                   <div className="textarea">
                   <label>Flat, House no., Building, Apartment:</label>
                    <input   value={Address1} type="text" readOnly></input>
                   </div>
                   <div className="textarea">
                   <label>Area, Colony, Street, Sector, Village:</label>
                    <input   value={Address2} type="text" readOnly></input>
                   </div>
                   <div className="textarea">
                   <label>Landmark e.g. near apollo hospital:</label>
                    <input    value={Address3} type="text" readOnly></input>
                    </div>
                   <div class="textarea">
                   <label>Address 2.</label>
                    <textarea  rows={5} value={ContactAddress} type="text" >{ContactAddress}</textarea>
                   </div>
                   <div id="checkbox">
                    <input type="checkbox" onClick={checkedHandler}/>
                    <p> Same as contact address</p> 
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

