import { URL } from "./constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getRequest = async (token, endpoint) => {
    const settings = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };
    try {
        const fetchResponse = await fetch(`${URL}/${endpoint}`, settings);
        const res = await fetchResponse.json();
        return res;
    } catch (e) {
        console.log(e)
        return {status: "failed to reach endpoint", ok: false};
    }
}

export const emailSignup = async (email, setEmail, setError, setWaitingResponse) => {
    setWaitingResponse(true)
    const data = {
        email: email
    }
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    try {
        const fetchResponse = await fetch(`${URL}/auth/emailauth`, settings);
        const res = await fetchResponse.json();
        setWaitingResponse(false)
        if(res.ok){
            setEmail(email)
            return res
        }
        else{
            setEmail(null)
            setError(res.message)
            return res
        }
    } catch (e) {
        setError("Something went wrong, please try again later.")
        setWaitingResponse(false)
        return e;
    }    
}

export const manageCode = async (email, code, setToken, setError) => {
    const data = {
        email: email,
        code: code.toString()
    }
    console.log(data)
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    try {
        const fetchResponse = await fetch(`${URL}/auth/emailvalidation`, settings);
        const res = await fetchResponse.json();
        console.log(res)
        if(res.ok){
    
            await AsyncStorage.setItem('@token', res.token)
            setToken(res.token)
            return res
        }
        else{
            setError(res.message)
            return res
        }
    } catch (e) {
        setError("Something went wrong, please try again later.")
        console.log(e)
        return e;
    }    
}