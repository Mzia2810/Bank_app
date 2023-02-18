import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Margin, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ReasonContainer = ({
  carImageUrl,
  propBorderColor,
  propLeft,
  propFontWeight,
  propBorderColor1,
  propFontWeight1,
  propBackgroundColor,
  propBorderColor2,
  propBorderColor3,
  propFontWeight2,
  onIcons8Contacts1Press,
}) => {
  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  const sendToStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("fontWeight", propFontWeight),
    };
  }, [propLeft, propFontWeight]);

  const rectangleView2Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor1),
    };
  }, [propBorderColor1]);

  const amountStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight1),
    };
  }, [propFontWeight1]);

  const rectangleView3Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("borderColor", propBorderColor2),
    };
  }, [propBackgroundColor, propBorderColor2]);

  const rectangleView4Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor3),
    };
  }, [propBorderColor3]);

  const reasonStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight2),
    };
  }, [propFontWeight2]);

  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View
          style={[styles.groupChild, styles.groupLayout, rectangleView1Style]}
        />
        <Text style={[styles.sendTo, styles.sendToTypo, sendToStyle]}>
          Send To
        </Text>
        <Text style={[styles.enterNameOr, styles.enterTypo]}>
          Enter Name or MoMo Number
        </Text>
        <Pressable
          style={styles.icons8Contacts1}
          onPress={onIcons8Contacts1Press}
        >
          <Image style={styles.icon} resizeMode="cover" source={carImageUrl} />
        </Pressable>
      </View>
      <View style={[styles.rectangleGroup, styles.mt12]}>
        <View
          style={[styles.groupItem, styles.groupLayout, rectangleView2Style]}
        />
        <Text style={[styles.amount, styles.sendToTypo, amountStyle]}>
          Amount
        </Text>
        <Text style={[styles.enterAmountTo, styles.enterTypo]}>
          Enter amount to Send
        </Text>
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupInner, rectangleView3Style]} />
          <Text style={styles.xaf}>XAF</Text>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group107.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.mt12]}>
        <View
          style={[styles.groupItem, styles.groupLayout, rectangleView4Style]}
        />
        <Text style={[styles.amount, styles.sendToTypo, reasonStyle]}>
          Reason
        </Text>
        <Text style={[styles.enterAmountTo, styles.enterTypo]}>
          Enter Reason for Sending
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: Margin.m_xl,
  },
  groupLayout: {
    height: 41,
    borderWidth: 0.3,
    borderColor: "#ea9311",
    borderStyle: "solid",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_2xs,
    left: 0,
    width: 300,
    position: "absolute",
  },
  sendToTypo: {
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 22,
    letterSpacing: 1.9,
    fontSize: FontSize.size_lg,
    top: 0,
    position: "absolute",
  },
  enterTypo: {
    color: Color.gray_2200,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    top: 29,
  },
  sendTo: {
    left: 3,
  },
  enterNameOr: {
    top: 40,
    left: 8,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  icons8Contacts1: {
    left: 260,
    top: 32,
    width: 35,
    height: 35,
    position: "absolute",
  },
  rectangleParent: {
    height: 70,
    width: 300,
  },
  groupItem: {
    top: 22,
  },
  amount: {
    left: 4,
    width: 65,
  },
  enterAmountTo: {
    top: 33,
    left: 11,
  },
  groupInner: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.orangeColor,
    borderWidth: 1,
    width: 82,
    height: 40,
    top: 0,
    borderColor: "#ea9311",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  xaf: {
    top: 11,
    left: 13,
    fontWeight: "700",
    width: 33,
    height: 19,
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  groupIcon: {
    height: "60.26%",
    width: "27.47%",
    top: "20.51%",
    right: "9.57%",
    bottom: "19.23%",
    left: "62.96%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleContainer: {
    top: 23,
    left: 219,
    width: 81,
    height: 39,
    position: "absolute",
  },
  rectangleGroup: {
    height: 63,
    width: 300,
  },
  groupParent: {
    top: 374,
    left: 29,
    position: "absolute",
  },
});

export default ReasonContainer;
