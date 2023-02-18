import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PasswordFormContainer from "../components/PasswordFormContainer";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const EmailContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.lineParent}>
      <View style={styles.groupChild} />
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={[styles.phone, styles.phoneLayout]}>
        <Text style={[styles.phone1, styles.emailTypo]}>{`Phone `}</Text>
        <Pressable
          style={[styles.phoneChild, styles.phoneLayout]}
          onPress={() => navigation.navigate("MonkapLoginWithPhone")}
        />
      </View>
      <PasswordFormContainer
        enterEmail="Enter email"
        enterYourEMail="Enter Your e-mail"
        propTop={84}
        propLeft={2}
      />
      <PasswordFormContainer
        enterEmail="Enter password"
        enterYourEMail="Enter Your Password"
        propTop={174}
        propLeft={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  phoneLayout: {
    height: 50,
    width: 101,
    position: "absolute",
  },
  groupChild: {
    top: 40,
    left: 215,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2,
    width: 43,
    height: 2,
    position: "absolute",
  },
  email: {
    marginTop: -106,
    marginLeft: 63.5,
    color: Color.iOSKeyLabel,
  },
  phone1: {
    marginTop: -11,
    marginLeft: -26.5,
    color: Color.gray_800,
  },
  phoneChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_700,
  },
  phone: {
    marginTop: -120,
    marginLeft: -139.5,
    left: "50%",
    top: "50%",
    height: 50,
    width: 101,
  },
  lineParent: {
    top: 182,
    left: 28,
    width: 305,
    height: 240,
    position: "absolute",
  },
});

export default EmailContainer;
