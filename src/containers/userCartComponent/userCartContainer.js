import React from 'react';

import Hoc from '../../Hoc/hoc';
import UserCartComponent from '../../component/userCartComponent/userCartComponent'
const userCartContainer=(props)=>{
    return(
        <Hoc>
            <UserCartComponent></UserCartComponent>
        </Hoc>
    );
}
export default userCartContainer