import {FETCH_CART,ADD_TO_CART,DELETE_FROM_CART} from './action'

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
            case ADD_TO_CART:
                const product=action.payload;
                const updatedCart=state.cart;
                updatedCart.concat(product)
                    return {
                        ...state,
                        cart:{...updatedCart}
                    }
            case DELETE_FROM_CART:
                const id=action.payload;
                console.log(id)
                const updatedCarts=state.cart;
                const CART=updatedCarts.filter((p,i)=>p.id!==id);
                console.log(updatedCarts)
                return {
                     ...state,
                    cart:CART
                }       
            default:
                return state
                
    }


}
export default reducer