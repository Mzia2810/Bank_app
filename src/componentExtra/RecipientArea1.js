import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const RecipientArea1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.tabAreaPosition]} />
      <View style={[styles.lineParent, styles.parentPosition]}>
        <View style={styles.groupItem} />
        <Text style={styles.monkapUser}>MoNkap User</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector32.png")}
        />
        <View style={[styles.tabArea, styles.tabAreaPosition]} />
      </View>
      <Text style={[styles.recipient, styles.othersTypo]}>Recipient</Text>
      <View style={[styles.othersParent, styles.parentPosition]}>
        <Text style={[styles.others, styles.othersTypo]}>Others</Text>
        <Image
          style={[styles.groupInner, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-239.png")}
        />
        <Pressable
          style={[styles.tabArea, styles.tabAreaPosition]}
          onPress={() => navigation.navigate("TransferOthers")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabAreaPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  parentPosition: {
    top: "26.19%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  othersTypo: {
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  groupItem: {
    height: "1.92%",
    width: "89.32%",
    top: "93.27%",
    right: "5.34%",
    bottom: "4.81%",
    left: "5.34%",
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderTopWidth: 1,
    position: "absolute",
  },
  monkapUser: {
    top: "59.62%",
    left: "5.83%",
    color: Color.blue_100,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 19,
    letterSpacing: 1.6,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorIcon: {
    height: "55.77%",
    width: "42.72%",
    top: "5.77%",
    right: "32.04%",
    bottom: "38.46%",
    left: "25.24%",
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
  },
  lineParent: {
    height: "61.9%",
    width: "31.21%",
    right: "68.18%",
    bottom: "11.9%",
    left: "0.61%",
  },
  recipient: {
    top: "2.38%",
    left: "41.82%",
    fontSize: FontSize.size_base,
    letterSpacing: 1.8,
    lineHeight: 20,
  },
  others: {
    top: "58.49%",
    left: "13.33%",
    lineHeight: 19,
    letterSpacing: 1.6,
    fontSize: FontSize.size_sm,
    color: Color.iOSKeyLabel,
  },
  groupInner: {
    height: "60.38%",
    width: "53.33%",
    right: "21.67%",
    bottom: "39.62%",
    left: "25%",
    top: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  othersParent: {
    height: "63.1%",
    width: "18.18%",
    right: "2.42%",
    bottom: "10.71%",
    left: "79.39%",
    opacity: 0.5,
  },
  rectangleParent: {
    height: "10.5%",
    width: "91.67%",
    top: "27.25%",
    right: "4.17%",
    bottom: "62.25%",
    left: "4.17%",
    position: "absolute",
  },
});

export default RecipientArea1;
