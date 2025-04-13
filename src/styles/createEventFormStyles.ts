import { StyleSheet } from 'react-native';

export const createEventFormStyles = StyleSheet.create({
    createEventFormHeader: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 30
    },
    formInput: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginHorizontal: 20,
    },
    inputLabel: {
        paddingBottom: 5,
        fontSize: 15,
        alignSelf: 'flex-start',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        paddingBottom: 20
    }
})