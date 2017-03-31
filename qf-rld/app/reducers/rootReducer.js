import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import notifications from './notifications'
import ui from './ui'

export default combineReducers({
  notifications,
  ui,
  routing,
});
