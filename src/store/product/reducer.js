import {FETCH_PRODUCT,FETCH_CATEGORIES,FETCH_PRODUCT_DETAIL} from './action'

const initialState={
product:[],
categories:[],
productDetail:{}
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
            case FETCH_PRODUCT_DETAIL:{

                console.log(action.payload)
                  return {
                      ...state,
                      productDetail:action.payload
                  }

            }
            default:
                return state
                
    }


}
export default reducer