import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const buttonStyles = StyleSheet.create({
    createEventButton: {
        backgroundColor: 'lightblue',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    submitButton: {
        backgroundColor: 'lightblue',
        padding: 8,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
    }

})