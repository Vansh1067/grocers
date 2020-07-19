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
</MainWrapper>
        </Wrapper>
         
    );
}
export default Payment
