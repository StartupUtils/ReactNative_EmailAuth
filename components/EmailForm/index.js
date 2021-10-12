import React, {useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import styles from "./styles";
import { emailSignup } from "../../utils/requests";

const EmailForm = ({setEmail}) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [waitingResponse, setWaitingResponse] = useState(false)
    return (
        <KeyboardAvoidingView style={styles.bottomButton}>
            <Formik
                initialValues={{email: ""}}
                onSubmit={(values) => {
                    if(!waitingResponse){
                        emailSignup(values.email, setEmail, setErrorMessage, setWaitingResponse)
                    }
                }}
            >
                {(props) => (
                    <View>
                        <Text>{errorMessage}</Text>
                        <TextInput
                            placeholder="Email"
                            onChangeText={props.handleChange('email')}
                            value={props.values.title}
                            style={styles.input}
                        />
                        <TouchableOpacity
                            onPress={props.handleSubmit}
                            style={styles.appButtonContainer}
                        >
                            <Text style={styles.appButtonText}>START LEARNING</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </KeyboardAvoidingView>
    )
    
}

export default EmailForm;