import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const RecentTractionsContainer = ({ recentTransactionText, vectorLeft }) => {
  const recentTractionsStyle = useMemo(() => {
    return {
      ...getStyleValue("left", vectorLeft),
    };
  }, [vectorLeft]);

  return (
    <View style={styles.transcHist}>
      <View style={[styles.transcHistChild, styles.directionsIconPosition]} />
      <Text style={[styles.recentTractions, recentTractionsStyle]}>
        {recentTransactionText}
      </Text>
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
  recentTractions: {
    top: 9,
    left: 72,
    fontSize: FontSize.size_4xl,
    lineHeight: 29,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
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
    top: 355,
    right: 29,
    left: 32,
    height: 41,
    position: "absolute",
  },
});

export default RecentTractionsContainer;
