export const SAVE_ADDRESS='SAVE_ADDRESS';
export const SAVE_ORDER_DETAILS='SAVE_ORDER_DETAILS';

export const saveAddress=(address)=>{
    console.log(address)
        return dispatch=>{
            setTimeout(()=>{
                dispatch({type:SAVE_ADDRESS,payload:address})
            },1000)
        }
}
export const saveOrderDetails=(details)=>{
    console.log(details)

    return dispatch=>{
        setTimeout(()=>{
            dispatch({type:SAVE_ORDER_DETAILS,payload:details})
        },1000)
    }
}