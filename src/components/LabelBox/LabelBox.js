import React from 'react'
import { View, Text } from 'react-native'

const LabelBox = ({children, label, style}) => {
    return (
        <View style={{marginTop: 15, ...style, }}>
            <Text style={{color: 'black', marginBottom: 5,}}>{label}</Text>
            {children}
        </View>
    )
}

export default LabelBox
