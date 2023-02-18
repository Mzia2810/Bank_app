import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const VeteransSection = () => {
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
          <Pressable
            style={[styles.veterans, styles.tabPosition]}
            onPress={() => navigation.navigate("NjangiMainDaily1")}
          >
            <Text style={styles.veterans1}>Veterans</Text>
          </Pressable>
          <Text style={[styles.members, styles.membersTypo]}>20 Members</Text>
        </View>
        <View style={styles.njangi1}>
          <Text
            style={[styles.kupexanClass, styles.members1Typo]}
          >{`Kupexan - Class of 83 `}</Text>
          <Text style={[styles.members1, styles.members1Typo]}>35 Members</Text>
        </View>
        <Text style={[styles.dailyNjangies2, styles.membersTypo]}>
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
  membersTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    top: 0,
    position: "absolute",
  },
  members1Typo: {
    color: Color.blue_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
    top: 0,
    position: "absolute",
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
  veterans1: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
  },
  veterans: {
    left: 0,
  },
  members: {
    left: 228,
  },
  njangi: {
    top: 17,
    height: 19,
    left: 0,
  },
  kupexanClass: {
    textDecoration: "underline",
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

export default VeteransSection;
