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
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const MomoPayContainer = ({
  paymentMethod,
  paymentMethodImageUrl,
  paymentMethodLogoUrl,
  propLeft,
  onRectanglePressablePress,
}) => {
  const moMoPAYStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={styles.momoPay}>
      <View style={[styles.momoPayChild, styles.momoShadowBox]} />
      <Text style={[styles.momoPay1, moMoPAYStyle]}>{paymentMethod}</Text>
      <Image
        style={[styles.paySvgrepoCom11, styles.groupIconPosition]}
        resizeMode="cover"
        source={paymentMethodImageUrl}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        resizeMode="cover"
        source={paymentMethodLogoUrl}
      />
      <Pressable
        style={[styles.momoPayItem, styles.momoShadowBox]}
        onPress={onRectanglePressablePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  momoShadowBox: {
    height: 41,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
    left: 0,
    right: 0,
    top: 9,
    position: "absolute",
  },
  groupIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  momoPayChild: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
  momoPay1: {
    top: 17,
    left: 98,
    fontSize: FontSize.size_4xl,
    letterSpacing: 4.6,
    lineHeight: 29,
    textTransform: "capitalize",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  paySvgrepoCom11: {
    top: 0,
    left: 22,
    width: 59,
    height: 60,
  },
  groupIcon: {
    height: "46.67%",
    width: "10.92%",
    top: "26.67%",
    right: "6.8%",
    bottom: "26.67%",
    left: "82.27%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  momoPayItem: {
    shadowColor: "rgba(0, 0, 0, 0.94)",
  },
  momoPay: {
    top: 562,
    right: 31,
    left: 30,
    height: 60,
    position: "absolute",
  },
});

export default MomoPayContainer;
