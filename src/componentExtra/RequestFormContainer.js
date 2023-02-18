import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Color, FontSize, FontFamily, Border } from "../../GlobalStyle";
import {MaterialIcons }from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const RequestFormContainer = ({ carImageUrl, propTop, propBottom ,navigation,style}) => {
  // const navigation = useNavigation()
  const formToFillStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop, propBottom]);

  return (
    <View style={[styles.formToFill, formToFillStyle,]}>
      <View
        style={[
          styles.formToFillChild,
          styles.childBg,
          { height: 200 },
        ]}
      />
      <View
        style={[
          styles.rectangleParent,
          styles.amountPosition,
          // { backgroundColor: "lightgray" },
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupBorder,
            styles.groupChildPosition,
            styles.childBg,
            // { backgroundColor: "skyblue" },
          ]}
        />
        <Text style={[styles.reason, styles.reasonTypo, styles.reasonClr]}>
          Reason
        </Text>
        <TextInput
          style={[styles.enterYourMotive, styles.enterClr, styles.reasonTypo]}
        >
          Enter your motive for transfer
        </TextInput>
      </View>

      <View
        style={[styles.sendTo, styles.sendPosition, ]}
      >
        <View style={styles.rectangleGroup}>
          <View
            style={[
              styles.groupChild,
              styles.groupBorder,
              styles.groupChildPosition,
              styles.childBg,
              // { backgroundColor: "orange" },
            ]}
          />

          <Text
            style={[
              styles.amount1,
              styles.amountTypo,
              styles.reasonClr,
              styles.xafTypo,
            ]}
          >
            Send To
          </Text>
          <View
            style={[
              styles.rectangleContainer,
              styles.groupChildPosition,
              // { backgroundColor: "green" },
            ]}
          >
            <View
              style={[
                styles.groupInner,
                styles.groupBorder,
                // { backgroundColor: "green" },
              ]}
            />
            <Text style={[styles.contactIcon, styles.amountTypo, styles.xafTypo,]}>
              <TouchableOpacity
              onPress={() => navigation.navigate('SelectFromContactsNew')}
                style={[styles.icons8Contacts1, styles.groupItemPosition,]}
                // onPress={onIcons8Contacts1Press}
              >
             <MaterialIcons name="contact-phone"   color={'white'} size={30} />
              </TouchableOpacity>
            </Text>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={carImageUrl}
            />
          </View>
          <TextInput
            style={[styles.enterAmountTo, styles.amountTypo, styles.enterClr]}
          >
            Enter amount to Request
          </TextInput>
        </View>
      </View>
      <View
        style={[
          styles.amount,
          styles.amountPosition,
          // { backgroundColor: "gray" },
        ]}
      >
        <View style={styles.rectangleGroup}>
          <View
            style={[
              styles.groupChild,
              styles.groupBorder,
              styles.groupChildPosition,
              styles.childBg,
              
            ]}
          />
          <Text
            style={[
              styles.amount1,
              styles.amountTypo,
              styles.reasonClr,
              styles.xafTypo,
            ]}
          >
            Amount
          </Text>
          <View
            style={[
              styles.rectangleContainer,
              styles.groupChildPosition,
              // { backgroundColor: "green" },
            ]}
          >
            <View
              style={[
                styles.groupInner,
                styles.groupBorder,
                // { backgroundColor: "green" },
              ]}
            />
            <Text style={[styles.xaf, styles.amountTypo, styles.xafTypo]}>
              XAF
            </Text>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={carImageUrl}
            />
          </View>
          <TextInput
            style={[styles.enterAmountTo, styles.amountTypo, styles.enterClr]}
          >
            Enter amount to Request
          </TextInput>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childBg: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: "0%",
    width: "100%",
  },
  amountPosition: {
    left: "4.24%",
    right: "4.85%",
    width: "90.91%",
    height: "33.33%",
    position: "absolute",
  },
  sendPosition: {
    left: "4.24%",
    right: "4.85%",
    width: "90.91%",
    height: "33.33%",
    position: "absolute",
  },
  groupBorder: {
    borderColor: "#0000ee",
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition: {
    top: "45.71%",
    height: "64.29%",
    bottom: "0%",
    right: "0%",
  },
  reasonTypo: {
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  reasonClr: {
    color: Color.iOSKeyLabel,
    top: "0%",
  },
  enterClr: {
    color: Color.gray_2200,
    top: "45.36%",
  },
  amountTypo: {
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  xafTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
  },
  formToFillChild: {
    borderRadius: Border.br_3xs,
    bottom: "0%",
    right: "0%",
    // top: "20%",
    height: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    borderWidth: 0.3,
  },
  reason: {
    left: "0.33%",
  },
  enterYourMotive: {
    left: "1%",
  },
  rectangleParent: {
    top: "52.98%",
    bottom: "13.69%",
  },
  amount1: {
    left: "0.38%",
  },
  groupInner: {
    height: "102.78%",
    width: "101.23%",
    top: "-1.39%",
    right: "-0.62%",
    bottom: "-1.39%",
    left: "-0.62%",
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.blue_100,
    borderWidth: 1,
  },
  groupInnerContact: {
    height: "102.78%",
    width: "101.23%",
    top: "-1.39%",
    right: "-0.62%",
    bottom: "-1.39%",
    left: "-0.62%",
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.blue_100,
    borderWidth: 1,
  },
  xaf: {
    height: "52.78%",
    width: "40.74%",
    top: "20.33%",
    left: "27.05%",
    fontWeight: "700",
    color: Color.iOSKeyBackgroundHighlight,
  },
  contactIcon: {
    height: "20.78%",
    width: "36.74%",
    top: 15,
    left: "30.05%",
    fontWeight: "700",
    color: Color.iOSKeyBackgroundHighlight,
    borderTopLeftRadius:5,
  },
  groupIcon: {
    height: "65.28%",
    width: "27.47%",
    top: "19.44%",
    right: "9.57%",
    bottom: "15.28%",
    left: "62.96%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleContainer: {
    width: "27%",
    left: "73%",
    position: "absolute",
  },
  enterAmountTo: {
    left: "2.67%",
    fontFamily: FontFamily.gentiumBasic,
  },
  rectangleGroup: {
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  amount: {
    top: "10.71%",
    bottom: "55.95%",
  },
  sendTo: {
    top: "-30.71%",
    // bottom: "55.95%",
  },
  formToFill: {
    height: "21%",
    width: "91.67%",
    top: "59.5%",
    right: "4.17%",
    bottom: "19.5%",
    left: "4.17%",
    position: "absolute",
  },
  icons8Contacts1: {
    left: 268,
    width: 35,
  },
  groupItemPosition: {
    height: 35,
    top: 107,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    height: "70%",
    width: "100%",
    
  },
});

export default RequestFormContainer;
