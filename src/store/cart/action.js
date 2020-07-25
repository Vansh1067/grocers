
import setHeaders from '../reducer'
export const FETCH_CART='FETCH_CART';
export const ADD_TO_CART='ADD_TO_CART';
export const DELETE_FROM_CART='DELETE_FROM_CART';


const cart={items:[],totalAmount:0}
let x = document.cookie;

const token=`${x.split('=')[1]}`

export const fetchCart=()=>{


    if(!token){
        return
    }
   
    return (dispatch)=>{
        fetch('http://localhost:3001/cart',{
            method:'get',
            headers:setHeaders({'Content-Type': 'application/json'})
        }).then(response=>{
           return response.json()
        }).then(Cart=>{
            let CART={items:[],totalAmount:0}
            if(Cart.cart){
                CART=Cart.cart.cart
            }
            dispatch({type:FETCH_CART,payload:CART})

        })
      
       
}}
export const AddToCart=(product,qty,Amt)=>{


    if(!token){
        return
    }
    const Product={...product};
    console.log(Product)
    const Amts=+Amt 
   
    return (dispatch)=>{
       
        fetch('http://localhost:3001/cart/'+Product._id,{
            method:'post',
            body:JSON.stringify({Amt:Amts,qty,MRP:Product.MRP,sellingPrice:Product.sellingPrice}),
            headers:setHeaders({'Content-Type': 'application/json'})
        }).then(response=>{
           return response.json()
        }).then(Cart=>{
          console.log(Cart.cart)
            dispatch({type:ADD_TO_CART,payload:Cart.cart});
    
        })
    
       
    }
}
export const DeleteFromCart=(id)=>{


    if(!token){
        return
    }
    return (dispatch)=>{
        fetch('http://localhost:3001/cart/'+id,{
            method:'delete',
            body:JSON.stringify({id}),
            headers:setHeaders({'Content-Type': 'application/json'}),
        }).then(response=>{
           return response.json()
        }).then(Cart=>{
          console.log(Cart.cart)
          dispatch({type:DELETE_FROM_CART,payload:Cart.cart})

    
        })
    
     
    }
}