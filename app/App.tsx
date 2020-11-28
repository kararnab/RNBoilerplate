import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import _ from 'lodash'

import { NavigationContainer } from '@react-navigation/native';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { Provider, connect } from "react-redux";
import reducer from './redux/reducer';
import { StorageUtil } from './util/StorageUtil';
import { AuthNavigator, LoggedInNavigator } from './AppNavigator';
import { updateUser } from './redux/action/action1';

export const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

const AppContainer = ({user, updateApp, dispatch}) => {
  let showLoginFlow = false
  let showUpdateFlow = false
  let showAuthenticatedFlow = false
  if(updateApp) {
    showUpdateFlow = true
  } else if (_.isEmpty(user)) {
    showLoginFlow = true
  } else {
    showAuthenticatedFlow = true
  }
  console.log(`showUpdateFlow: ${showUpdateFlow}`)
  console.log(`showLoginFlow: ${showLoginFlow}`)
  console.log(`showAuthenticatedFlow: ${showAuthenticatedFlow}`)
  console.log(`Updated User: ${user}`)

  useEffect(() => {
    async function fetchUser() {
      let user = await StorageUtil.getUser()
      dispatch(updateUser(user))
    }
    fetchUser()
  }, []);
  return (
    <NavigationContainer>
      {
        showUpdateFlow && 
          <AuthNavigator />
      }
      {
        showAuthenticatedFlow &&
        <LoggedInNavigator/>
      }
      {
        showLoginFlow &&
        <AuthNavigator />
      }
    </NavigationContainer>
  );
};

function mapStateToProps(state, _ownProps: any) {
  return {
    user: state.default.user,
    updateApp: state.default.updateApp,
    unreadChatCount: state.default.unreadChatCount,
  }
}

const AppContainerWithRedux = connect(mapStateToProps)(AppContainer);

const App = () => (
  <Provider store={store}>
    <AppContainerWithRedux />
  </Provider>
);

export default App;
