

export const FETCH_WISHLIST='FETCH_WISHLIST';
export const ADD_PRODUCT_TO_WISHLIST='ADD_PRODUCT_TO_WISHLIST';
export const REMOVE_PRODUCT_FROM_WISHLIST='REMOVE_PRODUCT_FROM_WISHLIST';
export const FETCH_USER_DATA='FETCH_USER_DATA'
export const DELETE_ADDRESS='DELETE_ADDRESS';
export const EDIT_ADDRESS='EDIT_ADDRESS';





const product=[{id:0,title:'Baby Care',price:25,discPrice:30,fav:true},{id:1,title:'Banana',price:15,discPrice:15,fav:false},{id:2,title:'Oil',price:250,discPrice:300,fav:true},{id:3,title:'Chips',price:5,discPrice:5,fav:true},{id:4,title:'Baby Care',price:25,discPrice:35,fav:false},{id:5,title:'Banana',price:15,discPrice:25,fav:true},{id:6,title:'Oil',price:50,discPrice:75,fav:false},{id:7,title:'Chips',price:5,discPrice:15,fav:false}]

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6bnVsbCwidXNlcklkIjoiNWYwZTJhNmNkMmNjNDMyM2Q0YTMzNzQxIiwiaWF0IjoxNTk1MzYyNzUyLCJleHAiOjE1OTUzNzM1NTJ9.WSZvTw_PDc5VnBLRI_tVCdH-et6sW57e4aRz92fH47U'


export const fetchWishlist=()=>{
    const Products=product.filter((prod)=>prod.fav)
    return (dispatch)=>{
        fetch('http://localhost:3001/account/wishlist',{
            method:'get',
            headers:{
                'Authorization':token
            }
        }).then(response=>{
            return response.json()
        }).then(products=>{
                console.log(products.product)
            dispatch({type:FETCH_WISHLIST,payload:products.product})
        }).catch(err=>{console.log(err)})
    
    }
}
/* const user={
    fName:'Vansh',
    lName:'Tandon',
    phone:'9760300288',
    email:'vanshtandon1067@gmail.com',
    country:'India',
    city:'Roorkee',
    zipCode:'247667',
    state:'Uttrakhand',
    Address1:'House Number 4. Ram Bhawan Satti Street',
    Address2:'Ruder Hostel Room No. 214 GB pant institute of engineering college pauri '

} */
export const fetchUserData=()=>{
  
    return (dispatch)=>{
        fetch('http://localhost:3001/account/',{
            method:'get',
            headers:{
                'Authorization':token
            }
        }).then(response=>{
            return response.json()
        }).then(userData=>{
                console.log(userData)
                dispatch({type:FETCH_USER_DATA,payload:userData.user})
            
        }).catch(err=>{console.log(err)})
    
    }
}
export const deleteAddress=(addressId)=>{
    console.log(addressId)
        return dispatch=>{
           
                fetch('http://localhost:3001/account/add',{
                    method:'DELETE',
                    body:JSON.stringify({id:addressId}),
                    headers:{
                        'Authorization':token,
                        'Content-Type': 'application/json'
                    },
                    }).then(res=>{
                        console.log(res)
                    dispatch({type:DELETE_ADDRESS,payload:addressId})
        
                }).catch(err=>console.log(err))
           
            }
}
export const updateAddress=(address)=>{
    console.log(address)
        return dispatch=>{
           
                fetch('http://localhost:3001/account/add',{
                    method:'put',
                    body:JSON.stringify(address),
                    headers:{
                        'Authorization':token,
                        'Content-Type': 'application/json'
                    },
                    }).then(res=>{
                        
                }).catch(err=>console.log(err))
           
            }
}