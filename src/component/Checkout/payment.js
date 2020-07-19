import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import img from '../../assest/Capture1.PNG' 
import ProductComponent from '../categoriesCardComponent/productCardComponent/productCardComponent'
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
const Payment=(props)=>{
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


<Card>
<P size='20px' weight="bold">Shipping Address</P>
<P size='15px' weight='500' >Rudra Hostel(180) Room No. 214 GB Pant Institute of Engineering and Technology Ghurdauri PAURI, UTTARAKHAND 246194 India</P>
<P size='15px' weight='500' >Phone: 9760300288</P>
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
<Button>Place Your Order</Button>
<P size='15px' weight={'bold'} >Order summary</P>
<Div styles={'justify-content:space-between;'}>
<P s ize='15px' styles={"margin:0px"} >Items:</P>
<P size='15px' styles={"margin:0px"} >100</P>
</Div>
<Div styles={'justify-content:space-between;'}>
<P s styles={'justify-content:space-between;'}ize='15px' styles={"margin:0px"} >Delivery:</P>
<P size='15px' styles={"margin:0px"} >10</P>
</Div >
<Div styles={'justify-content:space-between;'}>
<P s ize='15px' styles={"margin:0px"} >Total:</P>
<P size='15px' styles={"margin:0px"} >110</P>
</Div>
<Div styles={'justify-content:space-between;'}>
<P s ize='15px' styles={"margin:0px"} >Savings:</P>
<P size='15px' styles={"margin:0px"} >-20</P>
</Div>
<Div styles={'border-top:1px solid red;padding-top:15px;'}>
<P size='20px' weight='bold'  styles={"color:red;margin:0px"} >Order Total</P>
<P size='20px' weight='bold' styles={"margin:0px"} >90 (-22%)</P>
</Div>

</Card>
</PaymentBox>
</MainWrapper>
        </Wrapper>
         
    );
}
export default Payment
