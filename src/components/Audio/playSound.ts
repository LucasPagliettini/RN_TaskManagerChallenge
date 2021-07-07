import { Audio } from 'expo-av'; //expo install expo-av
import { AVPlaybackSource } from 'expo-av/build/AV';
import { Alert } from 'react-native';

export const playSound = async (
    soundLengthInMiliseconds: number,
    source: AVPlaybackSource) => {
    //Example for "source" propiety: require('../../assets/sounds/iphone-notificacion.mp3')
    //de relative path must be specyfied acording to the location where this function is called

    try {
        const { sound } = await Audio.Sound.createAsync(source);
        await sound.playAsync();
        setTimeout(() => {
            sound.unloadAsync();
        }, soundLengthInMiliseconds);
    } catch (e) {
        Alert.alert("Sound Error Message")
        console.log(e)
    }
};