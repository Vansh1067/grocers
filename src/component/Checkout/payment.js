import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import img from '../../assest/Capture1.PNG' 
import ProductComponent from '../categoriesCardComponent/productCardComponent/productCardComponent'
import {useSelector, useDispatch} from 'react-redux';
import * as Action from '../../store/order/action'
const Wrapper=styled.div`
    width:100%;

    background-color:#FFFFF;
    
`
const MainWrapper=styled.div`
width:80%;

margin:0 auto;

padding:10px 0;

`
const P=styled.div`
font-size:${props=>props.size||'15px'};
font-weight:${props=>props.weight||'normal'};
text-align:${props=>props.loc||'left'};
margin:10px;
${props=>props.styles};
`
const PaymentBox=styled.div`
display:flex;
flex-wrap:wrap;
border:2px solid gray;
border-radius:8px;
margin:30px 0;
padding:15px;
width:100%;
${props=>props.styles};

`
const Card=styled.div`
width:250px;

border:1px solid gray;
border-radius:8px;

padding:10px;
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
margin:15px 0;
align-items:center;
${props=>props.styles};

`
const Input=styled.input`
    padding:3px;
    margin-right:10px;
${props=>props.styles};

`
/* const product={
    AvailabelDetails: [],
Details:{
description: "Never let a buzzing mosquito disrupt your peace again with the All Out Mosquito Repellent Refill. Don’t live your best moments fearing diseases like malaria and dengue anymore and trust All Out to be your shield against it. Sensitive to your presence, it does not harm the air you breathe by maintaining the sanctity of your home. The refill is really enough for you to be rest assured for a long time to come. From the minute you switch it on, it starts acting to your rescue and gives your family the protection you seek.",
keyFeatures: "Kills Dengue and Malaria mosquitoes 30% faster Unique thermal cut-off designed to shut off if it over-heats Rotating deck enables use in vertical and horizontal outlets Covers the entire room and lets you enjoy peaceful sleep",
manufacturer: "S C Johnson Products Private Limited, Regd Office : 5th Floor, plot no 68, Sector -44, Gurgaon, Haryana, 122003",
packagingType: "Refill",
seller: "LA Super Retail Pvt Ltd (https://bit.ly/2QuoDoe)",
unit: "6*45ml",
},
MRP: 30,
categories: 1,
imageUrl: "../max.png",
preferences: true,
reviews: [
{_id: "akjbskjbajbsjcb"},
{_id: "nsjf bskchsjh"}
],
sellingPrice: 25,
specialOffer: true,
title: "Baby Care",
weight: "2kg",
_id: "5f0e1b346bea1d4c88d52653"
} */
const Popup=styled.div`
box-shadow:0px 5px 10px black;
background-color:white;
position:absolute;
width:300px;
height:200px;
z-index:15;

`

const Payment=(props)=>{
    const [popup,setPopup]=useState(false);
    const CheckoutDetails=useSelector(state=>state.checkOut);
    const Cart=useSelector(state=>state.cart.cart);
    const Address=CheckoutDetails.Address
    const OrderSummary=CheckoutDetails.OrderSummary;
    const dispatch=useDispatch();
    console.log(Cart)

    const orderHandler=()=>{
        setPopup(!popup)
    }
    const confirmOrderHandler=()=>{
      const productIds=Cart.items.map((product)=>product);
      let totalqty=0;
      Cart.items.forEach((product)=>{
        totalqty+=product.quantity
        });
        const OrderData={
            productsId:productIds,
            totalquantity:totalqty,
            OrderDate:'20-07-2019',
            totalAmount:OrderSummary.OrderTotal,
            Address:Address
        }
        dispatch(Action.AddOrder(OrderData)) 
        setPopup(!popup)
    }
    return(
        <Wrapper>
           <MainWrapper>
<P size='25px' weight='bold'>Select a payment method</P>
<PaymentBox styles={"flex-direction:column;"}>
    <form>
<Div styles={'flex-direction:row;'} loc='flex-start'>
<Input type="radio" ></Input>
<P size='15px' weight='bold'>Add Debit/Credit/ATM Card</P>

</Div>

<Div styles={'flex-direction:row;'} loc='flex-start'>
<Input type="radio"></Input>
<P size='15px' weight='bold'>Net banking</P>

</Div> <Div styles={'flex-direction:row;'} loc='flex-start'>
<Input type="radio"></Input>
<P size='15px' weight='bold'>UPI Id</P>

</Div> <Div styles={'flex-direction:row;'} loc='flex-start'>
<Input type="radio"></Input>
<P size='15px' weight='bold'>Pay on Delivery</P>

</Div>
</form>
</PaymentBox>
<P size='25px' weight='bold'>Review Your Order</P>

<PaymentBox styles={'justify-content:space-around;align-items:center;'}>

{popup?<Popup>
    <P size='25px' weight='bold' styles={'border-bottom:1px solid gray;text-align:center;'}>Verify Your Account</P>
    <Div styles={'flex-direction:column;align-items:center;'}>
    <P size='25px' styles={''}>Enter Your OTP</P>

    <Input type='text' styles={'margin-left:10px;'}></Input>
    <Div styles={'width:100%'}>

    <Button width="40%"styles={'background-color:green;'} onClick={confirmOrderHandler}>Confirm</Button>
    <Button width="40%" styles={'background-color:red; '} onClick={orderHandler}>Cancel</Button>
    </Div>

    </Div>

</Popup>:null}
<Card>
<P size='20px' weight="bold">Shipping Address</P>
<P size='15px' weight='500' >{Address.fName} {Address.lName}</P>

<P size='15px' weight='500' >{Address.Address1} {Address.Address2} {Address.Address3} {Address.city} {Address.state} {Address.zipCode} {Address.country}</P>
<P size='15px' weight='500' >Phone: {Address.phone}</P>
</Card>

<Card>
<P size='20px' weight="bold">Payment Method</P>
<P size='15px' weight='500' >Pay on delivery(Cash)</P>
<P size='15px' weight={'bold'} >Gift cards, Voucher &amp; Promotional codes</P>

<Div styles={'flex-direction:column; align-items:flex-start;margin-left:10px'} >
        <Input type='text'></Input>
        <Button width="40%" >Apply</Button>
       
</Div>
</Card>
<Card>
<Button onClick={orderHandler}>Place Your Order</Button>
<P size='15px' weight={'bold'} >Order summary</P>
<Div styles={'justify-content:space-between;'}>
<P s ize='15px' styles={"margin:0px"} >Items:</P>
<P size='15px' styles={"margin:0px"} >{OrderSummary.items}</P>
</Div>
<Div styles={'justify-content:space-between;'}>
<P s styles={'justify-content:space-between;'}ize='15px' styles={"margin:0px"} >Delivery:</P>
<P size='15px' styles={"margin:0px"} >{OrderSummary.Delivery}</P>
</Div >
<Div styles={'justify-content:space-between;'}>
<P s ize='15px' styles={"margin:0px"} >Total:</P>
<P size='15px' styles={"margin:0px"} >{OrderSummary.Total}</P>
</Div>
<Div styles={'justify-content:space-between;'}>
<P s ize='15px' styles={"margin:0px"} >Savings:</P>
<P size='15px' styles={"margin:0px"} >-{OrderSummary.savings}</P>
</Div>
<Div styles={'border-top:1px solid red;padding-top:15px;'}>
<P size='18px' weight='bold'  styles={"color:red;margin:0px"} >Order Total</P>
<P size='18px' weight='bold' styles={"margin:0px"} >{OrderSummary.OrderTotal} (-{((OrderSummary.savings/OrderSummary.items)*100).toFixed(0)}%)</P>
</Div>

</Card>
</PaymentBox>
<P size='25px' weight='bold'>Product Description</P>

<PaymentBox styles={'flex-direction:column '}>
{Cart.items.map((product)=>{
    console.log(product)
       return  <ProductComponent list={true} desc={true} product={product} order={true} fav={true} />
    
})}
</PaymentBox>
</MainWrapper>
        </Wrapper>
         
    );
}
export default Payment
