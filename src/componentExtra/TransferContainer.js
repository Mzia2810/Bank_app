import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const TransferContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupParent, styles.transferPosition]}>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.addCashWrapper}>
          <Text style={styles.addCashTypo}>Add Cash</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text
          style={[styles.transfer, styles.addCashTypo, styles.transferPosition]}
        >
          Transfer
        </Text>
      </View>
      <Pressable
        style={[styles.groupInner, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("LoadUp")}
      />
      <View style={[styles.rectangleView, styles.groupInnerLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  transferPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    height: 45,
    width: 145,
    marginTop: -23.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_xs,
    marginLeft: -72.5,
    marginTop: -22.5,
    height: 45,
    width: 145,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  addCashTypo: {
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupInnerLayout: {
    height: 47,
    backgroundColor: Color.gainsboro_700,
    width: 145,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.gainsboro_200,
  },
  addCashWrapper: {
    top: 1,
    left: 32,
    flexDirection: "row",
    padding: Padding.p_md,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -152.5,
  },
  groupItem: {
    backgroundColor: Color.gainsboro_300,
  },
  transfer: {
    marginTop: -11.5,
    marginLeft: -29.5,
  },
  rectangleGroup: {
    marginLeft: 7.5,
  },
  groupInner: {
    top: 0,
    left: 0,
  },
  rectangleView: {
    top: 4,
    left: 160,
  },
  groupParent: {
    marginTop: -227,
    marginLeft: -153,
    width: 305,
    height: 51,
  },
});

export default TransferContainer;
