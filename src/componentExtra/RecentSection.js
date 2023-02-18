import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyle";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const RecentSection = ({ propTop, onIcons8Contacts1Press }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <View style={[styles.groupChild, styles.groupBg]} />
      <View style={[styles.rectangleGroup, styles.caashoutPointPosition,]}>
        {/* <View
          style={[styles.groupItem, styles.groupItemPosition, styles.groupBg]}
        />
        <Text style={[styles.sendTo, styles.sendToTypo,{zIndex:5000}]}>Send To</Text>
        <Text style={styles.enterNameOr}>Enter Name or Number</Text>
        <Pressable
          style={[styles.icons8Contacts1, styles.groupItemPosition]}
          onPress={onIcons8Contacts1Press}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../../assets/icons8contacts-1.png")}
          />
        </Pressable> */}
        <View style={[styles.caashoutPoint, styles.caashoutPointPosition]}>
          <View style={styles.groupParent}>
            <View style={[styles.stellaParent, styles.parentLayout]}>
              <Text style={styles.stella}>Stella</Text>
              <Image
                style={[styles.groupInner, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/ellipse-181.png")}
              />
            </View>
            <View style={styles.preciousParent}>
              <Text style={[styles.parentPosition, styles.janeTypo]}>
                Precious
              </Text>
              <Image
                style={[styles.ellipseIcon, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/ellipse-161.png")}
              />
            </View>
            <View style={[styles.danielParent, styles.parentLayout]}>
              <Text style={[styles.daniel, styles.janeTypo]}>Daniel</Text>
              <Image
                style={[styles.groupInner, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/ellipse-171.png")}
              />
            </View>
            <View style={styles.mirabelleParent}>
              <Text style={styles.janeTypo}>Mirabelle</Text>
              <Image
                style={[styles.groupChild2, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/ellipse-191.png")}
              />
            </View>
            <View
              style={[
                styles.janeParent,
                styles.parentPosition,
                styles.parentLayout,
              ]}
            >
              <Text style={[styles.jane, styles.janeTypo]}>Jane</Text>
              <Image
                style={[styles.groupInner, styles.groupLayout]}
                resizeMode="cover"
                source={require("../../assets/ellipse-191.png")}
              />
            </View>
          </View>
          <View
            style={[styles.frequentCashOutPointsParent, styles.parentPosition]}
          >
            <Text style={[styles.frequentCashOut, styles.parentPosition]}>
              Frequent Cash Out Points
            </Text>
            <TouchableOpacity  style={{alignSelf:'flex-end'}}>

            <Text
             
              >
              Show Recent
            </Text>
              </TouchableOpacity>
            <View style={[styles.tabArea, styles.tabAreaPosition]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupBg: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_3xs,
  },
  caashoutPointPosition: {
    width: 309,
    top: 0,
    position: "absolute",
  },
  groupItemPosition: {
    height: 35,
    top: 107,
    position: "absolute",
  },
  sendToTypo: {
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_base,
  },
  parentLayout: {
    width: "13.2%",
    top: "0%",
  },
  groupLayout: {
    height: 40,
    width: 40,
    top: 0,
    position: "absolute",
  },
  janeTypo: {
    top: "73.33%",
    lineHeight: 16,
    // letterSpacing: 1.4,
    fontSize: 12,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "center",
    color: Color.iOSKeyLabel,
  },
  parentPosition: {
    left: "0%",
    position: "absolute",
  },
  tabAreaPosition: {
    top: "5%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    height: 100,
    width: 330,
    position: "absolute",
  },
  groupItem: {
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderWidth: 0.3,
    width: 300,
    left: 5,
  },
  sendTo: {
    top: 129,
    lineHeight: 20,
    letterSpacing: 1.8,
    textAlign: "center",
    left: 4,
    position: "absolute",
  },
  enterNameOr: {
    top: 118,
    fontSize: FontSize.size_xs,
    letterSpacing: 1.5,
    lineHeight: 17,
    color: Color.gray_2200,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
    left: 10,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  icons8Contacts1: {
    left: 268,
    width: 35,
  },
  stella: {
    top: "72.88%",
    left: "12.5%",
    lineHeight: 16,
    letterSpacing: 1.4,
    fontSize: 12,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  groupInner: {
    left: 0,
  },
  stellaParent: {
    height: "98.33%",
    bottom: "1.67%",
    left: "86.8%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  ellipseIcon: {
    left: 4,
    height: 40,
    width: 40,
  },
  preciousParent: {
    width: "16.17%",
    right: "18.81%",
    left: "65.02%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  daniel: {
    left: "7.5%",
    position: "absolute",
  },
  danielParent: {
    right: "42.9%",
    left: "43.89%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChild2: {
    left: 5,
  },
  mirabelleParent: {
    width: "17.82%",
    right: "61.72%",
    left: "20.46%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  jane: {
    left: "27.5%",
    position: "absolute",
  },
  janeParent: {
    right: "86.8%",
    top: "0%",
    bottom: "0%",
    height: "100%",
  },
  groupParent: {
    height: "71.43%",
    width: "98.06%",
    top: "28.57%",
    right: "1.29%",
    left: "0.65%",
    bottom: "0%",
    position: "absolute",
  },
  frequentCashOut: {
    top: "0%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize:12,
    left: "0%",
    lineHeight: 20,
    letterSpacing: 1.8,
  },
  showRecent: {
    left: "77.99%",
    textDecoration: "underline",
    fontStyle: "italic",
  },
  tabArea: {
    height: "80%",
    width: "23.3%",
    bottom: "15%",
    left: "76.7%",
    backgroundColor: Color.gainsboro_700,
    right: "0%",
  },
  frequentCashOutPointsParent: {
    height: "23.81%",
    bottom: "76.19%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  caashoutPoint: {
    height: 84,
    left: 0,
  },
  rectangleGroup: {
    height: 102,
    left: 10,
    width: 309,
  },
  rectangleParent: {
    top: 241,
    left: 15,
    height: 155,
    width: 330,
    position: "absolute",
  },
});

export default RecentSection;
