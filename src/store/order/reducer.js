import {FETCH_ORDER,FETCH_ORDER_DETAIL} from './action'

const initialState={
orders:[],
orderDetail:{}
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
            case FETCH_ORDER:
                return {
                    ...state,
                    orders:action.payload
                }
            case FETCH_ORDER_DETAIL:
                return {
                    ...state,
                    orderDetail:action.payload
                }
            default:
                return state
                
    }


}
export default reducer