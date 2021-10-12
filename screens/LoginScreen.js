import React, {useState} from "react";
import {View, Text} from 'react-native';
import EmailForm from '../components/EmailForm'
import CodeValidation from "../components/CodeValidation";
import styles from "./styles";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(null)
    return (
        <View style={styles.container}>
            {email == null ? (
                <EmailForm setEmail={setEmail}/>
            )
            :
                <CodeValidation email={email} setEmail={setEmail}/>
            }
        </View>
    )
}

export default LoginScreen;
