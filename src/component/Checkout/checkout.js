import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import {Link,Route} from 'react-router-dom'
import Payment from './payment'

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

const Checkout=(props)=>{
    return(

        <Wrapper>
            <MainWrapper>
                <P size='25px' weight='bold'>Select Dilevery Address</P>
                <P styles={'& a{text-decoration:none;}'}>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can <Link to="/">enter a new delivery address. </Link> </P>
                <P size='20px' weight='500' >Saved Address</P>
                <AddressBox>
                <Card>
                <P size='20px'>Vansh Tandon</P>
                <P size='15px' weight='500' styles={'color:gray'}>Rudra Hostel(180) Room No. 214 GB Pant Institute of Engineering and Technology Ghurdauri PAURI, UTTARAKHAND 246194 India</P>
                <Button >Deliver to This Address</Button>
                <Div >

                <Button width="40%"styles={'background-color:green;'}>Edit</Button>
                <Button width="40%" styles={'background-color:red; '}>Delete</Button>
                </Div>
             
                </Card>
                <Card>
                <P size='20px'>Vansh Tandon</P>
                <P size='15px' weight='500' styles={'color:gray'}>Rudra Hostel(180) Room No. 214 GB Pant Institute of Engineering and Technology Ghurdauri PAURI, UTTARAKHAND 246194 India</P>
                <Button >Deliver to This Address</Button>
                <Div >

                <Button width="40%"styles={'background-color:green;'}>Edit</Button>
                <Button width="40%" styles={'background-color:red; '}>Delete</Button>
                </Div>
             
                </Card>
                </AddressBox>
                </MainWrapper>
            
        </Wrapper>
    );
}
export default Checkout
