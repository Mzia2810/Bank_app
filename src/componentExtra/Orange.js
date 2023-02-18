import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Orange = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.orange, style]}>
      <View style={styles.orangeChild} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group260.png")}
      />
      <Text style={styles.omoney}>OMoney</Text>
      <Pressable
        style={styles.tabArea}
        onPress={() => navigation.navigate("OMoneySplashScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orangeChild: {
    top: -4,
    left: -9,
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyLabel,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 64,
    height: 36,
    display: "none",
    position: "absolute",
  },
  groupIcon: {
    height: "62.56%",
    width: "56.82%",
    top: "6.98%",
    right: "22.73%",
    bottom: "30.46%",
    left: "20.45%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  omoney: {
    top: 26,
    left: 0,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.5,
    lineHeight: 17,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  tabArea: {
    top: 0,
    left: 1,
    backgroundColor: Color.gainsboro_700,
    width: 43,
    height: 42,
    position: "absolute",
  },
  orange: {
    width: 44,
    height: 43,
  },
});

export default Orange;
