import React from "react";
import { Text, View, Image } from "react-native";
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
  return (
    <View style={styles.listItem}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: poster}} />
      </View>
      <View>
        <Text style={styles.itemText}>{title}</Text>
        <Text style={styles.itemText}>{year}</Text>
      </View>
    </View>
  );
}
