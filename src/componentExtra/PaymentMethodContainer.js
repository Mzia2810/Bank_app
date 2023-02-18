import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import Pincode from "../components/Pincode";
import Pincode1 from "../components/Pincode1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const PaymentMethodContainer = () => {
  const [tabAreaVisible, setTabAreaVisible] = useState(false);
  const [tabArea1Visible, setTabArea1Visible] = useState(false);
  const [expresUnion2Visible, setExpresUnion2Visible] = useState(false);
  const [download42Visible, setDownload42Visible] = useState(false);
  const [download32Visible, setDownload32Visible] = useState(false);
  const [download2Visible, setDownload2Visible] = useState(false);
  const [x630wa2ImageVisible, setX630wa2ImageVisible] = useState(false);

  const openTabArea = useCallback(() => {
    setTabAreaVisible(true);
  }, []);

  const closeTabArea = useCallback(() => {
    setTabAreaVisible(false);
  }, []);

  const openTabArea1 = useCallback(() => {
    setTabArea1Visible(true);
  }, []);

  const closeTabArea1 = useCallback(() => {
    setTabArea1Visible(false);
  }, []);

  const openExpresUnion2 = useCallback(() => {
    setExpresUnion2Visible(true);
  }, []);

  const closeExpresUnion2 = useCallback(() => {
    setExpresUnion2Visible(false);
  }, []);

  const openDownload42 = useCallback(() => {
    setDownload42Visible(true);
  }, []);

  const closeDownload42 = useCallback(() => {
    setDownload42Visible(false);
  }, []);

  const openDownload32 = useCallback(() => {
    setDownload32Visible(true);
  }, []);

  const closeDownload32 = useCallback(() => {
    setDownload32Visible(false);
  }, []);

  const openDownload2 = useCallback(() => {
    setDownload2Visible(true);
  }, []);

  const closeDownload2 = useCallback(() => {
    setDownload2Visible(false);
  }, []);

  const openX630wa2Image = useCallback(() => {
    setX630wa2ImageVisible(true);
  }, []);

  const closeX630wa2Image = useCallback(() => {
    setX630wa2ImageVisible(false);
  }, []);
  return (
    <>
      <View style={[styles.paymentMethod, styles.paymentLayout]}>
        <View style={[styles.paymentMethodChild, styles.paymentLayout]} />
        <Text style={[styles.selectAPayment, styles.momoPosition]}>
          {" "}
          Select a payment method to make the saving
        </Text>
        <View style={styles.paymentMethod1}>
          <View
            style={[
              styles.orangeMoneyIcon,
              styles.unionLayout,
              styles.unionLayout1,
            ]}
          >
            <View style={[styles.orangeMoneyIconChild, styles.tabAreaLayout]} />
            <Image
              style={[styles.orangeMoneyIconItem, styles.orangeIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-21.png")}
            />
            <Image
              style={[styles.orangeMoneyIconInner, styles.orangeIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-31.png")}
            />
            <Text style={styles.orangeMoney}>Orange Money</Text>
            <Pressable
              style={[styles.tabArea, styles.tabAreaLayout]}
              onPress={openTabArea}
            />
          </View>
          <View style={[styles.momo, styles.momoPosition]}>
            <Image
              style={styles.mtnMmLogoGenericMtnMobileIcon}
              resizeMode="cover"
              source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-11.png")}
            />
            <Pressable
              style={[styles.tabArea1, styles.tabArea1Bg, styles.unionLayout]}
              onPress={openTabArea1}
            />
          </View>
          <View
            style={[
              styles.expressUnion,
              styles.unionLayout,
              styles.unionLayout1,
            ]}
          >
            <Image
              style={[
                styles.expresUnion1,
                styles.unionLayout,
                styles.unionLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/expres-union-1.png")}
            />
            <Pressable
              style={[
                styles.expresUnion2,
                styles.tabArea1Bg,
                styles.unionLayout,
                styles.unionLayout1,
              ]}
              onPress={openExpresUnion2}
            />
          </View>
          <Image
            style={styles.fcfa1Icon}
            resizeMode="cover"
            source={require("../assets/fcfa-1.png")}
          />
          <View style={[styles.afrikland, styles.downloadLayout1]}>
            <Image
              style={[styles.download41, styles.downloadLayout1]}
              resizeMode="cover"
              source={require("../assets/download-4-1.png")}
            />
            <Pressable
              style={[styles.download42, styles.downloadLayout1]}
              onPress={openDownload42}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/download-4-2.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.ccaBank, styles.downloadLayout]}>
            <Image
              style={[styles.download31, styles.downloadLayout]}
              resizeMode="cover"
              source={require("../assets/download-3-1.png")}
            />
            <Pressable
              style={[styles.download32, styles.downloadLayout]}
              onPress={openDownload32}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/download-3-1.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.cbc, styles.cbcLayout]}>
            <Image
              style={[styles.download1Icon, styles.cbcLayout]}
              resizeMode="cover"
              source={require("../assets/download-1.png")}
            />
            <Pressable
              style={[styles.cbcLayout, styles.tabArea1Bg]}
              onPress={openDownload2}
            />
          </View>
          <View style={[styles.yup, styles.yupLayout]}>
            <Image
              style={[styles.x630wa1Icon, styles.yupLayout]}
              resizeMode="cover"
              source={require("../assets/1200x630wa-1.png")}
            />
            <Pressable
              style={[styles.x630wa2, styles.yupLayout]}
              onPress={openX630wa2Image}
            >
              <Image
                style={[styles.icon2, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/1200x630wa-1.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={tabAreaVisible}>
        <View style={styles.tabAreaOverlay}>
          <Pressable style={styles.tabAreaBg} onPress={closeTabArea} />
          <Pincode onClose={closeTabArea} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea1Visible}>
        <View style={styles.tabArea1Overlay}>
          <Pressable style={styles.tabArea1Bg} onPress={closeTabArea1} />
          <Pincode onClose={closeTabArea1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={expresUnion2Visible}>
        <View style={styles.expresUnion2Overlay}>
          <Pressable
            style={styles.expresUnion2Bg}
            onPress={closeExpresUnion2}
          />
          <Pincode1 onClose={closeExpresUnion2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={download42Visible}>
        <View style={styles.download42Overlay}>
          <Pressable style={styles.download42Bg} onPress={closeDownload42} />
          <Pincode1 onClose={closeDownload42} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={download32Visible}>
        <View style={styles.download32Overlay}>
          <Pressable style={styles.download32Bg} onPress={closeDownload32} />
          <Pincode1 onClose={closeDownload32} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={download2Visible}>
        <View style={styles.download2Overlay}>
          <Pressable style={styles.download2Bg} onPress={closeDownload2} />
          <Pincode1 onClose={closeDownload2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={x630wa2ImageVisible}>
        <View style={styles.x630wa2ImageOverlay}>
          <Pressable
            style={styles.x630wa2ImageBg}
            onPress={closeX630wa2Image}
          />
          <Pincode1 onClose={closeX630wa2Image} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  paymentLayout: {
    height: 204,
    width: 345,
    position: "absolute",
  },
  momoPosition: {
    top: 13,
    position: "absolute",
  },
  unionLayout: {
    height: 45,
    position: "absolute",
  },
  unionLayout1: {
    width: 45,
    height: 45,
  },
  tabAreaLayout: {
    borderRadius: Border.br_xl,
    height: 45,
    width: 45,
    left: 0,
    top: 0,
    position: "absolute",
  },
  orangeIconLayout: {
    height: 17,
    width: 18,
    borderRadius: Border.br_5xl,
    top: 10,
    position: "absolute",
  },
  tabArea1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  downloadLayout1: {
    height: 55,
    width: 71,
    position: "absolute",
  },
  downloadLayout: {
    height: 64,
    width: 64,
    position: "absolute",
  },
  cbcLayout: {
    height: 60,
    width: 77,
    top: 0,
    position: "absolute",
  },
  yupLayout: {
    width: 55,
    height: 55,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  paymentMethodChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: 0,
    top: 0,
  },
  selectAPayment: {
    left: 17,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    width: 311,
    height: 16,
  },
  orangeMoneyIconChild: {
    backgroundColor: Color.gray_400,
  },
  orangeMoneyIconItem: {
    left: 24,
  },
  orangeMoneyIconInner: {
    left: 4,
  },
  orangeMoney: {
    top: 30,
    left: 2,
    fontSize: FontSize.size_7xs,
    lineHeight: 7,
    fontWeight: "700",
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
    textAlign: "center",
    width: 41,
    height: 8,
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
    backgroundColor: Color.gray_2400,
  },
  orangeMoneyIcon: {
    top: 17,
    left: 92,
  },
  mtnMmLogoGenericMtnMobileIcon: {
    left: -3,
    width: 83,
    height: 53,
    top: 0,
    position: "absolute",
  },
  tabArea1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea1: {
    top: 3,
    width: 75,
  },
  momo: {
    width: 76,
    height: 48,
    left: 0,
  },
  expresUnion1: {
    left: 0,
    top: 0,
  },
  expresUnion2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  expresUnion2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  expresUnion2: {
    top: 0,
  },
  expressUnion: {
    top: 15,
    left: 157,
  },
  fcfa1Icon: {
    left: 235,
    width: 63,
    height: 57,
    top: 92,
    position: "absolute",
  },
  download41: {
    left: 0,
    top: 0,
  },
  download42Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  download42Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  download42: {
    left: 32,
    top: 427,
  },
  afrikland: {
    left: 1,
    top: 90,
  },
  download31: {
    left: 0,
    top: 0,
  },
  download32Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  download32Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  download32: {
    left: 0,
    top: 0,
  },
  ccaBank: {
    left: 81,
    top: 90,
  },
  download1Icon: {
    left: 0,
  },
  download2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  download2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  cbc: {
    left: 220,
  },
  x630wa1Icon: {
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
  },
  x630wa2ImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  x630wa2ImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon2: {
    borderRadius: Border.br_3xl,
  },
  x630wa2: {
    left: 0,
    top: 0,
  },
  yup: {
    top: 92,
    left: 157,
  },
  paymentMethod1: {
    top: 36,
    width: 298,
    height: 154,
    left: 24,
    position: "absolute",
  },
  paymentMethod: {
    top: 301,
    left: 7,
  },
});

export default PaymentMethodContainer;
