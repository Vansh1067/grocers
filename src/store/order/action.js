export const FETCH_ORDER='FETCH_ORDER';
export const ADD_ORDER='ADD_ORDER';
export const REMOVE_ORDER='REMOVE_ORDER';
export const FETCH_ORDER_DETAIL='FETCH_ORDER_DETAIL';

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbnNoZG9uOTkjZ21haWwuY29tIiwidXNlcklkIjoiNWYxYTA1YTBlMWI2MjgyZDJjZTIyNzBlIiwiaWF0IjoxNTk1NjMyMjc4LCJleHAiOjE1OTU2NDMwNzh9.C8WXGVXe4KbGqBOcK7y62QCUW7tvHLvqdJV0JjdRqls'

const Orders=[{id:0,title:'Banana',price:20,qty:5,date:'12-07-2019',status:'Confirm'},{id:1,title:'Chips',price:10,qty:3,date:'1-10-2019',status:'Cancel'},{id:2,title:'Chocolate',price:100,qty:1,date:'1-10-2019',status:'Delivered'}]
export const fetchOrder=()=>{
    return dispatch=>{
        fetch('http://localhost:3001/order',{
            headers:{
                'Authorization':token,
               
            }
        })
        .then(res=>{
            return res.json()
        })
        .then(orders=>{
            console.log(orders)
            dispatch({type:FETCH_ORDER,payload:orders.Order})
        })
           
    }
}
export const fetchDetail=(id)=>{
    const order=Orders.find((order)=>order.id===id)
    return dispatch=>{
            setTimeout(()=>{
                dispatch({type:FETCH_ORDER_DETAIL,payload:order})
            },1000)
    }
}
export const AddOrder=(orderData)=>{
    console.log(orderData)
    return dispatch=>{
            fetch("http://localhost:3001/order",{
                method:'post',
                body:JSON.stringify(orderData),
                headers:{
                    'Authorization':token,
                    'Content-Type': 'application/json'
                }
            }).then(res=>{
                return res.json()
            }).then(order=>{
                console.log(order)
                fetchOrder();

            })
            
    }
}
export const deleteOrder=(id)=>{
    console.log(id)
    return dispatch=>{
            fetch("http://localhost:3001/order/"+id,{
                method:'delete',
                headers:{
                    'Authorization':token,
                    'Content-Type': 'application/json'
                }
            }).then(res=>{
                return res.json()
            }).then(order=>{
                console.log(order)
                fetchOrder();

            })
            
    }
}