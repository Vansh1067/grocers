import {LOGIN,SIGNUP} from './action'

const initialState={
isAuth:false,
user:{}
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
            case LOGIN:
                    return {
                        ...state,
                        user:action.payload,
                        isAuth:true
                    }
            case SIGNUP:
                 return {
                    ...state,
                    user:action.payload,
                    isAuth:true
                }
            
            default:
                return state
                
    }


}
export default reducer