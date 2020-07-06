import {FETCH_CART} from './action'

const initialState={

cart:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        
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