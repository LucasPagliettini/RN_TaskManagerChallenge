import React from 'react'
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import TasksList from '../../components/Lists/TasksList';

const UncompletedTaskScreen = () => {

    const taskArrayFromStore = useSelector(state => state.taskReducer)

    const uncompletedTaskArray = taskArrayFromStore?.filter(item => item.completed === false)

    return (
        <View style={{flex: 1, paddingHorizontal:20, paddingTop:20, backgroundColor: 'white'}}>  
            <TasksList taskArray={uncompletedTaskArray}/>

        </View>  
    )
}

export default UncompletedTaskScreen
