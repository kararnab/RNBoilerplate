import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    View
} from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { updateUser } from '../redux/action/action1';

const LoginScreen = ({ dispatch }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const secondTextInput = useRef();

    return (
        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={styles.textInput}
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholder={'Username'}
                value={username}
                onChangeText={(text) => setUsername(text)}
                onSubmitEditing={() => secondTextInput.current.focus()}
                blurOnSubmit={false}
            />
            <TextInput
                ref={secondTextInput}
                style={styles.textInput}
                autoCapitalize={'none'}
                secureTextEntry={true}
                autoCorrect={false}
                placeholder={'Password'}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button
                title={'Login'}
                disabled={false}
                onPress={() => {
                    let user = { authKey: 'abvaCAmMdv13mcasmm', name: 'Arnab' }
                    dispatch(updateUser(user))
                }}
                width={210}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        marginBottom: 7,
        borderColor: '#b5b5b5',
        borderWidth: 1,
        borderRadius: 3,
        width: '50%'
    }
})

export default connect()(LoginScreen);