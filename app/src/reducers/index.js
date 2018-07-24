import {combineReducers} from 'redux';

import todos from './todo';
import visibilityFilter from './visibilityFilter';

//其实这里就是整个状态树的结构  
export default combineReducers({
	todos,
	visibilityFilter
})
