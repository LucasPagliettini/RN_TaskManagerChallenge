import React from 'react'
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import TasksList from '../../components/Lists/TasksList';

const CompletedTaskScreen = () => {

    const taskArrayFromStore = useSelector(state => state.taskReducer)

    const completedTaskArray = taskArrayFromStore.filter(item => item.completed === true)

    return (
        <View style={{flex: 1, paddingHorizontal:20, paddingTop:20, backgroundColor: 'white'}}>  
            <TasksList taskArray={completedTaskArray}/>

        </View>  
    )
}

export default CompletedTaskScreen
