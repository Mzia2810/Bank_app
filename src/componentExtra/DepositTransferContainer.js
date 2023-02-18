import * as React from "react";
import { useMemo } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DepositTransferContainer = ({
  propBackgroundColor,
  propOpacity,
  onRectanglePressablePress,
}) => {
  const rectanglePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("opacity", propOpacity),
    };
  }, [propBackgroundColor, propOpacity]);

  return (
    <View
      style={[
        styles.depositeAndTransfer,
        styles.depositeLayout,
        styles.depositePosition,
      ]}
    >
      <Image
        style={[
          styles.depositeAndTransferChild,
          styles.depositePosition,
          styles.vectorIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/group-22.png")}
      />
      <Text
        style={[
          styles.depositsTransfers,
          styles.depositePosition,
          styles.vectorIconPosition,
        ]}
      >{`Deposits & Transfers`}</Text>
      <Image
        style={[
          styles.vectorIcon,
          styles.depositePosition,
          styles.vectorIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/vector148.png")}
      />
      <Pressable
        style={[
          styles.depositeAndTransferItem,
          styles.depositeLayout,
          rectanglePressableStyle,
        ]}
        onPress={onRectanglePressablePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  depositeLayout: {
    height: 52,
    width: 337,
    position: "absolute",
  },
  depositePosition: {
    left: "50%",
    top: "50%",
  },
  vectorIconPosition: {
    position: "absolute",
    top: "50%",
  },
  depositeAndTransferChild: {
    marginTop: -23,
    marginLeft: -153.5,
    width: 42,
    height: 42,
  },
  depositsTransfers: {
    marginTop: -18,
    marginLeft: -98.5,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
  },
  vectorIcon: {
    marginTop: -11,
    marginLeft: 140.5,
    width: 8,
    height: 14,
  },
  depositeAndTransferItem: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_500,
    opacity: 0,
  },
  depositeAndTransfer: {
    marginTop: -93,
    marginLeft: -166,
  },
});

export default DepositTransferContainer;
