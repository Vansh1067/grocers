import {FETCH_WISHLIST,FETCH_USER_DATA,DELETE_ADDRESS,EDIT_ADDRESS} from './action'

const initialState={
wishList:[],
userData:{}
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
            case FETCH_WISHLIST:
                return {
                    ...state,
                    wishList:action.payload
                }
                case FETCH_USER_DATA:
                    return {
                        ...state,
                        userData:action.payload
                    }
                case DELETE_ADDRESS:
                    const AddressData=state.userData.OthersAddress.filter(add=>add.id!==action.payload)
                    return {
                            ...state,
                            userData:{
                                ...state.userData,
                                OthersAddress:AddressData
                            }
                        }
                case EDIT_ADDRESS:
                  
                    return {
                             ...state,
                             userData:{
                                 ...state.userData,
                                 OthersAddress:AddressData
                            }
                       }
            default:
                return state
                
    }


}
export default reducer