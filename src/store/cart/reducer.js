import {FETCH_CART,ADD_TO_CART,DELETE_FROM_CART} from './action'

const initialState={

cart:{items:[],totalAmount:0}
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        
            case FETCH_CART:
              
                    return {
                        ...state,
                        cart:{
                            ...state.cart,
                            items:action.payload.items,
                            totalAmount:action.payload.totalAmount
                        }
                    }
            case ADD_TO_CART:
            
                    return {
                        ...state,
                        cart:{
                            ...state.cart,
                            items:action.payload.items,
                            totalAmount:action.payload.totalAmount
                        }
                    }
            case DELETE_FROM_CART:
              
                return {
                    ...state,
                    cart:{
                        ...state.cart,
                        items:action.payload.items,
                        totalAmount:action.payload.totalAmount
                    }
                    }
            default:
                return state
                
    }


}
export default reducer