import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const TransactionHistoryContainer = () => {
  return (
    <View style={styles.transcHist}>
      <View style={[styles.transcHistChild, styles.directionsIconPosition]} />
      <Image
        style={[
          styles.directionsIcon,
          styles.iconLayout,
          styles.directionsIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/directions.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector62.png")}
      />
      <Text style={styles.recentTransactions}>Recent Transactions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  directionsIconPosition: {
    right: 0,
    top: 0,
    height: 41,
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  transcHistChild: {
    left: 0,
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  directionsIcon: {
    left: 243,
  },
  vectorIcon: {
    top: 8,
    right: 265,
    left: 8,
    height: 26,
  },
  recentTransactions: {
    top: 6,
    left: 71,
    fontSize: FontSize.size_4xl,
    lineHeight: 29,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  transcHist: {
    top: 217,
    right: 31,
    left: 30,
    height: 41,
    position: "absolute",
  },
});

export default TransactionHistoryContainer;
