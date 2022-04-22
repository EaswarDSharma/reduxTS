import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});
//const reducers= combineReducers({STATEVARIABLENAME: STATESETTINGREDUCERS})
//eacxh reducer creates a new state variable

export default reducers;

export type RootState = ReturnType<typeof reducers>;
