import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../../GlobalStyle";

const RecipientArea = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent]}>
      <View style={[styles.groupChild, styles.tabAreaPosition,]} />
      <View style={[styles.monkapUserParent, styles.parentPosition,]}>
        <Text
          style={[styles.monkapUser, styles.othersTypo, styles.recipientTypo]}
        >
          MoNkap User
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../../assets/group-239.png")}
        />
        <Pressable
          style={[styles.tabArea, styles.tabAreaPosition]}
          onPress={() => navigation.navigate("TransferMonkapUser")}
        />
      </View>


      <View style={[styles.lineParent, styles.parentPosition,]}>
        <View style={styles.groupItem} />
        <Text style={[styles.others, styles.othersTypo]}>Others</Text>
        <Image
          style={[styles.groupInner, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../../assets/group-239.png")}
        />
        <Pressable
          style={[styles.tabArea, styles.tabAreaPosition]}
          onPress={() => navigation.navigate("TransferOthers")}
        />
      </View>
      <Text style={[styles.recipient, styles.othersTypo, styles.recipientTypo]}>
        Recipient
      </Text>
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
    top: "23.19%",
    position: "absolute",
  },
  othersTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  recipientTypo: {
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  monkapUser: {
    top: "62.62%",
    left: "12.83%",
//     textAlign:'center',
// justifyContent:'center',
// alignContent:'center',
// alignItems:'center',
lineHeight: 19,
    // letterSpacing: 1.6,
    fontSize: 12,
    color: Color.iOSKeyLabel,
  },
  vectorIcon: {
    height: "60.77%",
    width: "35.72%",
    // top: "5.77%",
    right: "32.04%",
    bottom: "38.46%",
    left: "25.24%",
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
  },
  monkapUserParent: {
    height: "75.9%",
    width: "31.21%",
    right: "68.18%",
    bottom: "11.9%",
    left: "0.61%",
    opacity: 0.5,
    borderBottomWidth:2,
    borderBottomColor:'#0000ee',
  },
  groupItem: {
    height: "1.89%",
    width: "76.67%",
    top: "91.51%",
    right: "10.83%",
    bottom: "6.6%",
    left: "12.5%",
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderTopWidth: 1,
    display: "none",
    position: "absolute",
  },
  others: {
    top: "62.49%",
    left: "25.33%",
    color: Color.gray_3000,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 19,
    // letterSpacing: 1.6,
    fontSize:12,
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
  lineParent: {
    height: "75.1%",
    width: "18.18%",
    right: "2.42%",
    bottom: "10.71%",
    left: "79.39%",
  },
  recipient: {
    // top: "2.38%",
    left: "41.82%",
    fontSize: FontSize.size_base,
    letterSpacing: 1.8,
    lineHeight: 20,
    // bottom:'10%',
  },
  rectangleParent: {
    height: "10.5%",
    width: "91.67%",
    top: "21.25%",
    right: "4.17%",
    bottom: "62.25%",
    left: "4.17%",
    position: "absolute",
  },
});

export default RecipientArea;
