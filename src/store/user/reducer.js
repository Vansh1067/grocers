import {FETCH_WISHLIST,FETCH_USER_DATA} from './action'

const initialState={
wishList:[],
userData:{}
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
            case FETCH_WISHLIST:
                return {
                    ...state,
                    wishList:action.payload
                }
                case FETCH_USER_DATA:
                    return {
                        ...state,
                        userData:action.payload
                    }
            default:
                return state
                
    }


}
export default reducer