import React,{useState} from 'react';
import productListComponent from '../../../productListComponent/productListComponent';


const Input=(props)=>{
    const [value,setValue]=useState(1);
    const Handler=(e)=>{
        setValue(e.target.value)
        props.qty(e.target.value);

    }
    return <input ref={props.ref} value={value} onChange={(e)=>Handler(e)} type="text" />
}
export default Input