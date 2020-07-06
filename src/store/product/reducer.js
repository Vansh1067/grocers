import {FETCH_PRODUCT,FETCH_CATEGORIES} from './action'

const initialState={
product:[],
categories:[],

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
           
            default:
                return state
                
    }


}
export default reducer