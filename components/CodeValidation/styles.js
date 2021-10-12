import {StyleSheet} from 'react-native';
import { SCREEN } from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    message: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'firaSansBold',
    },
    email: {
        color: 'black',
        textAlign: 'center',
        top: -4,
        fontSize: 15,
        fontFamily: 'firaSansBold',
    },
    bottomButton: {
        alignItems: 'center',
        position: 'absolute',
        top: SCREEN.HEIGHT / 4,
        left: 30,
        right: 30,
    },
    form: {
        position: 'absolute',
        top: 70,
        left: 30,
        right: 30,
    },
    input: {
        backgroundColor: '#E7E7E7', 
        padding: 10, 
        marginBottom: 20, 
        borderRadius: 6,
        shadowColor: "black",
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "black",
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
    }
})

export default styles;