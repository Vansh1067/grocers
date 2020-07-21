export const SAVE_ADDRESS='SAVE_ADDRESS';
export const SAVE_ORDER_DETAILS='SAVE_ORDER_DETAILS';
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6bnVsbCwidXNlcklkIjoiNWYwZTJhNmNkMmNjNDMyM2Q0YTMzNzQxIiwiaWF0IjoxNTk1MjkxNTUyLCJleHAiOjE1OTUzMDIzNTJ9.0d1qL_QSAu9Jfp-jRCuPbCpN3xtAcpk0-z4UFjRjRfI'

export const saveAddress=(address)=>{
    console.log(address)
        return dispatch=>{
            if(address.New){
                fetch('http://localhost:3001/account/add',{
                    method:'put',
                    body:JSON.stringify(address),
                    headers:{
                        'Authorization':token
                    },
                    
                }).then(res=>{

                    dispatch({type:SAVE_ADDRESS,payload:address})
        
                }).catch(err=>console.log(err))
            }else{
                dispatch({type:SAVE_ADDRESS,payload:address})

            }
            
           
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