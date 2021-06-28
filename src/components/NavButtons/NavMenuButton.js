import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const NavMenuButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Ionicons name="ios-menu-outline" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default NavMenuButton
