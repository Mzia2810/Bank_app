import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const MyNjangiesSection = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.tabLayout, styles.njangiesPosition]}>
            <View style={[styles.tabArea, styles.tabPosition]} />
            <View
              style={[styles.groupItem, styles.groupPosition, styles.tabLayout]}
            />
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
          <View
            style={[
              styles.rectangleGroup,
              styles.tabArea1Layout,
              styles.groupPosition,
            ]}
          >
            <View style={[styles.groupInner, styles.groupInnerPosition]} />
            <Text
              style={[styles.xaf0000001, styles.weeklyClr, styles.xafLayout]}
            >
              XAF 000 000
            </Text>
            <Text style={[styles.weekly1, styles.weeklyClr]}>Weekly [1]</Text>
            <Pressable
              style={[styles.tabArea1Layout, styles.tabPosition]}
              onPress={() => navigation.navigate("NjangiWeekly")}
            />
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <Pressable
            style={styles.njangiesPosition}
            onPress={() => navigation.navigate("NjangiMainDaily3")}
          >
            <View style={[styles.tabArea, styles.tabPosition]} />
            <View style={[styles.rectangleView, styles.groupInnerPosition]} />
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
          <Pressable
            style={[styles.tabAreaContainer, styles.tabLayout]}
            onPress={() => navigation.navigate("NjangiMainDaily4")}
          >
            <View style={[styles.tabArea, styles.tabPosition]} />
            <View style={[styles.rectangleView, styles.groupInnerPosition]} />
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
          </Pressable>
        </View>
      </View>
      <View style={[styles.groupWrapper, styles.wrapperLayout]}>
        <View style={[styles.wrapperLayout, styles.njangiesPosition]}>
          <Text
            style={[
              styles.myNjangiesTotalContainer,
              styles.wrapperLayout,
              styles.weeklyClr,
              styles.njangiesPosition,
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
  groupChildPosition: {
    height: 150,
    width: 330,
    left: "50%",
    top: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  groupLayout: {
    height: 35,
    left: 0,
    width: 297,
    position: "absolute",
  },
  njangiesPosition: {
    left: 0,
    top: 0,
  },
  tabPosition: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  groupPosition: {
    marginTop: -17.5,
    left: "50%",
    top: "50%",
  },
  tabLayout: {
    width: 115,
    height: 35,
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
  tabArea1Layout: {
    width: 116,
    height: 35,
    position: "absolute",
  },
  groupInnerPosition: {
    backgroundColor: Color.whitesmoke_400,
    marginTop: -17.5,
    width: 115,
    height: 35,
    borderRadius: Border.br_4xs,
    left: "50%",
    top: "50%",
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
  },
  tabArea: {
    width: 44,
    height: 30,
    position: "absolute",
    borderRadius: Border.br_xs,
  },
  groupItem: {
    backgroundColor: Color.blue_100,
    marginLeft: -57.5,
    borderRadius: Border.br_4xs,
  },
  daily2: {
    fontStyle: "italic",
  },
  groupInner: {
    marginLeft: -58,
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
  rectangleGroup: {
    marginLeft: 32.5,
  },
  groupContainer: {
    top: 0,
  },
  rectangleView: {
    marginLeft: -57.5,
  },
  biWeekly0: {
    fontStyle: "italic",
  },
  tabAreaContainer: {
    left: 182,
    top: 0,
  },
  groupView: {
    top: 43,
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
  },
  groupWrapper: {
    top: 11,
    left: 91,
  },
  rectangleParent: {
    marginTop: -302,
  },
});

export default MyNjangiesSection;
