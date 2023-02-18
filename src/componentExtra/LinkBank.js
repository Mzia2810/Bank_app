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

const LinkBank1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.linkBank, style]}>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group258.png")}
      />
      <Text style={styles.linkBanks}>Link Banks</Text>
      <Pressable
        style={styles.imageedit341319179892}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    height: "65.28%",
    width: "49.51%",
    top: "0%",
    right: "26.66%",
    bottom: "34.72%",
    left: "23.83%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  linkBanks: {
    top: 27,
    left: 0,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.5,
    lineHeight: 17,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  imageedit341319179892: {
    top: 1,
    left: 13,
    backgroundColor: Color.silver_500,
    width: 32,
    height: 32,
    position: "absolute",
  },
  linkBank: {
    width: 58,
    height: 44,
  },
});

export default LinkBank1;
