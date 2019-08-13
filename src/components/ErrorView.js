import React from "react";
import { Text, View } from "react-native";
import { string } from "prop-types";
import { styles } from '../styles/styles';

ErrorView.propTypes = {
  text: string.isRequired,
};

export default function ErrorView({ text }) {  
  return (
    <View style={styles.errorView}>
      <Text style={styles.centerText}>{text}</Text>
    </View>
  );
}
