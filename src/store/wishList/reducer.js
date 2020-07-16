import {FETCH_WISHLIST} from './action'

const initialState={
wishList:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
            case FETCH_WISHLIST:
                return {
                    ...state,
                    wishList:action.payload
                }
           
            default:
                return state
                
    }


}
export default reducer