import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const SectionForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.groupContainer, styles.groupPosition1]}
          onPress={() => navigation.navigate("NjangiMainDaily1")}
        >
          <View style={[styles.tabAreaParent, styles.tabGroupLayout]}>
            <View style={[styles.tabArea, styles.tabLayout]} />
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Text style={[styles.xaf000000, styles.daily2Typo]}>
              XAF 000 000
            </Text>
            <Text
              style={[styles.daily2, styles.daily2Position, styles.daily2Typo]}
            >
              Daily [2]
            </Text>
          </View>
          <View style={[styles.tabAreaGroup, styles.tabGroupLayout]}>
            <View style={[styles.tabArea1, styles.tabLayout]} />
            <View style={[styles.groupInner, styles.groupPosition]} />
            <Text style={[styles.xaf0000001, styles.weekly1Typo]}>
              XAF 000 000
            </Text>
            <Text
              style={[
                styles.weekly1,
                styles.weekly1Typo,
                styles.daily2Position,
              ]}
            >
              Weekly [1]
            </Text>
          </View>
        </Pressable>
        <View style={[styles.groupView, styles.groupPosition1]}>
          <Pressable
            style={[styles.tabAreaParent, styles.tabGroupLayout]}
            onPress={() => navigation.navigate("NjangiMainDaily3")}
          >
            <View style={[styles.tabArea, styles.tabLayout]} />
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Text style={[styles.xaf000000, styles.daily2Typo]}>
              XAF 000 000
            </Text>
            <Text
              style={[styles.daily2, styles.daily2Position, styles.daily2Typo]}
            >
              Bi-Weekly [0]
            </Text>
          </Pressable>
          <Pressable
            style={[styles.groupPressable, styles.tabGroupLayout]}
            onPress={() => navigation.navigate("NjangiMainDaily4")}
          >
            <View style={[styles.tabArea, styles.tabLayout]} />
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Text style={[styles.xaf000000, styles.daily2Typo]}>
              XAF 000 000
            </Text>
            <Text
              style={[styles.daily2, styles.daily2Position, styles.daily2Typo]}
            >
              Monthly [0]
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.groupWrapper, styles.wrapperLayout]}>
        <View style={[styles.myNjangiesTotal5Wrapper, styles.wrapperLayout]}>
          <Text style={[styles.myNjangiesTotalContainer, styles.wrapperLayout]}>
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
  tabGroupLayout: {
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
  daily2Typo: {
    height: 12,
    width: 97,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  daily2Position: {
    top: 2,
    fontStyle: "italic",
  },
  weekly1Typo: {
    color: Color.iOSKeyBackgroundHighlight,
    height: 12,
    width: 97,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_base,
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
    backgroundColor: Color.whitesmoke_400,
  },
  xaf000000: {
    left: 8,
    top: 18,
  },
  daily2: {
    left: 7,
    fontStyle: "italic",
  },
  tabAreaParent: {
    left: 0,
  },
  tabArea1: {
    left: 4,
  },
  groupInner: {
    backgroundColor: Color.blue_100,
  },
  xaf0000001: {
    left: 12,
    top: 18,
  },
  weekly1: {
    left: 11,
    fontStyle: "italic",
  },
  tabAreaGroup: {
    left: 181,
  },
  groupContainer: {
    width: 296,
    top: 0,
  },
  groupPressable: {
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
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_base,
    height: 18,
    width: 131,
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

export default SectionForm;
