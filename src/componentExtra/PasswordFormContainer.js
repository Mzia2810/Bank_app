import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PasswordFormContainer = ({
  enterEmail,
  enterYourEMail,
  propTop,
  propLeft,
}) => {
  const groupView12Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const enterYourEMailStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View
      style={[
        styles.rectangleParent,
        styles.groupChildPosition,
        groupView12Style,
      ]}
    >
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Text style={[styles.enterEmail, styles.enterFlexBox]}>{enterEmail}</Text>
      <Text
        style={[
          styles.enterYourEMail,
          styles.enterFlexBox,
          enterYourEMailStyle,
        ]}
      >
        {enterYourEMail}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 305,
    left: 0,
    position: "absolute",
  },
  enterFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 26,
    borderRadius: Border.br_xs,
    backgroundColor: Color.whitesmoke_500,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 26,
    elevation: 26,
    shadowOpacity: 1,
    height: 40,
  },
  enterEmail: {
    top: 35,
    left: 7,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    color: Color.silver_200,
  },
  enterYourEMail: {
    top: 0,
    left: 2,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
  },
  rectangleParent: {
    top: 84,
    height: 66,
  },
});

export default PasswordFormContainer;
