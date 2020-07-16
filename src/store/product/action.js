

export const FETCH_PRODUCT='FETCH_PRODUCT';
export const FETCH_CATEGORIES='FETCH_CATEGORIES';
export const FETCH_PRODUCT_DETAIL='FETCH_PRODUCT_DETAIL';
export const FETCH_FAV_PRODUCT='FETCH_FAV_PRODUCT';



const product=[{id:0,title:'Baby Care',price:25,discPrice:30,fav:true},{id:1,title:'Banana',price:15,discPrice:15,fav:false},{id:2,title:'Oil',price:250,discPrice:300,fav:true},{id:3,title:'Chips',price:5,discPrice:5,fav:true},{id:4,title:'Baby Care',price:25,discPrice:35,fav:false},{id:5,title:'Banana',price:15,discPrice:25,fav:true},{id:6,title:'Oil',price:50,discPrice:75,fav:false},{id:7,title:'Chips',price:5,discPrice:15,fav:false}]
const categories=[{id:1,title:'Baby Care',cat:true},{id:2,title:'Beverages',cat:true},{id:3,title:'Cleaning ',cat:true},{id:4,title:'Daily Needs',cat:true},{id:5,title:'Dairy & Bakery',cat:true},{id:6,title:'Fruits',cat:true},{id:7,title:'Oil & Spices',cat:true},{id:8,title:'Personal Care',cat:true},{id:9,title:'Rice Grains',cat:true},{id:10,title:'Snaks & Foods',cat:true}]

export const fetchProduct=()=>{
    return (dispatch)=>{
        fetch('http://localhost:3001/')
        .then(response=>{
           
                return response.json()
           
           
        })
        .then(prod=>{
            console.log(prod.product)
            dispatch({type:FETCH_PRODUCT,payload:prod.product})

        })
       
    }
}
export const fetchCategorie=(id)=>{
    return (dispatch)=>{
        fetch('http://localhost:3001/categories'+id)
        .then(response=>{
           return response.json()
        })
        .then(data=>{
            dispatch({type:FETCH_CATEGORIES,payload:data.categories})
           

        })
      
    }
}
export const fetchCategories=()=>{
    return (dispatch)=>{
        fetch('http://localhost:3001/categories')
        .then(response=>{
           return response.json()
        })
        .then(data=>{
            dispatch({type:FETCH_CATEGORIES,payload:data.categories})
           

        })
      
    }
}
export const fetchProductDetail=(id)=>{
    return dispatch=>{
        fetch('http://localhost:3001/product/'+id)
        .then(response=>{
           return response.json()
           })
        .then(prod=>{
            console.log(prod.product)
           dispatch({type:FETCH_PRODUCT_DETAIL,payload:prod.product})
           console.log("Hello")
        }).catch(err=>{console.log(err)})
    }
    
   
}
export const fetchFavProduct=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:FETCH_FAV_PRODUCT,payload:categories})

        },1000)
    }
}