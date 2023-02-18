import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ContainerWrapper = () => {
  return (
    <View
      style={[
        styles.groupParent,
        styles.textPosition4,
        styles.parentSpaceBlock,
      ]}
    >
      <View
        style={[styles.parent, styles.textPosition3, styles.parentSpaceBlock]}
      >
        <Text style={[styles.text, styles.textTypo, styles.textPosition3]}>
          1
        </Text>
        <Text style={[styles.text1, styles.textPosition2]}>7</Text>
        <Text style={[styles.text2, styles.textPosition1]}>4</Text>
        <Text style={[styles.text3, styles.textPosition]}>.</Text>
      </View>
      <View style={[styles.group, styles.textPosition3]}>
        <Text style={[styles.text4, styles.textTypo, styles.textPosition3]}>
          2
        </Text>
        <Text style={[styles.text5, styles.textPosition2]}>8</Text>
        <Text style={[styles.text6, styles.textPosition1]}>5</Text>
        <Text style={[styles.text7, styles.textPosition]}>0</Text>
      </View>
      <View style={[styles.container, styles.text8Position]}>
        <Text style={[styles.text8, styles.text8Position, styles.textTypo]}>
          3
        </Text>
        <Text style={[styles.text9, styles.textTypo, styles.textPosition4]}>
          9
        </Text>
        <Text style={[styles.text10, styles.textTypo, styles.textPosition4]}>
          6
        </Text>
        <Image
          style={[styles.vectorIcon, styles.textPosition4]}
          resizeMode="cover"
          source={require("../assets/vector187.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition4: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  parentSpaceBlock: {
    marginLeft: -147,
    height: 146,
  },
  textPosition3: {
    marginTop: -73,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
  },
  textPosition2: {
    marginTop: 7,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition1: {
    marginTop: -33,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    marginTop: 47,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_2xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text8Position: {
    marginTop: -69,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -3,
  },
  text1: {
    marginLeft: -5,
  },
  text2: {
    marginLeft: -6,
  },
  text3: {
    marginLeft: -2,
    fontWeight: "800",
    width: 5,
  },
  parent: {
    width: 12,
    height: 146,
  },
  text4: {
    marginLeft: -4.5,
  },
  text5: {
    marginLeft: -5.5,
  },
  text6: {
    marginLeft: -5.5,
  },
  text7: {
    marginLeft: -5.5,
    fontWeight: "500",
    marginTop: 47,
  },
  group: {
    marginLeft: 1,
    width: 11,
    height: 146,
  },
  text8: {
    marginLeft: -5.5,
  },
  text9: {
    marginTop: 15,
    marginLeft: -5.5,
  },
  text10: {
    marginTop: -27,
    marginLeft: -5.5,
  },
  vectorIcon: {
    marginTop: 57,
    height: 12,
    marginLeft: -5.5,
    width: 11,
  },
  container: {
    marginLeft: 136,
    height: 138,
    width: 11,
  },
  groupParent: {
    marginTop: 104,
    width: 294,
    height: 146,
  },
});

export default ContainerWrapper;
