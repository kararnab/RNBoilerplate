import React, { useState } from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';

const SearchComponent = (props) => {
  return (
    <View
      style={{
        borderColor: '#b1b1b1',
        borderWidth: 1,
        borderRadius: 4,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 16,
      }}>
      <Image
        source={require('../assets/images/search-icon.png')}
        // source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
        style={{ width: 16, height: 16, marginRight: 5, alignSelf: 'center' }}
      />
      <TextInput
        style={{ padding: 0, flex: 1 }}
        autoCapitalize={'none'}
        autoCorrect={false}
        placeholder={'Please search here'}
        value={props.term}
        //onChangeText={(text) => props.onTermChange(text)}
        onChangeText={(text) => props.onSubmit(text)}
        onSubmitEditing={({ nativeEvent }) => props.onSubmit(nativeEvent.text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchComponent;
