export const FETCH_CART='FETCH_CART';
export const ADD_TO_CART='ADD_TO_CART';
export const DELETE_FROM_CART='DELETE_FROM_CART';


const cart=[{id:0,title:'Baby Care',price:25,discPrice:30,status:"Availabel",Qty:1},{id:1,title:'Banana',Qty:1,discPrice:20,price:15,status:"Availabel"},{id:2,Qty:1,title:'Oil',price:250,discPrice:500,status:"Availabel"}]

export const fetchCart=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:FETCH_CART,payload:cart})

        },1000)
    }
}
export const AddToCart=(product,qty)=>{
    console.log(product)
    const Product={...product};
   Product.Qty=qty;
   Product.status="availabel";
   Product.discPrice=0;

    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:ADD_TO_CART,payload:Product})

        },1000)
    }
}
export const DeleteFromCart=(id)=>{
    
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:DELETE_FROM_CART,payload:id})

        },1000)
    }
}