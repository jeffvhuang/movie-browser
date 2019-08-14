import React from "react";
import { Text, View, Image, TouchableHighlight, Platform  } from "react-native";
import PropTypes from "prop-types";
import { styles } from '../styles/styles';
import Icon from "react-native-vector-icons/Ionicons";

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired,
};

export default function MovieListItem({ title, year, poster, id, onPressItem }) {
  const onPress = () => onPressItem(id);
  const icon = Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-dropright";
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.listItem}>
        <View>
          <Image style={styles.image} source={{uri: poster}} />
        </View>
        <View style={styles.movieListTextContainer}>
          <Text style={[styles.itemText, styles.movieTitle]}>{title}</Text>
          <Text style={[styles.itemText, styles.movieYear]}>{year}</Text>
        </View>
        <View style={styles.listArrow}>
          <Icon name={icon} size={40} color="black" />  
        </View>       
      </View>
    </TouchableHighlight>
  );
}
