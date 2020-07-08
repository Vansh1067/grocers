export const LOGIN='LOGIN';
export const SIGNUP='SIGNUP';
export const LOGOUT='LOGOUT';

export const login=(user)=>{
        return (dispatch)=>{
        setTimeout(()=>{
            console.log(user,'login')
            dispatch({type:LOGIN,payload:user})

        },1000)
    }
}
export const signup=(user)=>{
    return (dispatch)=>{
    setTimeout(()=>{
        console.log(user,'signup')
        dispatch({type:LOGIN,payload:user})

    },1000)
}
}