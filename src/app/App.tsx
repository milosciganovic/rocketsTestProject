import 'react-native-gesture-handler';
import React, { useEffect, FunctionComponent } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { initLayoutAnimation, initDevMenu } from '../functions/core/';
import { Main } from '../components';
import Store from '../redux/store';
import { initTheme } from '../functions/core/theme';
import AppPermissions from '../functions/core/appPermissions';

LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified',
  'componentWillReceiveProps',
  'Node of type rule not supported as an inline style'
]);

/**
 * First component to render.
 */
const App: FunctionComponent = () => {

  const requestPermissions = async () => {
    await AppPermissions.requestPermissions();
  }

  useEffect(() => {
    requestPermissions()
    initLayoutAnimation();
    initTheme();
    initDevMenu();
  }, []);

  return (
    <Provider store={Store}>
      <Main />
    </Provider >
  );
};

export default App;
