import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ExpirationDateContainer = ({
  expirationDateInput,
  securityCodeInput,
  propMarginTop,
}) => {
  const groupView11Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.expirationDateParent, groupView11Style]}>
      <Text style={[styles.expirationDate, styles.expirationTypo]}>
        {expirationDateInput}
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.enterExpirationDate, styles.expirationTypo]}>
          {securityCodeInput}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  expirationTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    height: 40,
    width: 305,
    left: "50%",
    top: "50%",
    marginLeft: -152.5,
    position: "absolute",
  },
  expirationDate: {
    marginTop: -35.5,
    fontWeight: "500",
    color: Color.gray_100,
    marginLeft: -152.5,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
  },
  groupChild: {
    marginTop: -20,
    borderRadius: Border.br_xs,
    backgroundColor: Color.whitesmoke_500,
  },
  enterExpirationDate: {
    marginTop: -12,
    marginLeft: -122.5,
    color: Color.silver_200,
  },
  rectangleParent: {
    marginTop: -4.5,
  },
  expirationDateParent: {
    marginTop: 9,
    height: 71,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginLeft: -152.5,
  },
});

export default ExpirationDateContainer;
