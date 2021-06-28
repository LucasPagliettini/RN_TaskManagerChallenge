import React from 'react'
import { View } from 'react-native';

import TasksList from '../components/Lists/TasksList';

const EmptyScreen = () => {

    const list = [
        {
            id:1,
            title: 'lucas'
        },
        {
            id:2,
            title: 'majo'
        }
    ]
    
    return (
        <View style={{flex: 1, paddingHorizontal:20, paddingTop:20, backgroundColor: 'white'}}>  
            <TasksList taskArrayFromStore={list}/>
        </View>  
    )
}

export default EmptyScreen
