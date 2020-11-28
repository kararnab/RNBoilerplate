import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Button = ({ title, disabled, onPress, width = 160 }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={{ width }}
            onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: disabled ? '#7a7a7a' : '#f15b51', borderRadius: 5 }}>
                <Text style={{ fontWeight: '900', fontSize: 18, color: 'white', borderRadius: 5, borderColor: 'white', borderWidth: 1, flex: 1, padding: 10, margin: 3, textAlign: 'center' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button