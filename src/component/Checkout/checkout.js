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
const Input=styled.input`
padding:3px;
width:250px;
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
                <P size='20px' weight='500' >Add New Address</P>
                <P styles={'& a{text-decoration:none;}'}>Be sure to click "Deliver to this address" when you've finished. </P>
                <form>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Full Name</P>

                        <Input type='text'></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Mobile Number</P>
                        <Input type='text'></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Pin Code</P>
                        <Input type='text'></Input>
                    </Div><Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Flat, House no., Building, Apartment: </P>
                        <Input type='text'></Input>
                    </Div><Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Area, Colony, Street, Sector, Village: </P>
                        <Input type='text'></Input>
                    </Div><Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Landmark e.g. near apollo hospital: </P>
                        <Input type='text'></Input>
                    </Div><Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>Town/City: </P>
                        <Input type='text'></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'} >
                        <P size='15px' weight={'bold'}>State: </P>
                        <Input type='text'></Input>
                    </Div>
                    <Div styles={'flex-direction:column; align-items:flex-start;'}>
                    <Button width='max-content;'>Deliver To This Address</Button>

                    </Div>
                </form>
            
                </MainWrapper>
            
        </Wrapper>
    );
}
export default Checkout
