import * as React from "react";
import { useState } from "react";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ConfirmPincodeCard = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <RNKTextInput
          style={[styles.groupChild, styles.groupChildShadowBox]}
          placeholder="Place your text"
          value={rectangleTextInput}
          onChangeText={setRectangleTextInput}
        />
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <View style={[styles.groupInner, styles.groupChildShadowBox]} />
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        <Text
          style={[styles.didntReceiveAnyContainer, styles.enterThe6DigitTypo]}
        >
          <Text
            style={styles.didntReceiveAny}
          >{`Didn’t receive any code. `}</Text>
          <Text style={styles.resendCode}>RESEND CODE</Text>
        </Text>
        <Text
          style={[
            styles.enterThe6Digit,
            styles.enterThe6DigitClr,
            styles.enterThe6DigitTypo,
          ]}
        >
          Enter the 6-digit code
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View
          style={[
            styles.groupChild3,
            styles.groupPosition,
            styles.groupChildShadowBox1,
            styles.groupChildShadowBox2,
          ]}
        />
        <Text style={[styles.text, styles.textTypo, styles.textPosition]}>
          6 50 69 78 45
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>+237</Text>
        <Image
          style={styles.polygonIcon}
          resizeMode="cover"
          source={require("../assets/polygon-14.png")}
        />
        <Text
          style={[styles.editPosition, styles.textTypo, styles.textPosition]}
        >
          Edit
        </Text>
        <Pressable
          style={[styles.tabArea, styles.groupChildShadowBox1]}
          onPress={() => navigation.navigate("Register11")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
        <View
          style={[
            styles.groupChild3,
            styles.groupPosition,
            styles.groupChildShadowBox1,
            styles.groupChildShadowBox2,
          ]}
        />
        <Text
          style={[styles.tanwiKalson, styles.pincodeTypo, styles.edit1Position]}
        >
          TANWI Kalson
        </Text>
        <Text
          style={[
            styles.pincodeTypo,
            styles.edit1Position,
            styles.editPosition,
          ]}
        >
          Edit
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View
          style={[
            styles.groupChild5,
            styles.groupChildShadowBox1,
            styles.groupChildShadowBox2,
          ]}
        />
        <Text style={[styles.enterPincode, styles.pincodeTypo]}>
          Enter pincode
        </Text>
        <Text
          style={[
            styles.confirmYourPincode,
            styles.pincodeTypo,
            styles.enterThe6DigitClr,
          ]}
        >
          Confirm your pincode
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildShadowBox: {
    width: 35,
    shadowOpacity: 1,
    elevation: 26,
    shadowRadius: 26,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.whitesmoke_500,
    borderRadius: Border.br_xs,
    top: 26,
    position: "absolute",
  },
  enterThe6DigitTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  enterThe6DigitClr: {
    color: Color.iOSKeyLabel,
    top: 0,
  },
  groupPosition: {
    top: 0,
    left: 0,
    width: 305,
    position: "absolute",
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    elevation: 26,
    shadowRadius: 26,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    height: 40,
  },
  groupChildShadowBox2: {
    backgroundColor: Color.whitesmoke_500,
    elevation: 26,
    shadowRadius: 26,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  textPosition: {
    top: 13,
    fontSize: FontSize.size_base,
  },
  groupViewPosition: {
    display: "none",
    left: 0,
    width: 305,
    position: "absolute",
  },
  pincodeTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  edit1Position: {
    top: 14,
    fontSize: FontSize.size_lg,
  },
  editPosition: {
    left: 265,
    color: Color.blue_100,
    textDecoration: "underline",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 45,
    height: 40,
  },
  groupInner: {
    left: 90,
    height: 40,
  },
  rectangleView: {
    left: 135,
    height: 40,
  },
  groupChild1: {
    left: 180,
    height: 40,
  },
  groupChild2: {
    left: 225,
    height: 40,
  },
  didntReceiveAny: {
    color: Color.silver_200,
  },
  resendCode: {
    color: Color.blue_100,
    textDecoration: "underline",
  },
  didntReceiveAnyContainer: {
    top: 76,
    left: 25,
  },
  enterThe6Digit: {
    left: 0,
  },
  rectangleParent: {
    top: 84,
    left: 22,
    width: 260,
    height: 91,
    position: "absolute",
  },
  groupChild3: {
    height: 40,
  },
  text: {
    left: 67,
    color: Color.silver_200,
  },
  text1: {
    top: 12,
    color: Color.gray_800,
    left: 7,
  },
  polygonIcon: {
    top: 18,
    left: 44,
    width: 9,
    height: 9,
    position: "absolute",
  },
  tabArea: {
    top: 1,
    left: 252,
    backgroundColor: Color.whitesmoke_1000,
    width: 51,
    height: 40,
    elevation: 26,
    shadowRadius: 26,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  rectangleGroup: {
    height: 41,
  },
  tanwiKalson: {
    left: 7,
    color: Color.silver_200,
  },
  rectangleContainer: {
    top: 241,
    height: 40,
  },
  groupChild5: {
    height: 40,
    left: 0,
    top: 26,
    backgroundColor: Color.whitesmoke_500,
    width: 305,
    position: "absolute",
  },
  enterPincode: {
    top: 40,
    left: 7,
    color: Color.silver_200,
  },
  confirmYourPincode: {
    left: 3,
  },
  groupView: {
    top: 305,
    height: 66,
  },
  groupParent: {
    top: 214,
    left: 28,
    height: 175,
    width: 305,
    position: "absolute",
  },
});

export default ConfirmPincodeCard;
