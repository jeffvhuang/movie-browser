import React from "react";
import { Text, View } from "react-native";
import { string } from "prop-types";
import { styles } from '../styles/styles';

MovieProperty.propTypes = {
  label: string.isRequired,
  value: string.isRequired
};

export default function MovieProperty({ label, value }) {  
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        <Text style={styles.label}>{label}: </Text>{value}
      </Text>
    </View>
  );
}
