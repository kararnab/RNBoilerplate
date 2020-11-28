import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RecipeCard = (props) => {
  return (
    <View
      style={{
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#777777',
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
      }}>
      <Image
        // source={require('../images/search-icon.png')}
        source={{ uri: props.uri }}
        style={{ width: 50, height: 50, marginRight: 5, alignSelf: 'center' }}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1, fontWeight: '700', fontSize: 15 }}>{props.title}</Text>
          <Text style={{ color: '#a1a1a1', fontSize: 13 }}>{`$ ${props.price}`}</Text>
        </View>
        <Text
          numberOfLines={2}
          ellipsizeMode={'tail'}
          style={{ color: '#a1a1a1', fontSize: 13 }}>
          {props.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default RecipeCard;
