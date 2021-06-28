import React from 'react'
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import TasksList from '../../components/Lists/TasksList';

const AllTaskListSreen = () => {

    const taskArrayFromStore = useSelector(state => state.taskReducer)

    return (
        <View style={{flex: 1, paddingHorizontal:20, paddingTop:20, backgroundColor: 'white'}}>  
            <TasksList taskArray={taskArrayFromStore}/>

        </View>  
    )
}

export default AllTaskListSreen
