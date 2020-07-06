export const FETCH_CART='FETCH_CART';
export const ADD_TO_CART='ADD_TO_CART';
export const DELETE_FROM_CART='DELETE_FROM_CART';


const cart=[{id:0,title:'Baby Care',price:25,discPrice:30,status:"Availabel"},{id:1,title:'Banana',discPrice:20,price:15,status:"Availabel"},{id:2,title:'Oil',price:250,discPrice:500,status:"Availabel"}]

export const fetchCart=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:FETCH_CART,payload:cart})

        },1000)
    }
}
export const AddToCart=(product)=>{
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:ADD_TO_CART,payload:product})

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