import * as React from "react";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, Text, Image, View } from "react-native";
import NameCard from "../components/NameCard";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PincodeForm = () => {
  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState("");

  return (
    <View style={styles.groupParent}>
      <View style={[styles.rectangleParent, styles.wrapperPosition]}>
        <View style={[styles.wrapper, styles.wrapperPosition]} autoScroll>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={rectangleDropdownOpen}
            setOpen={setRectangleDropdownOpen}
            value={rectangleDropdownValue}
            setValue={setRectangleDropdownValue}
            placeholder="Enter phone number"
            dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
          />
        </View>
        <Text style={styles.enterPhoneNumber}>Enter phone number</Text>
        <Text style={[styles.text, styles.textClr]}>+237</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/polygon-1.png")}
        />
        <Text style={[styles.enterYourPhone, styles.textClr]}>
          Enter Your Phone Number
        </Text>
      </View>
      <NameCard
        fullNameInput="Enter Full name"
        pincodeInput="Enter Full name"
        fullNameInputField="Enter your full name"
        propTop={89}
        propLeft={0}
        propLeft1={3}
      />
      <NameCard
        fullNameInput="Enter pincode"
        pincodeInput="Enter pincode"
        fullNameInputField="Create your pincode (5 digits)"
        propTop={178}
      />
      <NameCard
        fullNameInput="Enter pincode"
        pincodeInput="Enter pincode"
        fullNameInputField="Confirm your pincode"
        propTop={267}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#f1f1f1",
  },
  wrapperPosition: {
    left: 0,
    width: 305,
    position: "absolute",
  },
  textClr: {
    color: Color.iOSKeyLabel,
    textAlign: "left",
    position: "absolute",
  },
  dropdownpicker: {
    backgroundColor: Color.whitesmoke_500,
  },
  wrapper: {
    top: 26,
    borderRadius: Border.br_xs,
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
  enterPhoneNumber: {
    left: 67,
    color: Color.silver_200,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    top: 35,
    position: "absolute",
  },
  text: {
    left: 7,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    top: 35,
    color: Color.iOSKeyLabel,
  },
  groupChild: {
    top: 44,
    left: 50,
    width: 9,
    height: 9,
    position: "absolute",
  },
  enterYourPhone: {
    left: 2,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.gentiumBookBasic,
    top: 0,
  },
  rectangleParent: {
    height: 66,
    top: 0,
  },
  groupParent: {
    top: 110,
    left: 28,
    height: 333,
    width: 305,
    position: "absolute",
  },
});

export default PincodeForm;
