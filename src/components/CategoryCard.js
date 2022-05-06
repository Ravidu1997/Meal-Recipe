import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  Button,
} from 'react-native';
import {category_card} from '../styles/components_styles';

const CategoryCard = ({data, onSelect}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={category_card.container}>
      <TouchableOpacity onPress={onSelect}>
        <ImageBackground
          resizeMode="contain"
          imageStyle={{borderRadius: 2}}
          source={{uri: data.strCategoryThumb}}
          style={category_card.image}>
          <Text style={category_card.title}>{data.strCategory}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={category_card.desContainer}>
        <Text
          numberOfLines={2}
          ellipsizeMode="middle"
          style={category_card.description}>
          {data.strCategoryDescription}
        </Text>
      </View>
    </View>
  );
};

export {CategoryCard};
