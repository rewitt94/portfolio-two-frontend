import {combineReducers} from 'redux'
import AnsweredReducer from './answered.js'

const allReducers = combineReducers({
  answered: AnsweredReducer
});
