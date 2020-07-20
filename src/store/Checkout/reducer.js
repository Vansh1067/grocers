import {SAVE_ADDRESS,SAVE_ORDER_DETAILS} from './action'

const initialState={

Address:{},
OrderSummary:{items:0,Delivery:0,Total:0,savings:0,OrderTotal:0}
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        
            case SAVE_ADDRESS:
              
                    return {
                        ...state,
                        Address:action.payload
                    }
            case SAVE_ORDER_DETAILS:
                
                    return {
                        ...state,
                        OrderSummary:{
                           ...state.OrderSummary,
                           items: action.payload.items,
                           Delivery: action.payload.Delivery,
                           Total: action.payload.Total,
                           savings: action.payload.savings,
                           OrderTotal: action.payload.OrderTotal,


                        }
                    }
           
            default:
                return state
                
    }


}
export default reducer