import { combineReducers } from 'redux';
import MovieReducer from '../reducers/reducer_movies';


const rootReducer = combineReducers({
  movies:MovieReducer
});

export default rootReducer;
