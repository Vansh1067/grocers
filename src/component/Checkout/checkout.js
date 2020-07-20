import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import {Link,Route,Switch} from 'react-router-dom'
import Payment from './payment'
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import * as Action from '../../store/Checkout/action'
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
    const User=useSelector(state=>state.wishList.userData);
    let UserAddress;
    const [Fname,setFname]=useState('')
    const [Lname,setLname]=useState('')
    const [Phone,setPhone]=useState('')
    const [City,setCity]=useState('')
    const [Country,setCountry]=useState('')

    const [ZipCode,setZipCode]=useState('')
    const [State,setState]=useState('')
    const [Address1,setAddress1]=useState('')
    const [Address2,setAddress2]=useState('')
    const [Address3,setAddress3]=useState('')

  
    useEffect(()=>{
        setuser(User);
        
        if(User){
            UserAddress={
                Fname:User.fName,
                Lname:User.lName,
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
         
    },[user])
    
    const CheckoutHandler=(address,New=false)=>{
        if(New){
            address={Fname,Lname,Phone,Address1,Address2,Address3,City,State,ZipCode,Country,New}
        } 
        dispatch(Action.saveAddress(address))

        history.push('/checkout/payment'); 
    }
  
    return(

        <Wrapper>
       
            <MainWrapper>
                <P size='25px' weight='bold'>Select Dilevery Address</P>
                <P styles={'& a{text-decoration:none;}'}>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can <Link to="/">enter a new delivery address. </Link> </P>
                <P size='20px' weight='500' >Saved Address</P>
                <AddressBox>
                <Card>
                    <P size='20px' weight="400">{User.fName}  {User.lName}</P>
                <P size='15px' weight='500' styles={'color:gray'}>{User.Address1} {User.Address2} {User.Address3} {User.city} {User.state} {User.zipCode} {User.country}</P>
                <Button onClick={()=>CheckoutHandler(UserAddress)} >Deliver to This Address</Button>
                <Div >

                <Button width="40%"styles={'background-color:green;'}>Edit</Button>
                <Button width="40%" styles={'background-color:red; '}>Delete</Button>
                </Div>
             
                </Card>
               {User.OthersAddress?User.OthersAddress.map((address,i)=>{
                    return (<Card key={i}>
                    <P size='20px' weight="400">{address.fName}  {address.lName}</P>
                <P size='15px' weight='500' styles={'color:gray'}>{address.Address1} {address.Address2} {address.Address3} {address.city} {address.state} {address.zipCode} {address.country}</P>
                <Button onClick={()=>CheckoutHandler(address)} >Deliver to This Address</Button>
                <Div >

                <Button width="40%"styles={'background-color:green;'}>Edit</Button>
                <Button width="40%" styles={'background-color:red; '}>Delete</Button>
                </Div>
             
                </Card>)
               }):null}
                </AddressBox>
                <P size='20px' weight='500' >Add New Address</P>
                <P styles={'& a{text-decoration:none;}'}>Be sure to click "Deliver to this address" when you've finished. </P>
                <form>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>First Name</P>

                        <Input type='text' value={Fname} onChange={(event)=>setFname(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Last Name</P>
                        <Input type='text' value={Lname} onChange={(event)=>setLname(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Phone</P>
                        <Input type='text' value={Phone} onChange={(event)=>setPhone(event.target.value)}></Input>
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
                        <Input type='text' value={City} onChange={(event)=>setCity(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>State: </P>
                        <Input type='text' value={State} onChange={(event)=>setState(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Pin Code: </P>
                        <Input type='text' value={ZipCode} onChange={(event)=>setZipCode(event.target.value)}></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Country: </P>
                        <Input type='text' value={Country} onChange={(event)=>setCountry(event.target.value)}></Input>
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
