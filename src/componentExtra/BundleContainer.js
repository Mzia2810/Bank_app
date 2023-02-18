import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BundleContainer = ({ propTop }) => {
  const otherBundlesStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.otherBundles, styles.otherLayout, otherBundlesStyle]}>
      <View style={[styles.otherBundlesChild, styles.otherLayout]} />
      <Text style={[styles.otherBundles1, styles.inactiveTypo]}>
        Other Bundles
      </Text>
      <Text style={[styles.flexiInactive, styles.inactiveTypo]}>
        <Text style={styles.flexi}>{`Flexi: `}</Text>
        <Text style={styles.inactive}>Inactive</Text>
      </Text>
      <Text style={[styles.gigaDataInactiveContainer, styles.inactiveTypo]}>
        <Text style={styles.flexi}>{`GiGa Data: `}</Text>
        <Text style={styles.inactive}>Inactive</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  otherLayout: {
    height: 77,
    width: 340,
    position: "absolute",
  },
  inactiveTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  otherBundlesChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  otherBundles1: {
    top: 7,
    left: 8,
    color: Color.iOSKeyLabel,
  },
  flexi: {
    color: Color.iOSKeyLabel,
  },
  inactive: {
    color: Color.deeppink,
  },
  flexiInactive: {
    top: "45.45%",
    left: "2.35%",
  },
  gigaDataInactiveContainer: {
    top: "44.16%",
    left: "52.35%",
  },
  otherBundles: {
    top: 298,
    left: 10,
  },
});

export default BundleContainer;
