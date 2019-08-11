import React from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { styles } from '../styles/styles';

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired,
};

export default function MovieListItem({ title, year, poster, id, onPressItem }) {
  const onPress = () => onPressItem(id);
  
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.listItem}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
          {/* <Image style={styles.image} source={require('../../assets/splash.png')} /> */}
        </View>
        <View>
          <Text style={styles.itemText}>{title}</Text>
          <Text style={styles.itemText}>{year}</Text>
        </View>        
      </View>
    </TouchableHighlight>
  );
}
