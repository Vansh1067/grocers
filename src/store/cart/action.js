export const FETCH_CART='FETCH_CART';
export const ADD_TO_CART='ADD_TO_CART';
export const DELETE_FROM_CART='DELETE_FROM_CART';


const cart={items:[],totalAmount:0}
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6bnVsbCwidXNlcklkIjoiNWYwZTJhNmNkMmNjNDMyM2Q0YTMzNzQxIiwiaWF0IjoxNTk1MjgyNDAwLCJleHAiOjE1OTUyOTMyMDB9.phpTYN7ivK0l9zkOjFOc7xfvNEH4YcM-aZVVttNXBmw'
export const fetchCart=()=>{
    return (dispatch)=>{
        fetch('http://localhost:3001/cart',{
            method:'get',
            headers:{
                'Authorization':token
            }
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

    const Product={...product};
    console.log(Product)
    const Amts=+Amt 
   
    return (dispatch)=>{
       
        fetch('http://localhost:3001/cart/'+Product._id,{
            method:'post',
            body:JSON.stringify({Amt:Amts,qty,MRP:Product.MRP,sellingPrice:Product.sellingPrice}),
            headers:{
                'Authorization':token,
                'Content-Type': 'application/json'
            },
        }).then(response=>{
           return response.json()
        }).then(Cart=>{
          console.log(Cart.cart)
            dispatch({type:ADD_TO_CART,payload:Cart.cart});
    
        })
    
       
    }
}
export const DeleteFromCart=(id)=>{
    
    return (dispatch)=>{
        fetch('http://localhost:3001/cart/'+id,{
            method:'delete',
            body:JSON.stringify({id}),
            headers:{
                'Authorization':token,
                'Content-Type': 'application/json'
            },
        }).then(response=>{
           return response.json()
        }).then(Cart=>{
          console.log(Cart.cart)
          dispatch({type:DELETE_FROM_CART,payload:Cart.cart})

    
        })
    
     
    }
}