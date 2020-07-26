
import setHeaders from '../reducer'

export const FETCH_WISHLIST='FETCH_WISHLIST';
export const ADD_PRODUCT_TO_WISHLIST='ADD_PRODUCT_TO_WISHLIST';
export const REMOVE_PRODUCT_FROM_WISHLIST='REMOVE_PRODUCT_FROM_WISHLIST';
export const FETCH_USER_DATA='FETCH_USER_DATA'
export const DELETE_ADDRESS='DELETE_ADDRESS';
export const EDIT_ADDRESS='EDIT_ADDRESS';





const product=[{id:0,title:'Baby Care',price:25,discPrice:30,fav:true},{id:1,title:'Banana',price:15,discPrice:15,fav:false},{id:2,title:'Oil',price:250,discPrice:300,fav:true},{id:3,title:'Chips',price:5,discPrice:5,fav:true},{id:4,title:'Baby Care',price:25,discPrice:35,fav:false},{id:5,title:'Banana',price:15,discPrice:25,fav:true},{id:6,title:'Oil',price:50,discPrice:75,fav:false},{id:7,title:'Chips',price:5,discPrice:15,fav:false}]

let x = document.cookie;

const token=`${x.split('=')[1]}`
 


export const fetchWishlist=()=>{
    if(!token){
        return
    }
    const Products=product.filter((prod)=>prod.fav)
    return (dispatch)=>{
        fetch('http://localhost:3001/account/wishlist',{
            method:'get',
            headers:setHeaders({'Content-Type': 'application/json'})

        }).then(response=>{
            return response.json()
        }).then(products=>{
                console.log(products.product)
            dispatch({type:FETCH_WISHLIST,payload:products.product})
        }).catch(err=>{console.log(err)})
    
    }
}

export const fetchUserData=()=>{
    if(!token){
        return
    }
    return (dispatch)=>{
        fetch('http://localhost:3001/account/',{
            method:'get',
            headers:setHeaders({'Content-Type': 'application/json'})

        }).then(response=>{
            return response.json()
        }).then(userData=>{
                console.log(userData)
                dispatch({type:FETCH_USER_DATA,payload:userData.user})
            
        }).catch(err=>{console.log(err)})
    
    }
}
export const deleteAddress=(addressId)=>{
    if(!token){
        return
    }
        return dispatch=>{
           
                fetch('http://localhost:3001/account/add',{
                    method:'DELETE',
                    body:JSON.stringify({id:addressId}),
                    headers:setHeaders({'Content-Type': 'application/json'})
                    ,
                    }).then(res=>{
                        console.log(res)
                    dispatch({type:DELETE_ADDRESS,payload:addressId})
        
                }).catch(err=>console.log(err))
           
            }
}
export const updateAddress=(address)=>{
    console.log(address)
    if(!token){
        return
    }
    alert("save")

        return dispatch=>{
           
                fetch('http://localhost:3001/account/add',{
                    method:'put',
                    body:JSON.stringify(address),
                    headers:setHeaders({'Content-Type': 'application/json'})
                    ,
                    }).then(res=>{
                        dispatch(fetchUserData())
                }).catch(err=>console.log(err))
           
            }
}