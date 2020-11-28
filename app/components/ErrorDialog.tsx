import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ErrorDialog = ({ errorMsg, retryAction }) => {
    return (
        <View style={{
            width: 200, alignItems: 'center', backgroundColor: '#1c1c1c', opacity: 0.7, borderRadius: 5, padding: 10
        }}
        >
            <Text style={{ color: 'white', textAlign: 'center' }}>{errorMsg}</Text>
            <TouchableOpacity onPress={() => {
                retryAction()
            }}
            >
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 18 }}>Retry</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ErrorDialog