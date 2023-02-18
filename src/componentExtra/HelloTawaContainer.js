import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const HelloTawaContainer = ({ propTop }) => {
  const helloTawaStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.helloTawa, helloTawaStyle]}>
      <View style={styles.groupParent}>
        <View style={[styles.yelloParent, styles.yelloLayout]}>
          <View style={[styles.yello, styles.yelloLayout]}>
            <Text
              style={[
                styles.hello,
                styles.helloTypo,
                styles.helloTypo1,
                styles.yelloLayout,
              ]}
            >
              Hello
            </Text>
          </View>
          <Text style={[styles.tawa, styles.tawaLayout]}>
            <Text style={styles.t}> T</Text>
            <Text style={styles.awa}>AWA</Text>
          </Text>
        </View>
        <Text
          style={[
            styles.welcomeToAwesome,
            styles.tawaLayout,
            styles.helloTypo1,
          ]}
        >
          Welcome to Awesome!!!!
        </Text>
      </View>
      <View style={[styles.orange, styles.orangeLayout1]}>
        <View style={styles.orangeChild} />
        <Text style={[styles.orangeMoney, styles.helloTypo]}>Orange Money</Text>
        <Image
          style={[styles.orangeItem, styles.orangeLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-28.png")}
        />
        <Image
          style={[styles.orangeInner, styles.orangeLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-38.png")}
        />
        <View style={[styles.tabArea, styles.orangeLayout1]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yelloLayout: {
    height: 40,
    top: 0,
  },
  helloTypo: {
    textAlign: "center",
    fontFamily: FontFamily.rubik,
    fontWeight: "600",
    position: "absolute",
  },
  helloTypo1: {
    fontStyle: "italic",
    left: 0,
  },
  tawaLayout: {
    height: 26,
    textAlign: "center",
    position: "absolute",
  },
  orangeLayout1: {
    height: 49,
    width: 87,
    top: 0,
    position: "absolute",
  },
  orangeLayout: {
    height: 17,
    width: 16,
    borderRadius: Border.br_5xl,
    top: 15,
    position: "absolute",
  },
  hello: {
    fontSize: FontSize.size_7xl,
    lineHeight: 37,
    color: Color.iOSKeyLabel,
    width: 104,
  },
  yello: {
    right: 44,
    left: 0,
    position: "absolute",
  },
  t: {
    fontSize: FontSize.size_4xl,
  },
  awa: {
    fontSize: FontSize.size_xl,
  },
  tawa: {
    top: 7,
    left: 86,
    letterSpacing: "6.5%",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_200,
    width: 62,
  },
  yelloParent: {
    right: 58,
    left: 42,
    position: "absolute",
  },
  welcomeToAwesome: {
    top: 32,
    fontSize: FontSize.size_6xl,
    lineHeight: 35,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.blue_100,
    width: 248,
  },
  groupParent: {
    top: 54,
    right: 0,
    height: 58,
    left: 0,
    position: "absolute",
  },
  orangeChild: {
    top: 2,
    left: 5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyLabel,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 80,
    height: 42,
    position: "absolute",
  },
  orangeMoney: {
    top: 12,
    left: 40,
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.1,
    lineHeight: 11,
    textTransform: "uppercase",
    color: Color.orangeColor,
    width: 42,
    height: 22,
  },
  orangeItem: {
    left: 24,
  },
  orangeInner: {
    left: 7,
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
  },
  orange: {
    left: 83,
  },
  helloTawa: {
    top: 69,
    right: 56,
    left: 56,
    height: 112,
    position: "absolute",
  },
});

export default HelloTawaContainer;
