import * as React from "react";
import { useState, useMemo } from "react";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NameCard = ({
  fullNameInput,
  pincodeInput,
  fullNameInputField,
  propTop,
  propLeft,
  propLeft1,
}) => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const groupView13Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const enterYourFullStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View
      style={[
        styles.rectangleParent,
        styles.groupChildPosition,
        groupView13Style,
      ]}
    >
      <RNKTextInput
        style={[styles.groupChild, styles.groupChildPosition]}
        placeholder={fullNameInput}
        value={rectangleTextInput}
        onChangeText={setRectangleTextInput}
      />
      <Text style={[styles.enterFullName, styles.enterFlexBox]}>
        {pincodeInput}
      </Text>
      <Text
        style={[styles.enterYourFull, styles.enterFlexBox, enterYourFullStyle]}
      >
        {fullNameInputField}
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
  },
  enterFullName: {
    top: 35,
    left: 7,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    color: Color.silver_200,
  },
  enterYourFull: {
    top: 0,
    left: 3,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
  },
  rectangleParent: {
    top: 89,
    height: 66,
  },
});

export default NameCard;
