import {LOGIN,SIGNUP, USERDATA} from './action'

const initialState={
isAuth:false,
token:'',
expiresIn:'',
userData:{}
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
            case LOGIN:
                
                    document.cookie=`token=${action.payload.token};Max-Age=${action.payload.expiresIn}`
                    return {
                        ...state,
                        token:action.payload.token,
                        expiresIn:action.payload.expiresIn,
                        isAuth:true
                    }
            case SIGNUP:
                 return {
                    ...state,
                    user:action.payload,
                    isAuth:true
                }
            case USERDATA:
                return {
                       ...state,
                       userData:action.payload,
                 
               }
               
            default:
                return state
                
    }


}
export default reducer