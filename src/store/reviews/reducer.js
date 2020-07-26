import {FETCH_REVIEW} from './action'


const initialState={
    reviews:[]
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
            case FETCH_REVIEW:
                return {
                    ...state,
                    reviews:action.payload
                }
           
            default:
                return state
                
    }


}
export default reducer
