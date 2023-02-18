import * as React from "react";
import { useState, useCallback } from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
} from "react-native";
import MyActivity from "../components/MyActivity";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Profile1 = ({ style }) => {
  const [tabAreaVisible, setTabAreaVisible] = useState(false);

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
  }, []);
  return (
    <>
      <View style={[styles.profile, style]}>
        <Image
          style={styles.profileChild}
          resizeMode="cover"
          source={require("../assets/group-15723.png")}
        />
        <Text style={styles.profile1}>Profile</Text>
        <Pressable style={styles.tabArea} onPress={openTabArea} />
      </View>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <MyActivity onClose={closeTabArea} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  profileChild: {
    height: "51.02%",
    width: "60.98%",
    top: "20.41%",
    right: "26.83%",
    bottom: "28.57%",
    left: "12.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  profile1: {
    top: 32,
    left: 0,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.5,
    lineHeight: 17,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  tabAreaOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabAreaBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea: {
    height: "91.84%",
    width: "97.56%",
    top: "0%",
    right: "0%",
    bottom: "8.16%",
    left: "2.44%",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  profile: {
    width: 41,
    height: 49,
  },
});

export default Profile1;
