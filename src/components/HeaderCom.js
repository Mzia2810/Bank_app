/** @format */

import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import useCustomFonts from "../../assets/fonts/useCustomFonts";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Margin } from "../../GlobalStyle";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
const HeaderCom = ({ text, onPressRight, onPressLeft, rightIcon }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.iconView}>
          <TouchableOpacity onPress={() =>navigation.goBack()}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={40}
              color={"white"}
              onPress={onPressLeft}
            />
          </TouchableOpacity>
          <Text style={styles.textStyle}>{text}</Text>
          {rightIcon ? (
            <AntDesign
              name="questioncircle"
              size={30}
              color={"white"}
              style={{ top: "1%" }}
              onPress={onPressRight}
            />
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.blue_100,
    height: 60,
  },
  iconView: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    // fontFamily: "Gentium_Book_Basic",
    top: "2%",
  },
});

export default HeaderCom;
