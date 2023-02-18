import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal ,TextInput,Dimensions,TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../../components/MainActivity";
import SendMoneyMomoom from "../../componentExtra/SendMoneyMomoom";
import AddContact from "../../componentExtra/AddContact";
import ContainerMonkap from "../../componentExtra/ContainerMonkap";
import ImageGallery from "../../componentExtra//ImageGallery";
import DepositContainer from "../../componentExtra//DepositContainer";
import RecentSection from "../../componentExtra//RecentSection";
import RecipientArea from "../../componentExtra//RecipientArea";
import OContainer from "../../componentExtra//OContainer";
import RequestFormContainer from "../../componentExtra//RequestFormContainer";
import HeaderCom from "../../components/HeaderCom";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import { Color, FontSize, FontFamily } from "../../../GlobalStyle";
const window = Dimensions.get("window");
const { width, height } = window;

const TransferMoney = ({navigation}) => {
  const [tabArea1Visible, setTabArea1Visible] = useState(false);
  const [rectangle8Visible, setRectangle8Visible] = useState(false);
  const [icons8Contacts1Visible, setIcons8Contacts1Visible] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("Muhammad Zia");
  // const navigation = useNavigation();

  const openTabArea1 = useCallback(() => {
    setTabArea1Visible(true);
  }, []);

  const closeTabArea1 = useCallback(() => {
    setTabArea1Visible(false);
  }, []);

  const openRectangle8 = useCallback(() => {
    setRectangle8Visible(true);
  }, []);

  const closeRectangle8 = useCallback(() => {
    setRectangle8Visible(false);
  }, []);

  const openIcons8Contacts1 = useCallback(() => {
    setIcons8Contacts1Visible(true);
  }, []);

  const closeIcons8Contacts1 = useCallback(() => {
    setIcons8Contacts1Visible(false);
  }, []);
  return (
    <>
     <HeaderCom text='Transfer Money'/>
      <View style={[styles.transferOmoney,]}>
        {/* <ContainerMonkap
          carouselImageUrls={require("../../../assets/c14-house.png")}
          carouselImageUrls2={require("../../../assets/group.png")}
          carouselImageUrls3={require("../../../assets/group1.png")}
          carouselImageUrls4={require("../../../assets/group12.png")}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea1}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        /> */}
        {/* <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Pressable
            style={[styles.group, styles.groupLayout, styles.groupPosition]}
            onPress={() => navigation.navigate("MoNkapHomeScreen2")}
          >
            <Image
              style={[styles.vectorIcon, styles.groupPosition]}
              resizeMode="cover"
              source={require("../../../assets/vector.png")}
            />
            <View style={[styles.groupItem, styles.groupLayout]} />
          </Pressable>
        </View> */}
        <View style={{backgroundColor:Color.iOSKeyBackgroundHighlight,marginHorizontal:20,marginTop:30,borderRadius:5}}>
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
        {/* <ImageGallery
          carouselImageUrls={{ uri: "vector161@3x.png" }}
          carouselImageUrls2={{ uri: "vector162@3x.png" }}
          carouselImageUrls3={{ uri: "vector163@3x.png" }}
          carouselImageUrls4={{ uri: "vector164@3x.png" }}
          propLeft={15}
          propWidth={330}
          propBorderRadius={3}
        /> */}
        <DepositContainer onRectanglePressablePress={openRectangle8} />
        <RecentSection onIcons8Contacts1Press={openIcons8Contacts1} />
        <RecipientArea />
        <Text style={[styles.transferMoney, styles.groupPosition]}>
          TRANSFER MONEY
        </Text>
        {/* <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../../../assets/vector33.png")}
        /> */}
        <View style={[styles.momo,]}>
          <Text style={styles.momo1}>MoMo</Text>
          <Image
            style={[
              styles.mtnMmLogoGenericMtnMobileIcon,
              styles.mtnPosition,
              styles.iconLayout,
            ]}
            resizeMode="cover"
            source={require("../../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
          />
          <Pressable
            style={[styles.tabArea, styles.mtnPosition]}
            onPress={() => navigation.navigate("TransferMomo")}
          />
        </View>
        <OContainer />
        <RequestFormContainer
          carImageUrl={{ uri: "group269@3x.png" }}
          propTop="59.38%"
          propBottom="19.63%"
          navigation={navigation}
        />
      </View>

      {/* <Modal animationType="fade" transparent visible={tabArea1Visible}>
        <View style={styles.tabArea1Overlay}>
          <Pressable style={styles.tabArea1Bg} onPress={closeTabArea1} />
          <MyActivity onClose={closeTabArea1} />
        </View>
      </Modal> */}

      {/* <Modal animationType="fade" transparent visible={rectangle8Visible}>
        <View style={styles.rectangle8Overlay}>
          <Pressable style={styles.rectangle8Bg} onPress={closeRectangle8} />
          <SendMoneyMomoom onClose={closeRectangle8} />
        </View>
      </Modal> */}

      {/* <Modal animationType="fade" transparent visible={icons8Contacts1Visible}>
        <View style={styles.icons8Contacts1Overlay}>
          <Pressable
            style={styles.icons8Contacts1Bg}
            onPress={closeIcons8Contacts1}
          />
          <AddContact onClose={closeIcons8Contacts1} />
        </View>
      </Modal> */}
    </>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 94,
    width: 360,
    marginLeft: -180,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 57,
    width: 47,
    position: "absolute",
  },
  groupPosition: {
    left: "50%",
    top: "50%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mtnPosition: {
    top: "0%",
    position: "absolute",
  },
  tabArea1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangle8Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle8Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icons8Contacts1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  icons8Contacts1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChild: {
    marginTop: -47,
    backgroundColor: Color.blue_100,
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
    position: "absolute",
  },
  groupItem: {
    top: -57,
    left: -47,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: 29,
    marginLeft: -125,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  rectangleParent: {
    marginTop: -400,
  },
  transferMoney: {
    marginTop: -361,
    marginLeft: -65,
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon1: {
    height: "3.75%",
    width: "7.78%",
    top: "4.5%",
    right: "69.44%",
    bottom: "91.75%",
    left: "22.78%",
    position: "absolute",
    backgroundColor:'pink',
  },
  momo1: {
    top: "59.73%",
    fontSize: 12,
    // letterSpacing: 2,
    lineHeight: 23,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.gray_3000,
    textAlign: "center",
    left: "10%",
    position: "absolute",
  },
  mtnMmLogoGenericMtnMobileIcon: {
    height: "52.73%",
    width: "85.71%",
    right: "8.16%",
    bottom: "47.27%",
    left: "6.12%",
  },
  tabArea: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.gainsboro_700,
    width: "100%",
    top: "0%",
  },
  momo: {
    height: "7.88%",
    width: "13.61%",
    top: "23.88%",
    right: "52.22%",
    bottom: "63.25%",
    left: "34.17%",
    position: "absolute",
  },
  transferOmoney: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TransferMoney;
