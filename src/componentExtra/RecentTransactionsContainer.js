import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const RecentTransactionsContainer = () => {
  return (
    <View style={styles.transcHist}>
      <View style={[styles.transcHistChild, styles.directionsIconPosition]} />
      <Text style={styles.seeRecentTransactions}>See Recent transactions</Text>
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
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  seeRecentTransactions: {
    top: 9,
    left: 57,
    fontSize: FontSize.size_xl,
    lineHeight: 23,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    width: 186,
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
  transcHist: {
    top: 209,
    right: 31,
    left: 30,
    height: 41,
    position: "absolute",
  },
});

export default RecentTransactionsContainer;
