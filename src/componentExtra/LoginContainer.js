import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LoginContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.logins, styles.loginsLayout]}>
      <View
        style={[
          styles.loginsChild,
          styles.tabAreaPosition,
          styles.loginsLayout,
        ]}
      />
      <View style={[styles.register, styles.loginLayout, styles.loginPosition]}>
        <Text style={[styles.register1, styles.login1Typo]}>Register</Text>
        <Pressable
          style={[styles.tabArea, styles.loginLayout, styles.tabAreaPosition]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", {
              screen: "OMoneyRegistration",
            })
          }
        />
      </View>
      <View style={[styles.login, styles.loginLayout, styles.loginPosition]}>
        <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        <Pressable
          style={[styles.tabArea, styles.loginLayout, styles.tabAreaPosition]}
          onPress={() => navigation.navigate("OMoneyOnMonkapHomeHideBalance")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginsLayout: {
    height: 65,
    width: 360,
    position: "absolute",
  },
  tabAreaPosition: {
    top: 0,
    left: 0,
  },
  loginLayout: {
    height: 41,
    width: 91,
    position: "absolute",
  },
  loginPosition: {
    top: 15,
    width: 91,
  },
  login1Typo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    color: Color.whitesmoke_700,
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1.9,
    textDecoration: "underline",
    fontSize: FontSize.size_4xl,
    top: 7,
    position: "absolute",
  },
  loginsChild: {
    backgroundColor: Color.gray_1000,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 65,
    width: 360,
    position: "absolute",
    top: 0,
  },
  register1: {
    left: 2,
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
  },
  register: {
    left: 48,
  },
  login1: {
    left: 16,
  },
  login: {
    left: 237,
  },
  logins: {
    top: 483,
    left: 0,
    height: 65,
    width: 360,
    position: "absolute",
  },
});

export default LoginContainer;
