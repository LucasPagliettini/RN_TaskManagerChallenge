import React from 'react'
import { View } from 'react-native';

import TasksList from '../components/Lists/TasksList';

const EmptyScreen = () => {
    
    return (
        <View style={{flex: 1, paddingHorizontal:20, paddingTop:20, backgroundColor: 'white'}}>  
            <TasksList taskArray/>
        </View>  
    )
}

export default EmptyScreen
