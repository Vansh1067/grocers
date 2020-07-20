

export const FETCH_WISHLIST='FETCH_WISHLIST';
export const ADD_PRODUCT_TO_WISHLIST='ADD_PRODUCT_TO_WISHLIST';
export const REMOVE_PRODUCT_FROM_WISHLIST='REMOVE_PRODUCT_FROM_WISHLIST';
export const FETCH_USER_DATA='FETCH_USER_DATA'




const product=[{id:0,title:'Baby Care',price:25,discPrice:30,fav:true},{id:1,title:'Banana',price:15,discPrice:15,fav:false},{id:2,title:'Oil',price:250,discPrice:300,fav:true},{id:3,title:'Chips',price:5,discPrice:5,fav:true},{id:4,title:'Baby Care',price:25,discPrice:35,fav:false},{id:5,title:'Banana',price:15,discPrice:25,fav:true},{id:6,title:'Oil',price:50,discPrice:75,fav:false},{id:7,title:'Chips',price:5,discPrice:15,fav:false}]

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6bnVsbCwidXNlcklkIjoiNWYwZTJhNmNkMmNjNDMyM2Q0YTMzNzQxIiwiaWF0IjoxNTk1MjgyNDAwLCJleHAiOjE1OTUyOTMyMDB9.phpTYN7ivK0l9zkOjFOc7xfvNEH4YcM-aZVVttNXBmw'

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
const user={
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

}
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
