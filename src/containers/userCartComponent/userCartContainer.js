import React from 'react';

import Hoc from '../../Hoc/hoc';
import UserCartComponent from '../../component/HeaderComponent/NavViewComponent/CartComponent/userCartComponent/userCartComponent'
const userCartContainer=(props)=>{
    return(
        <Hoc>
            <UserCartComponent></UserCartComponent>
        </Hoc>
    );
}
export default userCartContainer