import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const VeteransCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupParent, styles.groupParentLayout]}>
      <View
        style={[
          styles.tabAreaParent,
          styles.tabPosition,
          styles.groupParentLayout,
        ]}
      >
        <View style={[styles.tabArea, styles.tabPosition]} />
        <View style={[styles.groupChild, styles.groupParentLayout]} />
      </View>
      <View style={[styles.njangiParent, styles.njangiLayout]}>
        <View style={[styles.njangi, styles.njangiLayout]}>
          <Text style={styles.veterans}>Veterans</Text>
          <Text style={styles.members}>20 Members</Text>
        </View>
        <View style={styles.njangi1}>
          <Pressable
            style={[styles.kupexanClassContainer, styles.tabPosition]}
            onPress={() => navigation.navigate("NjangiDaily2")}
          >
            <Text style={styles.textTypo}>
              Kupexan - Class of 83<Text style={styles.text1}>{` `}</Text>
            </Text>
          </Pressable>
          <Text style={[styles.members1, styles.textTypo, styles.tabPosition]}>
            35 Members
          </Text>
        </View>
        <Text
          style={[styles.dailyNjangies2, styles.textTypo, styles.tabPosition]}
        >
          Daily Njangies [2]
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 89,
    width: 330,
  },
  tabPosition: {
    top: 0,
    position: "absolute",
  },
  njangiLayout: {
    width: 298,
    position: "absolute",
  },
  textTypo: {
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
  },
  tabArea: {
    borderRadius: Border.br_xs,
    width: 127,
    height: 75,
    left: 11,
  },
  groupChild: {
    marginTop: -44.5,
    marginLeft: -165,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_4xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    position: "absolute",
  },
  tabAreaParent: {
    left: 0,
  },
  veterans: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.blue_100,
    fontFamily: FontFamily.gentiumBasic,
    textDecoration: "underline",
    top: 0,
    left: 0,
    position: "absolute",
  },
  members: {
    left: 228,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.blue_100,
    fontFamily: FontFamily.gentiumBasic,
    top: 0,
    position: "absolute",
  },
  njangi: {
    top: 17,
    height: 19,
    left: 0,
  },
  text1: {
    textDecoration: "underline",
  },
  kupexanClassContainer: {
    left: 0,
  },
  members1: {
    left: 227,
  },
  njangi1: {
    top: 43,
    width: 297,
    height: 16,
    left: 0,
    position: "absolute",
  },
  dailyNjangies2: {
    left: 108,
    fontStyle: "italic",
  },
  njangiParent: {
    top: 11,
    height: 59,
    left: 11,
  },
  groupParent: {
    top: 187,
    left: 0,
    position: "absolute",
  },
});

export default VeteransCard;
