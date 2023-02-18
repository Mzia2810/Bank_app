import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  Pressable,
  Modal,
  ScrollView
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import React, { useState,useCallback } from "react";
import HeaderHome from "../../components/HeaderHome";
import MyActivity from "../../components/MainActivity";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../../../GlobalStyle";
const window = Dimensions.get("window");
const { width, height } = window;

const HomeScreen = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("Muhammad Zia");
  const navigation = useNavigation();
  return (
    <>
      <View style={{ flex: 1, }}>
        <View style={{backgroundColor:'white'}}>
          <TouchableOpacity
            style={{ marginLeft: width / 20 }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={30} />
          </TouchableOpacity>
          <HeaderHome />

          <View style={{backgroundColor:'white'}}>
            <TextInput
              onChangeText={(val) => setValue(val)}
              value={value}
              secureTextEntry={!showPassword}
              style={{
                height: height / 10,
                width: width / 1.2,
                alignSelf: "flex-end",
                fontSize: showPassword ? 35 : 60,
              }}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: 40,
                top: 50,
              }}
            >
              <Text>{showPassword ? "Show" : "Show"}</Text>
              <Entypo name="eye" size={30} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#959595",
                alignSelf: "center",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Your balance
            </Text>
          </View>
        </View>



        {/*  */}
        <View style={[styles.monkapHomeScreen,{backgroundColor:'white'}]}>
        {/* <Text style={[styles.ewallet, styles.textTypo, styles.childPosition2]}>
          eWallet
        </Text>
        <Image
          style={[styles.monkapHomeScreenChild, styles.childPosition2]}
          resizeMode="cover"
          source={require("../../../assets/ellipse-13.png")}
        /> */}
        <View style={[styles.monkapHomeScreenItem, styles.monkapPosition, {backgroundColor:'blue',}]} />
        <View
          style={[
            styles.monkapHomeScreenInner,
            styles.childLayout3,
            styles.njangiPosition,
            {marginTop:-70}
          
          ]}
        />
        {/* ...........MTN............ */}
        <View style={[styles.mtnMomo, styles.mtnMomoLayout,{marginTop:-130}]}>
          <Image
            style={[
              styles.mtnMomoChild,
              styles.childLayout1,
              styles.childLayout2,
              styles.childPosition2,
            ]}
            resizeMode="cover"
            source={require("../../../assets/rectangle-10.png")}
          />
          <Text style={[styles.mtnMomo1, styles.mtnMomo1Typo]}>MTN MoMo</Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition2]}
            resizeMode="cover"
            source={require("../../../assets/vector150.png")}
          />
          <Pressable
            style={[
              styles.tabArea,
              styles.tabAreaPosition,
              styles.mtnMomoLayout,
            ]}
            onPress={() => navigation.navigate("MTNSplashScreen")}
          />
        </View>
        {/* .........LinkBank ........... */}
        <View
          style={[
            styles.rectangleParent,
            styles.groupItemLayout,
            styles.childPosition2,
            {marginTop:150}
          ]}
        >
          <View
            style={[
              styles.groupChild,
              styles.childLayout1,
              styles.childLayout2,
              styles.childPosition2,
            ]}
          />
          <Text style={[styles.linkBank, styles.mtnMomo1Typo]}>Link Bank</Text>
          <Image
            style={[styles.vectorIcon1, styles.childPosition2]}
            resizeMode="cover"
            source={require("../../../assets/vector151.png")}
          />
          <Pressable
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.tabAreaPosition,
            ]}
            onPress={() => navigation.navigate("LinkBank")}
          />
        </View>
        <View
          style={[
            styles.rectangleView,
            styles.childLayout3,
            styles.njangiPosition,
            {marginTop:145}
          ]}
          />
          {/* ...........NJangi.............. */}
        <View
          style={[styles.njangi, styles.njangiLayout, styles.njangiPosition,{marginTop:75}]}
        >
          <Image
            style={[
              styles.njangiChild,
              styles.tabArea1Position,
              styles.childLayout1,
            ]}
            resizeMode="cover"
            source={require("../../../assets/group-117.png")}
          />
          <Text style={[styles.njangiTontin, styles.mtnMomo1Typo]}>
            Njangi [Tontin]
          </Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition2]}
            resizeMode="cover"
            source={require("../../../assets/vector150.png")}
          />
          <Pressable
            style={[
              styles.tabArea1,
              styles.tabArea1Position,
              styles.njangiLayout,
              
            ]}
            onPress={() => navigation.navigate("NjangiMainDaily2")}
          />
        </View>
       { /* .......orange money................ */}
        <View
          style={[
            styles.monkapHomeScreenChild1,
            styles.childShadowBox1,
            styles.monkapPosition,
          
          ]}
        />
        
        {/* <Image
          style={[
            styles.groupIcon,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../../../assets/group269.png")}
        /> */}
        <Image
          style={[
            styles.monkapHomeScreenChild2,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../../../assets/group-28.png")}
        />
        <Image
          style={[styles.monkapHomeScreenChild3, styles.groupIconPosition]}
          resizeMode="cover"
          source={require("../../../assets/group-32.png")}
        />
        <Image
          style={[
            styles.groupIcon1,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../../../assets/group270.png")}
        />
        <Image
          style={[
            styles.monkapHomeScreenChild4,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../../../assets/group-31.png")}
        />
        <Image
          style={[
            styles.monkapHomeScreenChild5,
            styles.groupIconPosition,
            styles.groupIconSpaceBlock,
          ]}
          resizeMode="cover"
          source={require("../../../assets/group-30.png")}
        />
        {/* .......Money gray.......... */}
        <View style={[styles.orangeMoney,{marginTop:-66}]}>
          <View
            style={[
              styles.orangeMoneyChild,
              styles.childPosition1,
              styles.childLayout3,
            ]}
          />
          <Text style={[styles.orangeMoney1, styles.orangeMoney1Position]}>
            Orange Money
          </Text>
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition1]}
            resizeMode="cover"
            source={require("../../../assets/vector150.png")}
          />
          <View style={styles.orangeMoneyIcon}>
            <View
              style={[
                styles.orangeMoneyIconChild,
                styles.tabAreaPosition,
                styles.childLayout1,
                styles.childLayout2,
              ]}
            />
            <Image
              style={[styles.orangeMoneyIconItem, styles.orangeIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/arrow-224.png")}
            />
            <Image
              style={[styles.orangeMoneyIconInner, styles.orangeIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/arrow-324.png")}
            />
            <Text style={styles.orangeMoney2}>Orange Money</Text>
          </View>
          <Pressable
            style={[
              styles.tabArea,
              styles.tabAreaPosition,
              styles.mtnMomoLayout,
            ]}
            onPress={() => navigation.navigate("OMoneySplashScreen")}
          />
        </View>
        
        {/* <Image
          style={styles.mtnMmLogoGenericMtnMobileIcon}
          resizeMode="cover"
          source={require("../../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
        /> */}
        <View style={[styles.monkapHomeScreenChild6, styles.mtnMomoLayout]} />
        {/* <Pressable
          style={[styles.back, styles.backLayout]}
          onPress={() => navigation.navigate("MonkapLoginWithEmail")}
        >
          <Image
            style={styles.backChild}
            resizeMode="cover"
            source={require("../../../assets/line-311.png")}
          />
          <Pressable
            style={[styles.tabArea3, styles.backLayout]}
            onPress={() => navigation.navigate("UsePhone1")}
          />
        </Pressable> */}
        <View style={[styles.targetSavings,{marginTop:5}]}>
          <View
            style={[
              styles.targetSavingsChild,
              styles.childPosition1,
              styles.childLayout3,
            ]}
          />
          <View
            style={[
              styles.targetSavingsItem,
              styles.childPosition1,
              styles.childLayout1,
              styles.childLayout2,
              // {backgroundColor:'red'}
            ]}
          />
          <Text style={[styles.targetSavings1, styles.orangeMoney1Position]}>
            Target Savings
          </Text>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition1]}
            resizeMode="cover"
            source={require("../../../assets/vector150.png")}
          />
          <Image
            style={styles.diyCuboidUnfinishedWoodenMIcon}
            resizeMode="cover"
            source={require("../../../assets/diycuboidunfinishedwoodenmoneybankcoinmoneysavingboxcontainerforkidschildrencreativeeducationaljpg-q90-1.png")}
          />
          <Pressable
            style={[
              styles.tabArea,
              styles.tabAreaPosition,
              styles.mtnMomoLayout,
            ]}
            onPress={() => navigation.navigate("StartTargetSavings")}
          />
        </View>
        <View style={styles.footerMonkap}>
          <View
            style={[
              styles.footerMonkapChild,
              styles.tabChildPosition,
              styles.childPosition,
            ]}
          />
          <View style={[styles.home, styles.homeLayout]}>
            <Image
              style={[styles.c14HouseIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/c14-house25.png")}
            />
            <Text style={styles.home1}>Home</Text>
            <Pressable
              style={[
                styles.tabArea4,
                styles.tabChildPosition,
                styles.tabPosition,
              ]}
              onPress={() => navigation.navigate("MoNkapHomeScreen")}
            />
          </View>
          <View style={[styles.profile, styles.homeLayout]}>
            <Image
              style={[styles.profileChild, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/group-157.png")}
            />
            <Text
              style={[styles.profile1, styles.momo1Typo, styles.momo1Layout]}
            >
              Profile
            </Text>
            {/* <Pressable
              style={[
                styles.tabArea5,
                styles.tabChildPosition,
                styles.tabPosition,
              ]}
              onPress={openTabArea5}
            /> */}
          </View>
          <View style={[styles.linkBank1, styles.linkBank1Position,]}>
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/group271.png")}
            />
            <Text
              style={[styles.linkBanks, styles.momo1Typo, styles.momo1Layout]}
            >
              Link Banks
            </Text>
            <Pressable
              style={styles.imageedit341319179892}
              onPress={() => navigation.navigate("LinkBank")}
            />
          </View>
          <View style={styles.momo}>
            <Image
              style={[
                styles.groupIcon3,
                styles.linkBank1Position,
                styles.groupIconLayout,
              ]}
              resizeMode="cover"
              source={require("../../../assets/group133.png")}
            />
            <Text style={[styles.momo1, styles.momo1Typo, styles.momo1Layout]}>
              MoMo
            </Text>
            <Pressable
              style={[styles.tabArea6, styles.tabLayout]}
              onPress={() => navigation.navigate("MTNSplashScreen")}
            />
          </View>
          <View style={styles.orange}>
            <View style={[styles.orangeChild, styles.childShadowBox1]} />
            <Image
              style={[styles.groupIcon4, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/group273.png")}
            />
            <Text style={[styles.omoney, styles.momo1Typo, styles.momo1Layout]}>
              OMoney
            </Text>
            <Pressable
              style={[styles.tabArea7, styles.tabLayout]}
              onPress={() => navigation.navigate("OMoneySplashScreen")}
            />
          </View>
        </View>
        {/* <View style={[styles.amount, {backgroundColor:'yellow'}]}>
          <View style={styles.amountChild} />
          <Text style={[styles.text, styles.textTypo]}>**** ** *****</Text>
          <Text style={styles.totalBalance}>Total Balance</Text>
          <View style={styles.show}>
            <Text style={[styles.show1, styles.momo1Typo]}>Show</Text>
            <Image
              style={[styles.vectorIcon5, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../../../assets/vector62.png")}
            />
            <Image
              style={[styles.vectorIcon6, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/vector63.png")}
            />
            <Image
              style={[styles.vectorIcon7, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../../../assets/vector64.png")}
            />
            <Image
              style={[styles.vectorIcon8, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/vector65.png")}
            />
            <View
              style={[
                styles.showChild,
                styles.tabChildPosition,
                styles.childPosition,
              ]}
            />
          </View>
        </View> */}
        <View style={[styles.transfer, styles.payLayout, styles.payPosition,]}>
          <View
            style={[
              styles.transferChild,
              styles.childShadowBox,
              styles.childLayout,
            //  {backgroundColor:'purple'}
            ]}
          />
          <Image
            style={[styles.vectorIcon9, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../../../assets/vector38.png")}
          />
          <Text
            style={[styles.transfer1, styles.pay1Typo, styles.depositsPosition]}
          >
            Transfer
          </Text>
          <Pressable
            style={[styles.tabArea8, styles.childShadowBox, styles.payLayout]}
            onPress={() => navigation.navigate("TransferMoney")}
          />
        </View>
        <View style={[styles.deposit, styles.payLayout, styles.childPosition2,]}>
          <View
            style={[
              styles.depositChild,
              styles.childShadowBox,
              styles.childLayout,
            ]}
          />
          <Text
            style={[styles.deposits, styles.pay1Typo, styles.depositsPosition]}
          >
            Deposits
          </Text>
          <Image
            style={[styles.depositItem, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../../../assets/group-2331.png")}
          />
          <Pressable
            style={[styles.tabArea8, styles.childShadowBox, styles.payLayout]}
            onPress={() => navigation.navigate("Deposit")}
          />
        </View>
        <View style={[styles.pay, styles.payLayout, styles.payPosition]}>
          <View
            style={[
              styles.payChild,
              styles.childShadowBox,
              styles.childLayout1,
            ]}
          />
          <Text style={[styles.pay1, styles.pay1Typo]}>Pay</Text>
          <Image
            style={[styles.vectorIcon10, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../../../assets/vector142.png")}
          />
          <Pressable
            style={[styles.tabArea8, styles.childShadowBox, styles.payLayout]}
            onPress={() => navigation.navigate("Pay1")}
          />
        </View>
      </View>
        {/* <View style={styles.share}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginHorizontal: 10,
              // marginVertical: 30,
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.cash_deposit_pay}>
              <MaterialCommunityIcons
                name="tray-arrow-down"
                size={60}
                color="white"
              />
            </TouchableOpacity>
            <Text>Transfer</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginHorizontal: 30,
              // marginVertical: 30,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.cash_deposit_pay}
            >
              <MaterialCommunityIcons
                name="tray-arrow-down"
                size={60}
                color="white"
              />
            </TouchableOpacity>
            <Text>Deposits</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginHorizontal: 30,
              // marginVertical: 30,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.cash_deposit_pay}
            >
              <MaterialCommunityIcons
                name="tray-arrow-down"
                size={60}
                color="white"
              />
            </TouchableOpacity>
            <Text>Pay</Text>
          </View>
        </View> */}
      </View>


    

    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  share: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: height / 6,
    alignItems: "center",
  },
  cash_deposit_pay: {
    backgroundColor: "#0000EE",
    width: width / 5.5,
    height: height / 11,
    //   backgroundColor: "pink",
    alignSelf: "center",
    padding: 5,
    borderRadius: 10,
  },
  textTypo: {
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  childPosition2: {
    left: "50%",
    top: "50%",
  },
  monkapPosition: {
    marginLeft: -182,
    width: 400,
    left: "46%",
    top: "45%",
  },
  childLayout3: {
    height: 2,
    width: 345,
    backgroundColor: Color.mediumblue_100,
    borderRadius: Border.br_xl,
  },
  njangiPosition: {
    marginLeft: -167,
    left: "50%",
    top: "50%",
    position: "absolute",
    // backgroundColor:'green'
  },
  mtnMomoLayout: {
    height: 56,
    width: 345,
    position: "absolute",
  },
  childLayout1: {
    height: 42,
    width: 42,
  },
  childLayout2: {
    borderRadius: Border.br_lg,
    height: 42,
  },
  mtnMomo1Typo: {
    color: Color.iOSKeyBackgroundHighlight,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIconPosition2: {
    width: 8,
    height: 14,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tabAreaPosition: {
    top: 0,
    left: 0,
  },
  groupItemLayout: {
    width: 333,
    height: 54,
    position: "absolute",
  },
  njangiLayout: {
    height: 70,
    width: 345,
  },
  tabArea1Position: {
    marginLeft: -167.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childShadowBox1: {
    display: "none",
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 25,
      height: 0,
    },
    position: "absolute",
  },
  groupIconPosition: {
    height: 23,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupIconSpaceBlock: {
    marginTop: 365,
    height: 23,
  },
  childPosition1: {
    marginLeft: -170.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  orangeMoney1Position: {
    marginLeft: -118.5,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIconPosition1: {
    marginLeft: 141.5,
    height: 14,
    width: 8,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  orangeIconLayout: {
    height: 16,
    width: 17,
    borderRadius: Border.br_4xl,
    top: 9,
    position: "absolute",
  },
  backLayout: {
    height: 46,
    width: 72,
    top: 0,
    position: "absolute",
  },
  tabChildPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
  },
  homeLayout: {
    width: "18.06%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tabPosition: {
    left: "0%",
    right: "0%",
    backgroundColor: Color.gainsboro_400,
  },
  momo1Typo: {
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "center",
    position: "absolute",
  },
  momo1Layout: {
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    color: Color.iOSKeyLabel,
  },
  linkBank1Position: {
    top: "6.67%",
    position: "absolute",
  },
  tabLayout: {
    width: 43,
    backgroundColor: Color.gainsboro_400,
    top: 0,
    height: 42,
    position: "absolute",
  },
  vectorIconPosition: {
    right: "31.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  payLayout: {
    width: 67,
    height: 67,
  },
  payPosition: {
    marginTop: -220,
    width: 67,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childShadowBox: {
    elevation: 54,
    shadowRadius: 54,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 25,
      height: 0,
    },
    borderRadius: Border.br_lg,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childLayout: {
    marginLeft: -21.5,
    shadowRadius: 54,
    height: 42,
    width: 42,
    backgroundColor: Color.blue_100,
  },
  pay1Typo: {
    fontSize: FontSize.size_sm,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  depositsPosition: {
    left: 6,
    fontSize: FontSize.size_sm,
  },
  ewallet: {
    marginTop: -361,
    fontSize: FontSize.size_4xl,
    marginLeft: -153,
  },
  monkapHomeScreenChild: {
    marginTop: -358,
    width: 24,
    height: 24,
    marginLeft: 128,
    position: "absolute",
  },
  monkapHomeScreenItem: {
    marginTop: -122,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 463,
    width: 360,
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  monkapHomeScreenInner: {
    marginTop: -22,
  },
  mtnMomoChild: {
    marginTop: -21,
    marginLeft: -167.5,
    position: "absolute",
  },
  mtnMomo1: {
    marginLeft: -115.5,
    marginTop: -13,
    color: Color.iOSKeyBackgroundHighlight,
    fontSize: FontSize.size_2xl,
  },
  vectorIcon: {
    marginTop: -6,
    marginLeft: 142.5,
    height: 14,
  },
  tabArea: {
    backgroundColor: Color.gainsboro_400,
    left: 0,
  },
  mtnMomo: {
    marginTop: -86,
    marginLeft: -166,
    height: 56,
    left: "50%",
    top: "50%",
  },
  groupChild: {
    // marginLeft: -166.5,
    marginLeft: -165.5,
    // marginLeft: -118.5,
    marginTop: -22,
    position: "absolute",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  linkBank: {
    marginTop: -14,
    marginLeft: -110.5,
  },
  vectorIcon1: {
    marginTop: -8,
    marginLeft: -151.5,
    width: 14,
    height: 14,
    position: "absolute",
  },
  groupItem: {
    height: 54,
    backgroundColor: Color.gainsboro_400,
    left: 0,
  },
  rectangleParent: {
    marginTop: 207,
    marginLeft: -164,
    height: 54,
  },
  rectangleView: {
    marginTop: 195,
  },
  njangiChild: {
    marginTop: -24,
  },
  njangiTontin: {
    marginTop: -16,
    marginLeft: -113.5,
  },
  vectorIcon2: {
    marginTop: -9,
    marginLeft: 144.5,
    height: 14,
  },
  tabArea1: {
    marginTop: -35,
    backgroundColor: "rgba(54, 54, 255, 0)",
    borderRadius: Border.br_xl,
    marginLeft: -152.5,
    height: 70,
  },
  njangi: {
    marginTop: 127,
  },
  monkapHomeScreenChild1: {
    marginTop: 346,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    height: 54,
    width: 360,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  groupIcon: {
    width: 23,
    marginLeft: -153,
  },
  monkapHomeScreenChild2: {
    marginLeft: -87,
    width: 23,
  },
  monkapHomeScreenChild3: {
    marginTop: 73,
    marginLeft: -145,
    width: 23,
  },
  groupIcon1: {
    marginLeft: -21,
    width: 23,
  },
  monkapHomeScreenChild4: {
    marginLeft: 45,
    width: 40,
  },
  monkapHomeScreenChild5: {
    width: 23,
    marginLeft: 128,
  },
  orangeMoneyChild: {
    marginTop: 31.5,
  },
  orangeMoney1: {
    marginTop: -17.5,
  },
  vectorIcon3: {
    marginTop: -18.5,
  },
  orangeMoneyIconChild: {
    backgroundColor: Color.gray_400,
    left: 0,
    position: "absolute",
  },
  orangeMoneyIconItem: {
    left: 22,
  },
  orangeMoneyIconInner: {
    left: 4,
  },
  orangeMoney2: {
    left: 2,
    fontSize: FontSize.size_7xs,
    lineHeight: 7,
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
    width: 38,
    height: 7,
    textAlign: "center",
    fontWeight: "700",
    top: 28,
    position: "absolute",
  },
  orangeMoneyIcon: {
    top: 8,
    left: 2,
    height: 42,
    width: 42,
    position: "absolute",
  },
  orangeMoney: {
    height: 67,
    marginTop: -13,
    width: 347,
    marginLeft: -166,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  mtnMmLogoGenericMtnMobileIcon: {
    top: 327,
    left: 28,
    height: 29,
    width: 42,
    position: "absolute",
  },
  monkapHomeScreenChild6: {
    top: 525,
    left: 14,
    backgroundColor: Color.gainsboro_400,
  },
  backChild: {
    top: 15,
    left: 24,
    height: 15,
    width: 23,
    position: "absolute",
  },
  tabArea3: {
    backgroundColor: Color.gainsboro_400,
    left: 0,
  },
  back: {
    left: 4,
  },
  targetSavingsChild: {
    marginTop: 30.5,
  },
  targetSavingsItem: {
    marginTop: -28.5,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  targetSavings1: {
    marginTop: -20.5,
  },
  vectorIcon4: {
    marginTop: -13.5,
  },
  diyCuboidUnfinishedWoodenMIcon: {
    top: 7,
    left: 5,
    height: 35,
    width: 36,
    position: "absolute",
  },
  targetSavings: {
    marginTop: 60,
    height: 65,
    width: 347,
    marginLeft: -166,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  footerMonkapChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    shadowOffset: {
      width: 25,
      height: 0,
    },
    bottom: "0%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  c14HouseIcon: {
    height: "60.33%",
    width: "49.23%",
    top: "6.38%",
    right: "30.77%",
    bottom: "33.29%",
    left: "20%",
    position: "absolute",
  },
  home1: {
    top: 30,
    color: Color.blue_100,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "700",
    left: 12,
    position: "absolute",
  },
  tabArea4: {
    height: "95.74%",
    bottom: "4.26%",
  },
  home: {
    height: "104.44%",
    right: "77.5%",
    left: "4.44%",
    bottom: "-4.44%",
    top: "0%",
  },
  profileChild: {
    height: "64.58%",
    width: "47.69%",
    top: "12.5%",
    right: "24.62%",
    bottom: "22.92%",
    left: "27.69%",
    position: "absolute",
  },
  profile1: {
    top: 34,
    left: 17,
    width: 36,
    height: 14,
  },
  tabArea5: {
    height: "93.75%",
    bottom: "6.25%",
  },
  profile: {
    height: "106.67%",
    top: "-8.89%",
    right: "3.33%",
    bottom: "2.22%",
    left: "78.61%",
  },
  groupIcon2: {
    height: "65.28%",
    width: "49.51%",
    right: "26.66%",
    bottom: "34.72%",
    left: "23.83%",
    top: "0%",
    position: "absolute",
  },
  linkBanks: {
    top: 27,
    left: 0,
  },
  imageedit341319179892: {
    top: 1,
    left: 13,
    backgroundColor: Color.silver_400,
    width: 32,
    height: 32,
    position: "absolute",
  },
  linkBank1: {
    height: "97.78%",
    width: "16.11%",
    right: "40.56%",
    left: "43.33%",
    bottom: "-4.44%",
  },
  groupIcon3: {
    height: "62.92%",
    width: "46.51%",
    right: "27.91%",
    bottom: "30.41%",
    left: "25.58%",
  },
  momo1: {
    left: 5,
    top: 28,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
  },
  tabArea6: {
    left: 0,
  },
  momo: {
    width: "11.94%",
    top: "2.22%",
    right: "24.17%",
    bottom: "-2.22%",
    left: "63.89%",
    height: "100%",
    position: "absolute",
  },
  orangeChild: {
    top: -4,
    left: -9,
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyLabel,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 64,
    height: 36,
  },
  groupIcon4: {
    height: "62.56%",
    width: "56.82%",
    top: "6.98%",
    right: "22.73%",
    bottom: "30.46%",
    left: "20.45%",
    position: "absolute",
  },
  omoney: {
    top: 26,
    left: 0,
  },
  tabArea7: {
    left: 1,
  },
  orange: {
    top: 2,
    left: 92,
    width: 44,
    height: 43,
    position: "absolute",
  },
  footerMonkap: {
    top: 755,
    height: 45,
    left: 0,
    width: 360,
    position: "absolute",
  },
  amountChild: {
    borderRadius: Border.br_2xs,
    shadowRadius: 40,
    elevation: 40,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    display: "none",
    shadowOpacity: 1,
    shadowOffset: {
      width: 25,
      height: 0,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  text: {
    top: "13.83%",
    left: "21.41%",
    fontSize: FontSize.size_8xl,
  },
  totalBalance: {
    top: "57.45%",
    left: "33.03%",
    fontSize: FontSize.size_xl,
    color: Color.darkgray_500,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  show1: {
    top: "17.14%",
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.2,
    lineHeight: 12,
    textTransform: "uppercase",
    left: "21.95%",
  },
  vectorIcon5: {
    height: "25.71%",
    width: "46.34%",
    top: "45.71%",
    bottom: "28.57%",
    left: "21.95%",
  },
  vectorIcon6: {
    height: "11.43%",
    width: "7.32%",
    top: "48.57%",
    right: "51.22%",
    bottom: "40%",
    left: "41.46%",
    position: "absolute",
  },
  vectorIcon7: {
    height: "20%",
    width: "19.51%",
    top: "65.71%",
    bottom: "14.29%",
    left: "48.78%",
  },
  vectorIcon8: {
    height: "8.57%",
    width: "9.76%",
    top: "71.43%",
    right: "36.59%",
    bottom: "20%",
    left: "53.66%",
    position: "absolute",
  },
  showChild: {
    backgroundColor: Color.gainsboro_400,
  },
  show: {
    height: "37.23%",
    width: "12.54%",
    top: "30.85%",
    right: "0.61%",
    bottom: "31.91%",
    left: "86.85%",
    position: "absolute",
  },
  amount: {
    top: 84,
    width: 327,
    height: 94,
    left: 17,
    position: "absolute",
  },
  transferChild: {
    marginTop: -30.5,
  },
  vectorIcon9: {
    height: "44.78%",
    width: "41.79%",
    top: "13.43%",
    right: "29.85%",
    bottom: "41.79%",
    left: "28.36%",
    position: "absolute",
  },
  transfer1: {
    top: 46,
  },
  tabArea8: {
    marginTop: -33.5,
    marginLeft: -33.5,
    backgroundColor: Color.blue_200,
  },
  transfer: {
    marginLeft: -156,
  },
  depositChild: {
    marginTop: -31.5,
  },
  deposits: {
    top: 45,
  },
  depositItem: {
    height: "40%",
    width: "44.44%",
    top: "14.93%",
    right: "28.69%",
    bottom: "45.07%",
    left: "26.87%",
    position: "absolute",
  },
  deposit: {
    marginTop: -220,
    marginLeft: -33,
    position: "absolute",
  },
  payChild: {
    marginLeft: -23.5,
    marginTop: -30.5,
    backgroundColor: Color.blue_100,
  },
  pay1: {
    left: 19,
    top: 46,
  },
  vectorIcon10: {
    height: "50.75%",
    width: "43.28%",
    top: "11.94%",
    right: "31.34%",
    bottom: "37.31%",
    left: "25.37%",
    position: "absolute",
  },
  pay: {
    marginLeft: 89,
  },
  monkapHomeScreen: {
    flex: 1,
    height: 700,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});
