import React, { useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import ProductCardComponent from '../../../categoriesCardComponent/productCardComponent/productCardComponent'
import {connect} from 'react-redux';
import * as Actions from '../../../../store/wishList/action'
import Hoc from '../../../../Hoc/hoc';
const WishList =props=>{
    
    useEffect(()=>{
        props.WishList()
    })
    return (<Hoc className="wishList">
<h3>WishList</h3>
                <div className="wishProduct">
{
               
                props.wishListProd.map((product)=>{
                return <ProductCardComponent  product={product}/>

               })
           }
           </div>
</Hoc>)
    
}
const mapStateToProps=state=>{
    return {
            wishListProd:state.wishList.wishList

    }
}
const mapDispatchToProps=dispatch=>{
    return {
        WishList:()=>dispatch(Actions.fetchWishlist())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(WishList));