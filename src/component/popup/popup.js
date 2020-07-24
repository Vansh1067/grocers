import React, { useState } from 'react'
import styled from 'styled-components'
import { useStore, useDispatch } from 'react-redux'
import * as Action from '../../store/auth/action'
const Button=styled.button`
background-color:orange;
font-weight:500;
width:${props=>props.width||'100%'};
border:none;
padding:5px;
border-radius:8px;

outline:none;
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
const Popup=styled.div`
box-shadow:0px 5px 10px black;
background-color:white;
position:fixed;
width:300px;
z-index:15;
top:40vh;
`
const P=styled.div`
font-size:${props=>props.size||'15px'};
font-weight:${props=>props.weight||'normal'};
text-align:${props=>props.loc||'left'};
margin:10px;
${props=>props.styles};
`
const POPUP=(props)=>{
    const store=useStore()
const dispatch=useDispatch()
   const dismisHandler=()=>{
       const state=store.getState().auth
       if(!state.isAuth){
        dispatch(Action.popup(state.toggleOpen))

       }
   }
    return <Div loc="center" >
        
        <Popup>
    <P size='25px' weight='500' styles={'border-bottom:1px solid gray;text-align:center;'}>Please Login first</P>
    <Div styles={'flex-direction:column;align-items:center;'}>
    
    <Div styles={'width:100%'}>
    
    <Button width="40%" styles={'background-color:green;font-size:20px'} onClick={dismisHandler}>Okay</Button>
 
    </Div>
    
    </Div>
    
    </Popup>
    </Div>
}
export default POPUP