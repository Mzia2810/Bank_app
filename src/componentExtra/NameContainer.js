import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NameContainer = ({
  contactName,
  contactPhoneNumber,
  propTop,
  propLeft,
  propLeft1,
}) => {
  const yourNameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const kalsonTAWAStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const yourName1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={[styles.yourName, yourNameStyle]}>
      <Text style={[styles.kalsonTawa, styles.yourName1Typo, kalsonTAWAStyle]}>
        {contactName}
      </Text>
      <Text style={[styles.yourName1, styles.yourName1Typo, yourName1Style]}>
        {contactPhoneNumber}
      </Text>
      <View style={styles.yourNameChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  yourName1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  kalsonTawa: {
    top: 20,
    left: 32,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.3,
    lineHeight: 29,
    color: Color.gray_200,
  },
  yourName1: {
    top: 0,
    left: 28,
    fontSize: FontSize.size_2xs,
    letterSpacing: 0.7,
    lineHeight: 16,
    color: Color.silver_300,
  },
  yourNameChild: {
    top: 60,
    left: 0,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.29)",
    borderTopWidth: 1,
    width: 325,
    height: 1,
    position: "absolute",
  },
  yourName: {
    top: 216,
    left: 18,
    width: 324,
    height: 60,
    position: "absolute",
  },
});

export default NameContainer;
