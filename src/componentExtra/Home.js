import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Home1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, style]}>
      <Image
        style={styles.c14HouseIcon}
        resizeMode="cover"
        source={require("../assets/c14-house85.png")}
      />
      <Text style={styles.home1}>Home</Text>
      <Pressable
        style={styles.tabArea}
        onPress={() => navigation.navigate("MoNkapHomeScreen2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  c14HouseIcon: {
    height: "58.99%",
    width: "49.23%",
    top: "6.24%",
    right: "30.77%",
    bottom: "34.77%",
    left: "20%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  home1: {
    top: 30,
    left: 12,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.5,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.blue_100,
    textAlign: "center",
    position: "absolute",
  },
  tabArea: {
    height: "93.62%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "6.38%",
    left: "0%",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  home: {
    width: 65,
    height: 47,
  },
});

export default Home1;
