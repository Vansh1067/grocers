export const FETCH_PRODUCT='FETCH_PRODUCT';
export const FETCH_CATEGORIES='FETCH_CATEGORIES';
export const FETCH_CART='FETCH_CART';


const product=[{title:'Baby Care',price:25,discPrice:30},{title:'Banana',price:15},{title:'Oil',price:250},{title:'Chips',price:5},{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Oil',price:250},{title:'Chips',price:5}]
const categories=[{title:'Baby Care'},{title:'Banana'},{title:'Oil'},{title:'Chips'},{title:'Baby Care'},{title:'Banana'},{title:'Oil'},{title:'Chips'}]
const cart=[{title:'Baby Care',price:25,discPrice:30},{title:'Banana',price:15},{title:'Oil',price:250,discPrice:500}]

export const fetchProduct=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:FETCH_PRODUCT,payload:product})

        },1000)
    }
}
export const fetchCategories=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:FETCH_CATEGORIES,payload:categories})

        },1000)
    }
}
export const fetchCart=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
           
            dispatch({type:FETCH_CART,payload:cart})

        },1000)
    }
}