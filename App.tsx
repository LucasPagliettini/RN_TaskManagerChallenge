import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { SafeAreaView } from 'react-native';

const App = () => {
  
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigator/>
      </SafeAreaView>
    </Provider>
  );
}

export default App 


