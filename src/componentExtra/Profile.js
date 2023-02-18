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

const Profile = ({ style }) => {
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
          source={require("../assets/group-15785.png")}
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
    height: "63.27%",
    width: "47.69%",
    top: "12.24%",
    right: "24.62%",
    bottom: "24.49%",
    left: "27.69%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  profile1: {
    top: 34,
    left: 17,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.5,
    lineHeight: 17,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    width: 36,
    height: 14,
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
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "8.16%",
    left: "0%",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  profile: {
    width: 65,
    height: 48,
  },
});

export default Profile;
