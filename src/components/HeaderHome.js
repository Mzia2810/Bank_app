import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const window = Dimensions.get("window");
const { width, height } = window;
import { Entypo, FontAwesome, AntDesign, Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={{ fontWeight: "700", fontSize: 22, lineHeight: 30 }}>
            eWallet
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerIcon}>
        <TouchableOpacity style={styles.icon}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/profile.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    // marginVertical: 30,
    alignItems: "center",
    backgroundColor:'white'
  },
  headerIcon: {
    width: width / 3.5,
    // backgroundColor:'green',
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 2,
  },
  icon: {
    // alignSelf:'center',
    padding: 7,
    borderRadius: 50,
    // borderWidth:1,
    marginLeft: width / 4,
  },
  //   header: {
  //     backgroundColor: '#00BFFF',
  //   },
  
});
