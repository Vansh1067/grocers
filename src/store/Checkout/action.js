export const SAVE_ADDRESS='SAVE_ADDRESS';
export const SAVE_ORDER_DETAILS='SAVE_ORDER_DETAILS';


const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6bnVsbCwidXNlcklkIjoiNWYwZTJhNmNkMmNjNDMyM2Q0YTMzNzQxIiwiaWF0IjoxNTk1MzYyNzUyLCJleHAiOjE1OTUzNzM1NTJ9.WSZvTw_PDc5VnBLRI_tVCdH-et6sW57e4aRz92fH47U'

export const saveAddress=(address)=>{
    const ADDRESS={...address,id:Math.random()}
        return dispatch=>{
            if(ADDRESS.New){
                fetch('http://localhost:3001/account/add',{
                    method:'put',
                    body:JSON.stringify(ADDRESS),
                    headers:{
                        'Authorization':token,
                        'Content-Type': 'application/json'
                    },
                    }).then(res=>{

                    dispatch({type:SAVE_ADDRESS,payload:ADDRESS})
        
                }).catch(err=>console.log(err))
            }else{
                dispatch({type:SAVE_ADDRESS,payload:ADDRESS})
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

/* {
    "Address1": "House No. 4",
"Address2": "satti Street",
"Address3": "Near Badshah Hotel",
"city": "Roorkee",
"country": "India",
"fName": "vansh",
"lName": "Tandon",
"phone": "9760300288",
"state": "uttrakhand",
"zipCode": "247667"
} */
/* {
    "email":"9760300288",
    "password":"12345"
} */