import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ProfileContainer = ({ carImageUrl, vehicleImageUrl }) => {
  return (
    <View style={styles.profile}>
      <Image
        style={[styles.profileChild, styles.profilePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-231.png")}
      />
      <Image
        style={styles.profileItem}
        resizeMode="cover"
        source={carImageUrl}
      />
      <Image
        style={[styles.profileInner, styles.profilePosition]}
        resizeMode="cover"
        source={vehicleImageUrl}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={[styles.kalsonTawa, styles.kalsonTawaTypo]}>
        Kalson TAWA
      </Text>
      <Text style={[styles.lastVisit23082022, styles.kalsonTawaTypo]}>
        Last visit 23/08/2022
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePosition: {
    height: 122,
    top: 0,
    position: "absolute",
  },
  kalsonTawaTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  profileChild: {
    left: 4,
    width: 366,
  },
  profileItem: {
    top: 50,
    width: 218,
    height: 72,
    left: 4,
    position: "absolute",
  },
  profileInner: {
    left: 222,
    width: 142,
  },
  ellipseIcon: {
    top: 56,
    left: 22,
    width: 88,
    height: 88,
    position: "absolute",
  },
  kalsonTawa: {
    top: 69,
    left: 120,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.3,
    lineHeight: 29,
    color: Color.iOSKeyBackgroundHighlight,
  },
  lastVisit23082022: {
    top: 100,
    left: 118,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.7,
    lineHeight: 14,
    color: Color.rosybrown,
  },
  profile: {
    top: 30,
    left: -3,
    height: 144,
    width: 366,
    position: "absolute",
  },
});

export default ProfileContainer;
