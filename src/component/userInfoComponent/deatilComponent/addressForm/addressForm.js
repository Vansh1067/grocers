import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as Actions from '../../../../store/user/action'
import Hoc from '../../../../Hoc/hoc'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
const Button=styled.button`
width:150px;
    padding: 10px;
    border: none;
    margin: 0px auto;
    border-radius: 10px;
    cursor: pointer;
    background-color: green;
    color:black;
    font-weight:bold ;
`
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
    const [check,setCheck]=useState(false)
    const [ContactAddress,setContactAddress]=useState('')
 
    useEffect(()=>{
       
        setCountry(props.userData.country)
        setCity(props.userData.city)
        setZipCode(props.userData.zipCode)
        setState(props.userData.state)
        setAddress1(props.userData.Address1)
        setAddress2(props.userData.Address2)
        setAddress3(props.userData.Address3)
        
        if(ContactAddress===`${Address1} ${Address2} ${Address3}`){
            setCheck(true)
        }
        if(props.userData.contactAddress){
            setContactAddress(props.userData.contactAddress)
        } 
     


      
    },[])
    const SaveHandler=()=>{
        alert(ContactAddress)
        const  address={contactAddress:ContactAddress,contact:true}
        props.SaveAddress(address)

    
        }
  useEffect(()=>{
       if(!check && props.userData.contactAddress){
            setContactAddress('')

       /*  const Ad=`${Address1} ${Address2} ${Address3}`
        setContactAddress(Ad); */
        }if(check && props.userData.contactAddress){
            const Ad=`${Address1} ${Address2} ${Address3}`
        setContactAddress(Ad);

        }
    
   },[check]) 
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
                    <textarea  rows={5} value={ContactAddress} onChange={(event)=>{setContactAddress(event.target.value)} } type="text" >{ContactAddress}</textarea>
                   </div>
                   <div id="checkbox">
                    <input type="checkbox" checked={check} onChange={(event)=>{setCheck(event.target.checked)} }/>
                    <p > Same as contact address</p> 
                    </div>
                   
                  
                
                    

                  
                </form>
                {props.userData.contactAddress&&!check||ContactAddress&&check? <div id="btnn">
                <Button  onClick={()=>SaveHandler()}>Save Changes</Button>
                </div>:null}
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
            UserData:()=>dispatch(Actions.fetchUserData()),
            SaveAddress:(address)=>dispatch(Actions.updateAddress(address))
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddressForm))

