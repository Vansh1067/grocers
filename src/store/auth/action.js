

export const LOGIN='LOGIN';
export const SIGNUP='SIGNUP';
export const LOGOUT='LOGOUT';



export const LoginSuccess=(token)=>{
    console.log("Suceess")
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
            console.log(data)
            const Data={
                token:data.token,
                expiresIn:3600
            }
            dispatch({type:LOGIN,payload:Data})
        
        })
        .catch(err=>{console.log(err)}) 
        
        
    }
        
          
  
}
/* export const signup=(user)=>{
    console.log(user)
    return (dispatch)=>{
        const User=user
        fetch(,{
            method:'post',
            body:JSON.stringify(User),
            headers: {
                'Content-Type': 'application/json'
              }
            
        }).then(response=>{
            console.log(response)
            return response.json()
            
        }).then(data=>{
            console.log(data)
            const Data={
                token:data.token,
                expiresIn:3600
            }
            dispatch({type:LOGIN,payload:Data})
        
        })
        .catch(err=>{console.log(err)}) 
  
}
} */
