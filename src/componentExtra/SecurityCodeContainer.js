import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import ExpirationDateContainer from "../components/ExpirationDateContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SecurityCodeContainer = () => {
  return (
    <View style={styles.nameOnCardParent}>
      <Text style={[styles.nameOnCard, styles.nameCardTypo, styles.cardTypo]}>
        Name (On card)
      </Text>
      <Text style={[styles.cardNumber, styles.nameCardTypo, styles.cardTypo]}>
        Card Number
      </Text>
      <View style={[styles.rectangleParent, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.enterName, styles.nameCardTypo]}>Enter name</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.enterName, styles.nameCardTypo]}>
          Enter card number
        </Text>
      </View>
      <ExpirationDateContainer
        expirationDateInput="Expiration Date"
        securityCodeInput="Enter expiration date"
        propMarginTop={9}
      />
      <ExpirationDateContainer
        expirationDateInput="Security Code (3 Digit)"
        securityCodeInput="Enter 3 digit security code"
        propMarginTop={98}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nameCardTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cardTypo: {
    color: Color.gray_100,
    fontWeight: "500",
    marginLeft: -152.5,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
  },
  groupPosition: {
    height: 40,
    marginLeft: -152.5,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  nameOnCard: {
    marginTop: -169,
  },
  cardNumber: {
    marginTop: -80,
  },
  groupChild: {
    marginTop: -20,
    borderRadius: Border.br_xs,
    backgroundColor: Color.whitesmoke_500,
  },
  enterName: {
    marginTop: -12,
    marginLeft: -122.5,
    color: Color.silver_200,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_lg,
  },
  rectangleParent: {
    marginTop: -138,
  },
  rectangleGroup: {
    marginTop: -49,
  },
  nameOnCardParent: {
    marginTop: -302.5,
    marginLeft: -157,
    height: 338,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
});

export default SecurityCodeContainer;
