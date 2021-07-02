import React from 'react'
import { View } from 'react-native';
import TasksList from '../../components/Lists/TasksList';
import { useAppSelector } from '../../redux/store';

const UncompletedTaskScreen = () => {

    //It returns the hole task array from the store
    const taskArrayFromStore = useAppSelector(state => state.taskReducer)

    //It returns a array with the uncompleted tasks
    const uncompletedTaskArray = taskArrayFromStore?.filter(item => item.completed === false)

    return (
        <View style={{flex: 1, paddingHorizontal:20, paddingTop:20, backgroundColor: 'white'}}>  
            <TasksList taskArray={uncompletedTaskArray}/>

        </View>  
    )
}

export default UncompletedTaskScreen
