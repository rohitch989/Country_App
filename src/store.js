import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";
const initialState = {};

export const middleware = [thunk];

// export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(...middleware)
));
// const store = createStoreWithMiddleware(rootReducer)

export default store;