import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
// React Navigation elements
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import BoardScreen from '../screens/BoardScreen';
import AddTaskSreen from '../screens/AddTaskSreen';
import NavButtonContainter from '../components/NavButtons/NavButtonContainter';
// Functions
import getTaskListFromLocalStore from '../redux/actions/taskActions';
// Styles
import styles from './styles';

const Navigator = () => {
  const dispatch = useDispatch();

  // It is a function that runs only once when the app starts. It dispatches the
  // action that reads the initial data from localStorage
  useEffect(() => {
    dispatch(getTaskListFromLocalStore());
  }, []);

  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Board"
            component={BoardScreen}
            options={{
              headerTitle: 'Board',
              headerRightContainerStyle: { marginHorizontal: 20 },
              headerRight: () => <NavButtonContainter />,
            }}
          />
          <Stack.Screen
            name="AddTask"
            component={AddTaskSreen}
            options={{ title: 'Add task' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;
