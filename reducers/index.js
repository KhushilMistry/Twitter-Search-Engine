import { combineReducers } from 'redux';

import { routerReducer as routing } from 'react-router-redux';
import tweetsState from './tweetsReducer';

export default combineReducers({
  routing,
  tweetsState
});
