import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const NjangiDashboardSection = () => {
  return (
    <View style={[styles.vectorParent, styles.groupChildPosition]}>
      <Image
        style={[styles.groupChild, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <View style={styles.njangiDashboardWrapper}>
        <Text style={styles.njangiDashboard}>Njangi Dashboard</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 274,
    width: 330,
    left: "50%",
    top: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  groupChild: {
    marginTop: -137,
    borderRadius: Border.br_4xs,
  },
  njangiDashboard: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_xl,
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_2900,
    textAlign: "left",
    position: "absolute",
  },
  njangiDashboardWrapper: {
    top: 8,
    left: 110,
    width: 108,
    height: 19,
    position: "absolute",
  },
  vectorParent: {
    marginTop: -29,
  },
});

export default NjangiDashboardSection;
