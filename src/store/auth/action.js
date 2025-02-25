
import * as Action from '../cart/action'
import * as Action2 from '../user/action'


export const LOGIN='LOGIN';
export const SIGNUP='SIGNUP';
export const LOGOUT='LOGOUT';
export const POPUP='POPUP';
export const LOGIN_START="LOGIN_START";
export const LOGIN_END="LOGIN_END";
export const AUTO_LOGIN="AUTO_LOGIN";
export const AUTO_LOGOUT="AUTO_LOGIN";




let TimeOut;

export const autoLogin=()=>{
    let x = document.cookie;
    const token=x.split('=')[1]
    return (dispatch)=>{
 
        if(token){
  

            dispatch({type:AUTO_LOGIN,payload:{token:token}})

        }else{
           const time_now  = (new Date()).getTime();
           const lastclear = localStorage.getItem('lastclear');


            if((time_now - lastclear) > 1000*60*60*24*7) {
              
                localStorage.clear();
            
            }else{
                const email = localStorage.getItem("Grocers-user-email");
                const password = localStorage.getItem("Grocers-user-password");
                const user={
                    email,password
                }
                dispatch(login(user))
            }
            

        }
    } 
}
export const checkAuthTimer=(timer)=>{
 
    return dispatch=>{
        TimeOut= setTimeout(()=>{
            
            dispatch(logout())

            
            },timer*1000)
    }
  
   
}
export const logout=()=>{
 
  alert("logout")
    return (dispatch)=>{

            document.cookie = 'token' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            dispatch({type:LOGOUT,payload:{}})
            dispatch(Action.fetchCart())
            window.location.reload();
            clearTimeout(TimeOut)

        } 
 
   
}

export const login=(user)=>{
    let URL='http://localhost:3001/auth/login'
    if(user.confirmPassword){
        URL='http://localhost:3001/auth/register'
    }
    
    return (dispatch)=>{
      
        const User=user
        fetch(URL,{
            method:'post',
            body:JSON.stringify(User),
            headers: {
                'Content-Type': 'application/json'
              }
            
        }).then(response=>{
            console.log(response)
            return response.json()
            
        }).then(data=>{
            if(data.token){
                const Data={
                    token:data.token,
                    expiresIn:3600
                }
                dispatch({type:LOGIN,payload:Data})
                 
                dispatch(checkAuthTimer(3600))
                if(User.check){
                    localStorage.setItem("Grocers-user-email", User.email);
                    localStorage.setItem("Grocers-user-password", User.password);
                  localStorage.setItem('lastclear', (new Date()).getTime());

                    
              
               
                }
            }
            

        })
        .catch(err=>{console.log(err)}) 
        
        
    }
        
          
  
}
export const popup=(state)=>{
    return dispatch=>{
        dispatch({type:POPUP,payload:state})
    }
}

