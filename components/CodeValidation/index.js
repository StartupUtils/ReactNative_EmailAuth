import React, {useState, useContext} from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { Formik } from "formik";
import styles from "./styles";
import { manageCode } from "../../utils/requests";
import { AuthContext } from "../../utils/context";

const CodeValidation = ({email, setEmail}) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [waitingResponse, setWaitingResponse] = useState(false)
    const {setToken} = useContext(AuthContext)
    return (
        <View style={styles.bottomButton}>
            <View>
                <Text style={styles.message}>Confirmation code sent to</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <Formik
                initialValues={{code: ""}}
                onSubmit={(values) => {
                    console.log(values)
                    manageCode(email, values.code, setToken, setErrorMessage)
                }}
            >
                {(props) => (
                    <View style={styles.form}>
                        
                        <Text>{errorMessage}</Text>
                        <TextInput
                            placeholder="Code"
                            onChangeText={props.handleChange('code')}
                            value={props.values.title}
                            style={styles.input}
                        />
                        <TouchableOpacity
                            onPress={props.handleSubmit}
                            style={styles.appButtonContainer}
                        >
                            <Text style={styles.appButtonText}>CONFIRM</Text>
                        </TouchableOpacity>
                        <View style={{top: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: "20%", paddingRight: "20%", textAlign: "center", alignItems: 'center'}}>
                            <Text style={{fontFamily: 'firaSansBold'}} >Resend</Text><Text style={{fontFamily: 'firaSansBold'}} onPress={ ()=> {setEmail(null)}}>Change Email</Text>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
    
}

export default CodeValidation;