import {LOGIN,SIGNUP, USERDATA, POPUP, AUTO_LOGIN, AUTO_LOGOUT,LOGOUT} from './action'

const initialState={
isAuth:false,
token:'',
expiresIn:'',
toggleOpen:false,
userId:''

}

const reducer=(state=initialState,action)=>{
    switch(action.type){
            case LOGIN:
               /*  var d = new Date();
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                var expires = "expires=" + d.toGMTString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; */
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
            case AUTO_LOGIN:
                /* if(!action.payload.token){
                    return{
                        ...state,
                        token:null,
                        isAuth:false
                    }
                } */
                return{
                    ...state,
                    token:action.payload.token,
                    isAuth:true
                }
            case LOGOUT:
                return {
                    ...state,
                    token:null,
                    isAuth:false
                }
            case POPUP:
                return {
                    ...state,
                    toggleOpen:!action.payload
                }
               
            default:
                return state
                
    }


}
export default reducer