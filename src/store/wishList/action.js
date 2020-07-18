

export const FETCH_WISHLIST='FETCH_WISHLIST';
export const ADD_PRODUCT_TO_WISHLIST='ADD_PRODUCT_TO_WISHLIST';
export const REMOVE_PRODUCT_FROM_WISHLIST='REMOVE_PRODUCT_FROM_WISHLIST';





const product=[{id:0,title:'Baby Care',price:25,discPrice:30,fav:true},{id:1,title:'Banana',price:15,discPrice:15,fav:false},{id:2,title:'Oil',price:250,discPrice:300,fav:true},{id:3,title:'Chips',price:5,discPrice:5,fav:true},{id:4,title:'Baby Care',price:25,discPrice:35,fav:false},{id:5,title:'Banana',price:15,discPrice:25,fav:true},{id:6,title:'Oil',price:50,discPrice:75,fav:false},{id:7,title:'Chips',price:5,discPrice:15,fav:false}]

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6bnVsbCwidXNlcklkIjoiNWYwZTJhNmNkMmNjNDMyM2Q0YTMzNzQxIiwiaWF0IjoxNTk1MTAzMjUyLCJleHAiOjE1OTUxMTQwNTJ9.r99RvewWq2-5vHizzL_aYvpNq8CuR4s2X_RTr7QDeDA'

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
      /*   setTimeout(()=>{
           
            dispatch({type:FETCH_WISHLIST,payload:Products})
5f0e1b7422e32f30506405ca
5f0e1b867b3e525fb01ce67a
5f0e1b947657bb49ec81def9
        },1000) */
    }
}
