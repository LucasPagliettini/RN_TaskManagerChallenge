import React from 'react'
import { View } from 'react-native';
import TasksList from '../../components/Lists/TasksList';
import { useAppSelector } from '../../redux/store';

const CompletedTaskScreen = () => {

    //It returns the hole task array from the store
    const taskArrayFromStore = useAppSelector(state => state.taskReducer)

    //It returns a array with the uncompleted tasks
    const completedTaskArray = taskArrayFromStore?.filter(item => item.completed === true)

    return (
        <View style={{flex: 1, paddingHorizontal:20, paddingTop:20, backgroundColor: 'white'}}>  
            <TasksList taskArray={completedTaskArray}/>

        </View>  
    )
}

export default CompletedTaskScreen
