import setHeaders from '../reducer'
export const SAVE_ADDRESS='SAVE_ADDRESS';
export const SAVE_ORDER_DETAILS='SAVE_ORDER_DETAILS';


let x = document.cookie;

const token=`${x.split('=')[1]}`

export const saveAddress=(address)=>{
    if(!token){
        return
    }
    const ADDRESS={...address,id:Math.random()}
        return dispatch=>{
            if(ADDRESS.New){
                fetch('http://localhost:3001/account/add',{
                    method:'put',
                    body:JSON.stringify(ADDRESS),
                    headers:setHeaders({'Content-Type': 'application/json'})
                    ,
                    }).then(res=>{

                    dispatch({type:SAVE_ADDRESS,payload:ADDRESS})
        
                }).catch(err=>console.log(err))
            }else{
                dispatch({type:SAVE_ADDRESS,payload:ADDRESS})
            }
            }
}

export const saveOrderDetails=(details)=>{
    if(!token){
        return
    }
    console.log(details)
    return dispatch=>{
        setTimeout(()=>{
            dispatch({type:SAVE_ORDER_DETAILS,payload:details})
        },1000)
    }
}

