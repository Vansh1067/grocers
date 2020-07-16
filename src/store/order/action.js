export const FETCH_ORDER='FETCH_ORDER';
export const ADD_ORDER='ADD_ORDER';
export const REMOVE_ORDER='REMOVE_ORDER';
export const FETCH_ORDER_DETAIL='FETCH_ORDER_DETAIL';


const Orders=[{id:0,title:'Banana',price:20,qty:5,date:'12-07-2019',status:'Confirm'},{id:1,title:'Chips',price:10,qty:3,date:'1-10-2019',status:'Cancel'},{id:2,title:'Chocolate',price:100,qty:1,date:'1-10-2019',status:'Delivered'}]
export const fetchOrder=()=>{
    return dispatch=>{
            setTimeout(()=>{
                dispatch({type:FETCH_ORDER,payload:Orders})
            },1000)
    }
}
export const fetchDetail=(id)=>{
    const order=Orders.find((order)=>order.id===id)
    return dispatch=>{
            setTimeout(()=>{
                dispatch({type:FETCH_ORDER_DETAIL,payload:order})
            },1000)
    }
}