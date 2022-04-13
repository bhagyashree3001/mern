import {combineReducers, createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';

const allReducer = combineReducers({
    products: productsReducer,
    user: userReducer,
});
const store= createStore(allReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


export default store;