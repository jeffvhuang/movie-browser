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
          <Image style={styles.image} source={{uri: poster}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.itemText, styles.movieTitle]}>{title}</Text>
          <Text style={[styles.itemText, styles.movieYear]}>{year}</Text>
        </View>        
      </View>
    </TouchableHighlight>
  );
}
