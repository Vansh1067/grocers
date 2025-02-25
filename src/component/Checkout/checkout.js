import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import {Link,Route,Switch} from 'react-router-dom'
import Payment from './payment'
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import * as Action from '../../store/Checkout/action'
import * as Actions from '../../store/user/action'

const Wrapper=styled.div`
    width:100%;

    background-color:#FFFFF;
    
`
const MainWrapper=styled.div`
width:80%;

margin:0 auto;

padding:10px 0;
& form{
   
    max-width:300px;
}
`
const P=styled.div`
font-size:${props=>props.size||'15px'};
font-weight:${props=>props.weight||'normal'};
text-align:${props=>props.loc||'left'};
margin:10px 0;
${props=>props.styles};
`
const AddressBox=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin:30px 0;
width:100%;
`
const Card=styled.div`
width:250px;

border:1px solid gray;
border-radius:8px;

padding:5px 5px;
margin:15px;

`
const Button=styled.button`
background-color:orange;
font-weight:500;
width:${props=>props.width||'100%'};
border:none;
padding:5px;
border-radius:8px;
margin:10px 0;
${props=>props.styles};

`
const Div=styled.div`
display:flex;
justify-content:${props=>props.loc||'space-around'};
${props=>props.styles};

`
const Input=styled.input`
padding:3px;
width:250px;
`
const Checkout=(props)=>{
    const dispatch=useDispatch()
    let history=useHistory();
    const [user,setuser]=useState();
    let UserAddress;
    const [fName,setFname]=useState('')
    const [lName,setLname]=useState('')
    const [phone,setPhone]=useState('')
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('')
    let User=useSelector(state=>state.wishList.userData);
    console.log(User)
    const [zipCode,setZipCode]=useState('')
    const [state,setState]=useState('')
    const [Address1,setAddress1]=useState('')
    const [Address2,setAddress2]=useState('')
    const [Address3,setAddress3]=useState('')

    
    useEffect(()=>{
        setuser(User);
        
        if(User){
            UserAddress={
                fName:User.fName,
                lName:User.lName,
                Address1:User.Address1,
                Address2:User.Address2,
                Address3:User.Address3,
                city:User.city,
                zipCode:User.zipCode,
                country:User.country,
                state:User.state,
                phone:User.phone
            }
        }
         
    },[user,User.OthersAddress])
    useEffect(()=>{
        dispatch(Actions.fetchUserData())

    },[])
    const CheckoutHandler=(address,New=false)=>{
        if(New){
            address={fName,lName,phone,Address1,Address2,Address3,city,state,zipCode,country,New}
        } 
        dispatch(Action.saveAddress(address))

        history.push('/checkout/payment'); 
    }
    const DeleteHandler=(id)=>{
        alert("Are you sure")
        dispatch(Actions.deleteAddress(id))
        dispatch(Actions.fetchUserData())
    console.log(User)

        setuser('')
    }
    const EditHandler=(address)=>{
        setFname(address.fName)
        setLname(address.lName)
        setAddress1(address.Address1)
        setAddress2(address.Address2)
        setAddress3(address.Address3)
        setCountry(address.country)
        setCity(address.city)
        setZipCode(address.zipCode)
        setState(address.state)
        setPhone(address.phone)
        dispatch(Actions.deleteAddress(address.id))
        
        

    }
    return(

        <Wrapper>
       
            <MainWrapper>
                <P size='25px' weight='bold'>Select Dilevery Address</P>
                <P styles={'& a{text-decoration:none;}'}>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can <Link to="/">enter a new delivery address. </Link> </P>
                <P size='20px' weight='500' >Saved Address</P>
                <AddressBox>
                <Card>
                    <P size='15px' weight="bold" styles={'color:red;'}>*This Address is change only in your Myaccount {'->'} profile section</P>
                    <P size='20px' weight="400">{User.fName}  {User.lName}</P>
                <P size='15px' weight='500' styles={'color:gray'}>{User.Address1} {User.Address2} {User.Address3} {User.city} {User.state} {User.zipCode} {User.country}</P>
                <Button onClick={()=>CheckoutHandler(UserAddress)} >Deliver to This Address</Button>
                <Div >

                
                
                </Div>
             
                </Card>
               {User.OthersAddress?User.OthersAddress.map((address,i)=>{
                    return (<Card key={i}>
                    <P size='20px' weight="400">{address.fName}  {address.lName}</P>
                <P size='15px' weight='500' styles={'color:gray'}>{address.Address1} {address.Address2} {address.Address3} {address.city} {address.state} {address.zipCode} {address.country}</P>
                <Button onClick={()=>CheckoutHandler(address)} >Deliver to This Address</Button>
                <Div >

                <Button width="40%"styles={'background-color:green;'} onClick={()=>EditHandler(address)}>Edit</Button>
                <Button width="40%" styles={'background-color:red; '} onClick={()=>DeleteHandler(address.id)}>Delete</Button>
                </Div>
             
                </Card>)
               }):null}
                </AddressBox>
                <P size='20px' weight='500' >Add New Address</P>
                <P styles={'& a{text-decoration:none;}'}>Be sure to click "Deliver to this address" when you've finished. </P>
                <form>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>First Name</P>

                        <Input type='text' value={fName} onChange={(event)=>setFname(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Last Name</P>
                        <Input type='text' value={lName} onChange={(event)=>setLname(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Phone</P>
                        <Input type='text' value={phone} onChange={(event)=>setPhone(event.target.value)}></Input>
                    </Div><Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Flat, House no., Building, Apartment: </P>
                        <Input type='text' value={Address1} onChange={(event)=>setAddress1(event.target.value)}></Input>
                    </Div><Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Area, Colony, Street, Sector, Village: </P>
                        <Input type='text' value={Address2} onChange={(event)=>setAddress2(event.target.value)}></Input>
                    </Div><Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Landmark e.g. near apollo hospital: </P>
                        <Input type='text' value={Address3} onChange={(event)=>setAddress3(event.target.value)}></Input>
                    </Div><Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Town/City: </P>
                        <Input type='text' value={city} onChange={(event)=>setCity(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>State: </P>
                        <Input type='text' value={state} onChange={(event)=>setState(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Pin Code: </P>
                        <Input type='text' value={zipCode} onChange={(event)=>setZipCode(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Country: </P>
                        <Input type='text' value={country} onChange={(event)=>setCountry(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'}>
                    <Button width='max-content;' onClick={()=>CheckoutHandler({},true)}>Deliver To This Address</Button>

                    </Div>
                </form>
            
                </MainWrapper>
            
        </Wrapper>
    );
}
export default Checkout
