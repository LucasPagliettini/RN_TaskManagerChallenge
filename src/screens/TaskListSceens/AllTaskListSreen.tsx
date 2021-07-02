import React from 'react'
import { View } from 'react-native';
import TasksList from '../../components/Lists/TasksList';
import { useAppSelector } from '../../redux/store';

const AllTaskListSreen = () => {

    //It returns the hole task array from the store
    const taskArrayFromStore = useAppSelector(state => state.taskReducer)

    return (
        <View style={{flex: 1, paddingHorizontal:20, paddingTop:20, backgroundColor: 'white'}}>  
            <TasksList taskArray={taskArrayFromStore}/>

        </View>  
    )
}

export default AllTaskListSreen
