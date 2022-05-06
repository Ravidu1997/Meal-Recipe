import React from 'react';
import {View, ImageBackground, Text, Linking, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {recipe_card} from '../styles/components_styles';

const RecipeCard = ({data}) => {
  return (
    <View style={recipe_card.container}>
      <ImageBackground
        style={recipe_card.image}
        imageStyle={{borderRadius: 10}}
        resizeMode={'cover'}
        source={{uri: data.strMealThumb}}>
        <Text style={recipe_card.title}>{data.strMeal}</Text>
      </ImageBackground>
      <View style={recipe_card.category}></View>
      <Text style={recipe_card.description}>{data.strInstructions}</Text>
      <Text style={recipe_card.tags}></Text>
      <Text
        style={({justifyContent: 'center'}, {alignSelf: 'center'})}
        onPress={() => Linking.openURL(data.strYoutube)}>
        <Icon name="youtube" color={'red'} size={60} />
      </Text>
    </View>
  );
};

export {RecipeCard};
