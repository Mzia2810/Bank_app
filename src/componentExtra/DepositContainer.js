import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyle";

const DepositContainer = ({ onRectanglePressablePress }) => {
  return (
    <View style={styles.deposit}>
      <View style={[styles.depositChild, styles.depositPosition]} />
      <Text style={styles.deposit1}>Deposit</Text>
      <Pressable
        style={[styles.depositItem, styles.depositPosition]}
        onPress={() => console.log('I am here')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  depositPosition: {
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  depositChild: {
    height: "97.83%",
    width: "100%",
    top: "2.17%",
    right: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  deposit1: {
    top: "26.09%",
    left: "40.33%",
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    position: "absolute",
  },
  depositItem: {
    height: "100%",
    width: "99.67%",
    top: "0%",
    right: "0.33%",
    backgroundColor: Color.gainsboro_700,
  },
  deposit: {
    height: "5.75%",
    width: "84.72%",
    top: "85.88%",
    right: "7.78%",
    bottom: "8.38%",
    left: "7.5%",
    position: "absolute",
  },
});

export default DepositContainer;
