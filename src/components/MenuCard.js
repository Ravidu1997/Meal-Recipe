import React from 'react';
import {View, TouchableOpacity, ImageBackground, Text} from 'react-native';
import {menu_card} from '../styles/components_styles';

const MenuCard = ({data, onSelect}) => {
  return (
    <View style={menu_card.container}>
      <TouchableOpacity onPress={onSelect} style={menu_card.button}>
        <ImageBackground
          style={menu_card.image}
          imageStyle={{borderRadius: 10}}
          source={{uri: data.strMealThumb}}>
          <Text style={menu_card.text}>{data.strMeal}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export {MenuCard};
