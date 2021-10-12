import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRequest } from './requests';

export const checkToken = async (setValue, setLoadedToken) => {
    try {
        let result = await AsyncStorage.getItem('@token')
        setLoadedToken(true)
        if (result) {
            let response = await getRequest(result, 'auth/check')
            if (response.ok) {
                setValue(result)
            }
        }
    } catch (e) {
        console.log("error", e)
    }
}

export const deleteToken = async () => {
    await AsyncStorage.removeItem("@token")
}