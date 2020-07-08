

export const FETCH_PRODUCT='FETCH_PRODUCT';
export const FETCH_CATEGORIES='FETCH_CATEGORIES';
export const FETCH_PRODUCT_DETAIL='FETCH_PRODUCT_DETAIL';


const product=[{id:0,title:'Baby Care',price:25,discPrice:30},{id:1,title:'Banana',price:15,discPrice:15},{id:2,title:'Oil',price:250,discPrice:300},{id:3,title:'Chips',price:5,discPrice:5},{id:4,title:'Baby Care',price:25,discPrice:35},{id:5,title:'Banana',price:15,discPrice:25},{id:6,title:'Oil',price:50,discPrice:75},{id:7,title:'Chips',price:5,discPrice:15}]
const categories=[{id:1,title:'Baby Care',cat:true},{id:2,title:'Beverages',cat:true},{id:3,title:'Cleaning ',cat:true},{id:4,title:'Daily Needs',cat:true},{id:5,title:'Dairy & Bakery',cat:true},{id:6,title:'Fruits',cat:true},{id:7,title:'Oil & Spices',cat:true},{id:8,title:'Personal Care',cat:true},{id:9,title:'Rice Grains',cat:true},{id:10,title:'Snaks & Foods',cat:true}]

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
export const fetchProductDetail=(id)=>{
    const prod=product.find((product)=>product.id===id);
    console.log(prod)
    return (dispatch)=>{
        setTimeout(()=>{
           dispatch({type:FETCH_PRODUCT_DETAIL,payload:prod})
            },1000)
    }
}
