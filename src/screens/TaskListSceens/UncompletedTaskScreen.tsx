import React from 'react'
import { View } from 'react-native';
import TasksList from '../../components/Lists/TasksList';
import { useAppSelector } from '../../redux/store';
import { styles } from './styles';

const UncompletedTaskScreen = () => {

    //It returns the whole task array from the store
    const taskArrayFromStore = useAppSelector(state => state.taskReducer)

    //It returns a array with the uncompleted tasks
    const uncompletedTaskArray = taskArrayFromStore?.filter(item => item.completed === false)

    return (
        <View style={styles.container}>  
            <TasksList taskArray={uncompletedTaskArray}/>

        </View>  
    )
}

export default UncompletedTaskScreen
