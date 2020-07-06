import {FETCH_PRODUCT,FETCH_CATEGORIES, FETCH_CART} from './action'

const initialState={
product:[],
categories:[],
cart:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
            case FETCH_PRODUCT:
                return {
                    ...state,
                    product:action.payload
                }
            case FETCH_CATEGORIES:
                return {
                    ...state,
                    categories:action.payload
                }
            case FETCH_CART:
                    return {
                        ...state,
                        cart:action.payload
                    }
            default:
                return state
                
    }


}
export default reducer