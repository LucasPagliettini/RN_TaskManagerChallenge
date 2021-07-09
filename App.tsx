import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import Navigator from './src/navigation/Navigator';

const App = () => {
  
  return (
    <Provider store={store}>
        <Navigator/>
    </Provider>
  );
}

export default App 


