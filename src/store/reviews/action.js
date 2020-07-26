import setHeaders from '../reducer'

export const FETCH_REVIEW="FETCH_REVIEW"
export const ADD_REVIEW="ADD_REVIEW"
export const UPDATE_REVIEW="UPDATE_REVIEW"
export const DELETE_REVIEW="DELETE_REVIEW"


let x = document.cookie;

const token=`${x.split('=')[1]}`

export const fetchReview=(prodId)=>{

    return dispatch=>{
        fetch('http://localhost:3001/review/'+prodId)
        .then(res=>{
            return res.json()
        })
        .then(reviews=>{
            console.log(reviews)
            dispatch({type:FETCH_REVIEW,payload:reviews.reviews})
        })
        .catch(err=>{console.log(err)})
    }
}
export const postReview=(data)=>{
    if(!token){
        return
    }
    console.log(data)
   
    return dispatch=>{
        fetch('http://localhost:3001/review',{
            method:'post',
            body:JSON.stringify(data),
            headers:setHeaders({'Content-Type': 'application/json'})
        }).then(res=>{
            

            return res.json()
        }).then(reviews=>{
           
            dispatch(fetchReview(reviews.review.productId))
            
        })
        .catch(err=>{console.log(err)})
    }
}
export const EditReview=(data)=>{
    if(!token){
        return
    }
    console.log(data)
   
    return dispatch=>{
        fetch('http://localhost:3001/review',{
            method:'put',
            body:JSON.stringify(data),
            headers:setHeaders({'Content-Type': 'application/json'})
        }).then(res=>{
            

            return res.json()
        }).then(reviews=>{
            console.log(reviews)
            dispatch(fetchReview(reviews.review.value.productId))
            window.location.reload();
        window.scrollTo(0, 0)

        })
        .catch(err=>{console.log(err)})
    }
}


