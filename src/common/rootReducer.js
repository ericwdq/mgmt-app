import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import componentsReducer from '../features/components/redux/reducer';
import examplesReducer from '../features/examples/redux/reducer';
import userReducer from '../features/user/redux/reducer';
import dashboardReducer from '../features/dashboard/redux/reducer';
import formReducer from '../features/form/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage theme.

const reducerMap = {
  router: routerReducer,
  home: homeReducer,
  common: commonReducer,
  components: componentsReducer,
  examples: examplesReducer,
  user: userReducer,
  dashboard: dashboardReducer,
  form: formReducer,
};

export default combineReducers(reducerMap);
