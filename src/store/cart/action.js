export const FETCH_CART='FETCH_CART';

const cart=[{title:'Baby Care',price:25,discPrice:30},{title:'Banana',price:15},{title:'Oil',price:250,discPrice:500}]

export const fetchCart=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:FETCH_CART,payload:cart})

        },1000)
    }
}