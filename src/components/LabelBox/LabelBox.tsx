import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { View, Text } from 'react-native'

type labelBoxPropType = {
    children: JSX.Element,
    label: string,
    style?: ViewStyle,
}
const LabelBox = ({children, label, style}: labelBoxPropType) : JSX.Element=> {

    const localContainerSyle = {...style, ...styles.container}

    return (
        <View style={localContainerSyle}>
            <Text style={styles.text}>{label}</Text>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    text: {
        color: 'black', 
        marginBottom: 5,
    }
})

export default LabelBox
