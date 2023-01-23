import { createStore ,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
 const reducer = combineReducers({})
 let initialState ={}
 const middleware = [thunk]
 const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 export default store 
 