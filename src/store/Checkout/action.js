export const SAVE_ADDRESS='SAVE_ADDRESS';
export const SAVE_ORDER_DETAILS='SAVE_ORDER_DETAILS';


const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbnNoZG9uOTkjZ21haWwuY29tIiwidXNlcklkIjoiNWYxYTA1YTBlMWI2MjgyZDJjZTIyNzBlIiwiaWF0IjoxNTk1NjMyMjc4LCJleHAiOjE1OTU2NDMwNzh9.C8WXGVXe4KbGqBOcK7y62QCUW7tvHLvqdJV0JjdRqls'

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