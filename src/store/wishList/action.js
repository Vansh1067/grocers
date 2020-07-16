

export const FETCH_WISHLIST='FETCH_WISHLIST';
export const ADD_PRODUCT_TO_WISHLIST='ADD_PRODUCT_TO_WISHLIST';
export const REMOVE_PRODUCT_FROM_WISHLIST='REMOVE_PRODUCT_FROM_WISHLIST';





const product=[{id:0,title:'Baby Care',price:25,discPrice:30,fav:true},{id:1,title:'Banana',price:15,discPrice:15,fav:false},{id:2,title:'Oil',price:250,discPrice:300,fav:true},{id:3,title:'Chips',price:5,discPrice:5,fav:true},{id:4,title:'Baby Care',price:25,discPrice:35,fav:false},{id:5,title:'Banana',price:15,discPrice:25,fav:true},{id:6,title:'Oil',price:50,discPrice:75,fav:false},{id:7,title:'Chips',price:5,discPrice:15,fav:false}]


export const fetchWishlist=()=>{
    const Products=product.filter((prod)=>prod.fav)
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:FETCH_WISHLIST,payload:Products})

        },1000)
    }
}
