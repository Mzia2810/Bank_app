import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const SectionForm2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View
        style={[
          styles.groupChild,
          styles.groupPosition1,
          styles.groupChildLayout,
        ]}
      />
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <Pressable
            style={[styles.tabAreaParent, styles.groupParentLayout]}
            onPress={() => navigation.navigate("NjangiMainDaily1")}
          >
            <View style={[styles.tabArea, styles.tabLayout]} />
            <View
              style={[
                styles.groupItem,
                styles.groupParentLayout,
                styles.groupPosition1,
              ]}
            />
            <Text style={[styles.xaf000000, styles.xafTypo]}>XAF 000 000</Text>
            <Text style={[styles.daily2, styles.daily2Typo]}>Daily [2]</Text>
          </Pressable>
          <Pressable
            style={[styles.tabAreaGroup, styles.groupParentLayout]}
            onPress={() => navigation.navigate("NjangiWeekly")}
          >
            <View style={[styles.tabArea1, styles.tabLayout]} />
            <View
              style={[
                styles.groupItem,
                styles.groupParentLayout,
                styles.groupPosition1,
              ]}
            />
            <Text style={[styles.xaf0000001, styles.xafTypo]}>XAF 000 000</Text>
            <Text style={[styles.weekly1, styles.daily2Typo]}>Weekly [1]</Text>
          </Pressable>
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <Pressable
            style={[styles.tabAreaParent, styles.groupParentLayout]}
            onPress={() => navigation.navigate("NjangiMainDaily3")}
          >
            <View style={[styles.tabArea, styles.tabLayout]} />
            <View
              style={[
                styles.groupItem,
                styles.groupParentLayout,
                styles.groupPosition1,
              ]}
            />
            <Text style={[styles.xaf000000, styles.xafTypo]}>XAF 000 000</Text>
            <Text style={[styles.daily2, styles.daily2Typo]}>
              Bi-Weekly [0]
            </Text>
          </Pressable>
          <View style={[styles.tabAreaParent1, styles.groupParentLayout]}>
            <View style={[styles.tabArea, styles.tabLayout]} />
            <View
              style={[
                styles.groupItem,
                styles.groupParentLayout,
                styles.groupPosition1,
              ]}
            />
            <Text style={[styles.xaf000000, styles.xafTypo]}>XAF 000 000</Text>
            <Text style={[styles.daily2, styles.daily2Typo]}>Monthly [0]</Text>
          </View>
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
  groupChildLayout: {
    height: 150,
    width: 330,
    marginLeft: -165,
    position: "absolute",
  },
  groupPosition1: {
    borderRadius: Border.br_4xs,
    left: "50%",
    top: "50%",
  },
  groupPosition: {
    height: 35,
    left: 0,
    position: "absolute",
  },
  groupParentLayout: {
    width: 115,
    height: 35,
    position: "absolute",
  },
  tabLayout: {
    height: 30,
    width: 44,
    borderRadius: Border.br_xs,
    top: 0,
    position: "absolute",
  },
  xafTypo: {
    height: 12,
    width: 97,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    top: 18,
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  daily2Typo: {
    top: 2,
    fontStyle: "italic",
    height: 12,
    width: 97,
    textAlign: "center",
    color: Color.iOSKeyLabel,
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
    width: 330,
    marginLeft: -165,
    borderRadius: Border.br_4xs,
  },
  tabArea: {
    left: 0,
  },
  groupItem: {
    marginTop: -17.5,
    marginLeft: -57.5,
    backgroundColor: Color.whitesmoke_400,
  },
  xaf000000: {
    left: 8,
  },
  daily2: {
    left: 7,
    fontStyle: "italic",
  },
  tabAreaParent: {
    left: 0,
    top: 0,
  },
  tabArea1: {
    left: 4,
  },
  xaf0000001: {
    left: 12,
  },
  weekly1: {
    left: 11,
    fontStyle: "italic",
  },
  tabAreaGroup: {
    left: 181,
    top: 0,
  },
  groupContainer: {
    width: 296,
    top: 0,
  },
  tabAreaParent1: {
    left: 182,
    top: 0,
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
    left: "50%",
    top: "50%",
    width: 330,
    marginLeft: -165,
  },
});

export default SectionForm2;
