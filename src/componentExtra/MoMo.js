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

const MoMo = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.momo, style]}>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group264.png")}
      />
      <Text style={styles.momo1}>MoMo</Text>
      <Pressable
        style={styles.tabArea}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    height: "61.53%",
    width: "46.51%",
    top: "6.47%",
    right: "27.91%",
    bottom: "32%",
    left: "25.58%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  momo1: {
    top: 28,
    left: 5,
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
    left: 0,
    backgroundColor: Color.gainsboro_700,
    height: 42,
    position: "absolute",
    width: 43,
  },
  momo: {
    height: 45,
    width: 43,
  },
});

export default MoMo;
