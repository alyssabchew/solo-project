import { combineReducers } from 'redux';

// import all reducers here
import foodReducer from './foodReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  foods: foodReducer,
});

// make the combined reducers available for import
export default reducers;