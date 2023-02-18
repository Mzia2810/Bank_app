import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SectionCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupPosition1]}>
          <View style={[styles.tabAreaParent, styles.tabParentLayout]}>
            <View style={[styles.tabArea, styles.tabLayout]} />
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Text
              style={[styles.xafLayout, styles.daily2Clr, styles.xafPosition]}
            >
              XAF 000 000
            </Text>
            <Text
              style={[styles.daily2, styles.daily2Position, styles.daily2Clr]}
            >
              Daily [2]
            </Text>
          </View>
          <Pressable
            style={[styles.tabAreaGroup, styles.tabParentLayout]}
            onPress={() => navigation.navigate("NjangiWeekly")}
          >
            <View style={[styles.tabArea1, styles.tabLayout]} />
            <View style={[styles.groupInner, styles.groupPosition]} />
            <Text
              style={[styles.xaf0000001, styles.weeklyClr, styles.xafLayout]}
            >
              XAF 000 000
            </Text>
            <Text style={[styles.weekly1, styles.weeklyClr]}>Weekly [1]</Text>
          </Pressable>
        </View>
        <View style={[styles.groupView, styles.groupPosition1]}>
          <Pressable
            style={[styles.tabAreaParent, styles.tabParentLayout]}
            onPress={() => navigation.navigate("NjangiMainDaily3")}
          >
            <View style={[styles.tabArea, styles.tabLayout]} />
            <View style={[styles.groupInner, styles.groupPosition]} />
            <Text
              style={[styles.weeklyClr, styles.xafLayout, styles.xafPosition]}
            >
              XAF 000 000
            </Text>
            <Text
              style={[
                styles.biWeekly0,
                styles.weeklyClr,
                styles.daily2Position,
              ]}
            >
              Bi-Weekly [0]
            </Text>
          </Pressable>
          <View style={[styles.tabAreaParent1, styles.tabParentLayout]}>
            <View style={[styles.tabArea, styles.tabLayout]} />
            <Pressable
              style={[styles.groupInner, styles.groupPosition]}
              onPress={() => navigation.navigate("NjangiMainDaily4")}
            />
            <Text style={[styles.xafLayout, styles.xafPosition]}>
              XAF 000 000
            </Text>
            <Text
              style={[
                styles.biWeekly0,
                styles.weeklyClr,
                styles.daily2Position,
              ]}
            >
              Monthly [0]
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupWrapper, styles.wrapperLayout]}>
        <View style={[styles.myNjangiesTotal5Wrapper, styles.wrapperLayout]}>
          <Text
            style={[
              styles.myNjangiesTotalContainer,
              styles.wrapperLayout,
              styles.weeklyClr,
            ]}
          >
            <Text
              style={[styles.myNjangies, styles.total5Typo]}
            >{`My Njangies `}</Text>
            <Text style={styles.total5Typo}>[Total: 5]</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    height: 35,
    left: 0,
    position: "absolute",
  },
  tabParentLayout: {
    width: 115,
    height: 35,
    top: 0,
    position: "absolute",
  },
  tabLayout: {
    height: 30,
    width: 44,
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    marginLeft: -57.5,
    marginTop: -17.5,
    width: 115,
    height: 35,
    borderRadius: Border.br_4xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  daily2Clr: {
    color: Color.iOSKeyBackgroundHighlight,
    fontSize: FontSize.size_base,
  },
  xafPosition: {
    left: 8,
    height: 12,
    width: 97,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    top: 18,
  },
  daily2Position: {
    left: 7,
    fontStyle: "italic",
    top: 2,
    height: 12,
    width: 97,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  weeklyClr: {
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_base,
  },
  xafLayout: {
    height: 12,
    width: 97,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    top: 18,
    position: "absolute",
  },
  wrapperLayout: {
    height: 18,
    width: 131,
    position: "absolute",
  },
  total5Typo: {
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBasic,
  },
  groupChild: {
    marginTop: -75,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_4xs,
    height: 150,
    width: 330,
    left: "50%",
    top: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  tabArea: {
    left: 0,
  },
  groupItem: {
    backgroundColor: Color.blue_100,
  },
  daily2: {
    fontStyle: "italic",
  },
  tabAreaParent: {
    left: 0,
  },
  tabArea1: {
    left: 4,
  },
  groupInner: {
    backgroundColor: Color.whitesmoke_400,
  },
  xaf0000001: {
    left: 12,
    height: 12,
    width: 97,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    top: 18,
    color: Color.iOSKeyLabel,
  },
  weekly1: {
    left: 11,
    fontStyle: "italic",
    top: 2,
    color: Color.iOSKeyLabel,
    height: 12,
    width: 97,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  tabAreaGroup: {
    left: 181,
  },
  groupContainer: {
    width: 296,
    top: 0,
  },
  biWeekly0: {
    fontStyle: "italic",
  },
  tabAreaParent1: {
    left: 182,
  },
  groupView: {
    top: 43,
    width: 297,
  },
  groupParent: {
    top: 46,
    left: 15,
    height: 78,
    width: 297,
    position: "absolute",
  },
  myNjangies: {
    fontStyle: "italic",
  },
  myNjangiesTotalContainer: {
    textAlign: "left",
    left: 0,
    top: 0,
  },
  myNjangiesTotal5Wrapper: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 11,
    left: 91,
  },
  rectangleParent: {
    marginTop: -302,
    height: 150,
    width: 330,
    left: "50%",
    top: "50%",
    marginLeft: -165,
    position: "absolute",
  },
});

export default SectionCard;
