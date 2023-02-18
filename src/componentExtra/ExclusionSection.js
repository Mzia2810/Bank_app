import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ExclusionSection = ({ njanguiErrorMessage, propLeft }) => {
  const sorryButYouStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={styles.groupWrapper}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.njangies, styles.njangiesTypo]}>Njangies</Text>
        <Text
          style={[styles.sorryButYou, styles.njangiesTypo, sorryButYouStyle]}
        >
          {njanguiErrorMessage}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    marginTop: -44.5,
    height: 89,
    width: 330,
    left: "50%",
    top: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  njangiesTypo: {
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  njangies: {
    top: 11,
    left: 142,
    fontStyle: "italic",
    color: Color.iOSKeyLabel,
    textAlign: "left",
  },
  sorryButYou: {
    top: 37,
    left: 20,
    color: Color.red_100,
    textAlign: "center",
  },
  groupWrapper: {
    marginTop: -135,
    height: 89,
    width: 330,
    left: "50%",
    top: "50%",
    marginLeft: -165,
    position: "absolute",
  },
});

export default ExclusionSection;
