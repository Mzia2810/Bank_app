import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const EneoBill = ({ onClose }) => {
  return (
    <View style={[styles.eneoBill, styles.eneoLayout]}>
      <Image
        style={[styles.eneoBill1, styles.eneoLayout]}
        resizeMode="cover"
        source={require("../assets/eneo-bill-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eneoLayout: {
    height: 210,
    width: 360,
  },
  eneoBill1: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  eneoBill: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default EneoBill;
