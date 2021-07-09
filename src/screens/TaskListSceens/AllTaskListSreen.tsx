import React from 'react'
import { View } from 'react-native';
import TasksList from '../../components/Lists/TasksList';
import { useAppSelector } from '../../redux/store';
import { styles } from './styles';

const AllTaskListSreen = () => {

    //It returns the whole task array from the store
    const taskArrayFromStore = useAppSelector(state => state.taskReducer)

    return (
        <View style={styles.container}>  
            <TasksList taskArray={taskArrayFromStore}/>

        </View>  
    )
}

export default AllTaskListSreen
