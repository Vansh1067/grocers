import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductReducer from './store/product/reducer';
import CartReducer from './store/cart/reducer';
import AuthReducer from './store/auth/reducer';
import OrderReducer from './store/order/reducer';
import WishListReducer from './store/user/reducer';
import CheckoutReducer from './store/Checkout/reducer';
import ReviewReducer from './store/reviews/reducer';





const rootReducer=combineReducers({
    products:ProductReducer,
    cart:CartReducer,
    auth:AuthReducer,
    order:OrderReducer,
    wishList:WishListReducer,
    checkOut:CheckoutReducer,
    review:ReviewReducer

})
const store=createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
<BrowserRouter >
    <App />
    </BrowserRouter>
    </Provider>
    

 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
