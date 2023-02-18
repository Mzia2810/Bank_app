import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Margin } from "../GlobalStyles";

const OrderCardContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={styles.orderYourEwalletCardToEnaParent}>
        <Text style={styles.orderYourEwalletContainer}>
          <Text style={styles.orderYourEwallet}>
            Order your eWallet Card to enable
          </Text>
          <Text style={styles.orderYourEwallet}>
            direct deposits.The eWallet Card is
          </Text>
          <Text style={styles.orderYourEwallet}>
            a free Visa debit Card that allows
          </Text>
          <Text style={styles.orderYourEwallet}>
            you to spend your balance and
          </Text>
          <Text style={styles.saveWithBoosts}>save with Boosts.</Text>
        </Text>
        <View style={styles.orderEwalletCardParent}>
          <Text style={[styles.orderEwalletCard, styles.closeTypo]}>
            Order eWallet Card
          </Text>
          <Text style={[styles.close, styles.closeTypo]}>Close</Text>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Pressable
            style={[styles.rectanglePressable, styles.groupChild1Layout]}
            onPress={() => navigation.navigate("DepositsTransfers1")}
          />
          <Pressable
            style={[styles.groupChild1, styles.groupChild1Layout]}
            onPress={() => navigation.navigate("DepositsTransfers")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 289,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  closeTypo: {
    textAlign: "left",
    color: Color.blue_100,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    height: 1,
    backgroundColor: Color.whitesmoke_600,
    marginLeft: -127,
    width: 254,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild1Layout: {
    height: 41,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  groupChild: {
    marginTop: -144.5,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  orderYourEwallet: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  saveWithBoosts: {
    margin: Margin.m_3xs,
  },
  orderYourEwalletContainer: {
    marginTop: -112,
    marginLeft: -121,
    fontSize: FontSize.size_base,
    color: Color.darkgray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  orderEwalletCard: {
    marginTop: -31.5,
    marginLeft: -78,
  },
  close: {
    marginTop: 13.5,
    marginLeft: -23,
  },
  groupItem: {
    marginTop: -42.5,
  },
  groupInner: {
    marginTop: 2.5,
  },
  rectanglePressable: {
    top: 44,
    left: 69,
    width: 123,
  },
  groupChild1: {
    top: 0,
    left: 39,
    width: 173,
  },
  orderEwalletCardParent: {
    marginTop: 27,
    height: 85,
    marginLeft: -127,
    width: 254,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  orderYourEwalletCardToEnaParent: {
    marginTop: -109.5,
    marginLeft: -126.5,
    height: 224,
    width: 254,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -145,
    marginLeft: -153,
  },
});

export default OrderCardContainer;
