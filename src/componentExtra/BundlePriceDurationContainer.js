import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BundlePriceDurationContainer = ({ propTop }) => {
  const oMBundlePriceAndDurationDStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[styles.omBundlePriceAndDurationD, oMBundlePriceAndDurationDStyle]}
    >
      <View style={styles.bundleDurationVoice}>
        <Text style={styles.chooseYourBundle}>Choose Your Bundle Duration</Text>
        <View style={[styles.daily, styles.dailyPosition]}>
          <Image
            style={[styles.dailyChild, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-211.png")}
          />
          <Image
            style={styles.yellowIcon}
            resizeMode="cover"
            source={require("../assets/yellow.png")}
          />
          <Image
            style={styles.tabAreaIcon}
            resizeMode="cover"
            source={require("../assets/tab-area.png")}
          />
          <Text style={[styles.daily1, styles.daily1Typo]}>Daily</Text>
        </View>
        <View style={[styles.weekly, styles.weeklyPosition]}>
          <Image
            style={[styles.weeklyChild, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-211.png")}
          />
          <Image
            style={[styles.yellowIcon1, styles.yellowIconPosition]}
            resizeMode="cover"
            source={require("../assets/yellow.png")}
          />
          <Image
            style={[styles.tabAreaIcon1, styles.tabIconPosition]}
            resizeMode="cover"
            source={require("../assets/tab-area.png")}
          />
          <Text style={[styles.weekly1, styles.daily1Typo]}>Weekly</Text>
        </View>
        <View
          style={[
            styles.monthly,
            styles.monthlyPosition,
            styles.weeklyPosition,
          ]}
        >
          <Image
            style={[styles.monthlyChild, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-211.png")}
          />
          <Image
            style={[styles.yellowIcon2, styles.yellowIconPosition]}
            resizeMode="cover"
            source={require("../assets/yellow.png")}
          />
          <Image
            style={[styles.tabAreaIcon2, styles.tabIconPosition]}
            resizeMode="cover"
            source={require("../assets/tab-area.png")}
          />
          <Text style={[styles.monthly1, styles.daily1Typo]}>Monthly</Text>
        </View>
      </View>
      <View
        style={[
          styles.pricesAndOfferVoice,
          styles.monthlyPosition,
          styles.dailyPosition,
        ]}
      >
        <View
          style={[
            styles.priceAndOffer,
            styles.priceLayout1,
            styles.pricePosition,
          ]}
        >
          <View style={[styles.priceAndOfferChild, styles.tabShadowBox]} />
          <View style={styles.priceParent}>
            <Text
              style={[
                styles.priceLayout,
                styles.xafPosition1,
                styles.xafLayout,
              ]}
            >
              Price
            </Text>
            <Text
              style={[
                styles.xaf,
                styles.mbTypo,
                styles.xafPosition1,
                styles.xafLayout,
              ]}
            >{`100 XAF `}</Text>
          </View>
          <View style={[styles.offerParent, styles.offerPosition]}>
            <Text
              style={[styles.offerLayout, styles.xafPosition1]}
            >{`Offer `}</Text>
            <Text style={[styles.xafPosition, styles.xafPosition1]}>
              750 XAF
            </Text>
          </View>
          <View style={[styles.tabArea, styles.tabShadowBox]} />
        </View>
        <View style={[styles.priceAndOffer1, styles.priceLayout1]}>
          <View style={[styles.priceAndOfferChild, styles.tabShadowBox]} />
          <View style={styles.priceParent}>
            <Text style={[styles.xafPosition1, styles.xafLayout]}>Price</Text>
            <Text
              style={[
                styles.xaf,
                styles.mbTypo,
                styles.xafPosition1,
                styles.xafLayout,
              ]}
            >{`70 XAF `}</Text>
          </View>
          <View style={styles.offerGroup}>
            <Text
              style={[styles.mbPosition, styles.priceLayout]}
            >{`Offer `}</Text>
            <Text style={[styles.mb, styles.mbPosition, styles.mbTypo]}>
              550 MB
            </Text>
          </View>
          <View style={[styles.tabArea, styles.tabShadowBox]} />
        </View>
        <View
          style={[
            styles.priceAndOffer2,
            styles.priceLayout1,
            styles.pricePosition,
          ]}
        >
          <View style={[styles.priceAndOfferChild, styles.tabShadowBox]} />
          <View style={styles.priceParent}>
            <Text style={styles.xafLayout}>Price</Text>
            <Text
              style={[
                styles.xaf,
                styles.mbTypo,
                styles.xafPosition1,
                styles.xafLayout,
              ]}
            >{`150 XAF `}</Text>
          </View>
          <View style={[styles.offerContainer, styles.offerPosition]}>
            <Text
              style={[styles.xaf4Position, styles.offerLayout]}
            >{`Offer `}</Text>
            <Text style={[styles.xaf4Position, styles.xafPosition]}>
              1500 XAF
            </Text>
          </View>
          <View style={[styles.tabArea2, styles.tabShadowBox]} />
        </View>
        <View
          style={[
            styles.priceAndOffer3,
            styles.priceLayout1,
            styles.pricePosition,
          ]}
        >
          <View style={[styles.priceAndOfferChild, styles.tabShadowBox]} />
          <View style={styles.priceParent}>
            <Text style={styles.xafLayout}>Price</Text>
            <Text
              style={[
                styles.xaf,
                styles.mbTypo,
                styles.xafPosition1,
                styles.xafLayout,
              ]}
            >{`200 XAF `}</Text>
          </View>
          <View style={[styles.offerContainer, styles.offerPosition]}>
            <Text style={styles.offerLayout}>{`Offer `}</Text>
            <Text style={styles.xafPosition}>1950 XAF</Text>
          </View>
          <View style={[styles.tabArea, styles.tabShadowBox]} />
        </View>
        <Text style={styles.chooseYourBundle1}>Choose Your Bundle</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dailyPosition: {
    left: "0%",
    bottom: "0%",
  },
  childLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "26.67%",
    top: "23.33%",
    height: "50%",
    position: "absolute",
  },
  daily1Typo: {
    top: "16.67%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  weeklyPosition: {
    bottom: "1.79%",
    top: "44.64%",
    height: "53.57%",
  },
  yellowIconPosition: {
    bottom: "-50%",
    top: "113.33%",
    display: "none",
    height: "36.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tabIconPosition: {
    bottom: "-83.33%",
    top: "83.33%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  monthlyPosition: {
    right: "0%",
    position: "absolute",
  },
  priceLayout1: {
    width: 111,
    height: "70.25%",
    left: "50%",
    position: "absolute",
  },
  pricePosition: {
    bottom: "9.16%",
    top: "20.59%",
    width: 111,
    height: "70.25%",
  },
  tabShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    marginLeft: -55.5,
    width: 111,
    left: "50%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  xafPosition1: {
    marginLeft: -29,
    left: "50%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  xafLayout: {
    height: "54.29%",
    marginLeft: -29,
  },
  mbTypo: {
    fontWeight: "700",
    top: "45.71%",
  },
  offerPosition: {
    bottom: "3.71%",
    height: "40.99%",
    top: "55.29%",
    marginLeft: -46.5,
    left: "50%",
    position: "absolute",
  },
  priceLayout: {
    width: 35,
    top: "0%",
  },
  mbPosition: {
    marginLeft: -26.5,
    height: "54.29%",
    left: "50%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  offerLayout: {
    height: "54.53%",
    width: 35,
    top: "0%",
  },
  xafPosition: {
    top: "45.92%",
    fontWeight: "700",
  },
  chooseYourBundle: {
    left: "2.74%",
    fontStyle: "italic",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    top: "0%",
    position: "absolute",
  },
  dailyChild: {
    width: "24.19%",
    right: "62.9%",
    left: "12.9%",
  },
  yellowIcon: {
    width: "17.74%",
    top: "116.67%",
    right: "66.13%",
    bottom: "-53.33%",
    left: "16.13%",
    display: "none",
    height: "36.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tabAreaIcon: {
    width: "50.18%",
    top: "86.67%",
    right: "49.82%",
    bottom: "-86.67%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  daily1: {
    left: "43.55%",
  },
  daily: {
    width: "21.23%",
    top: "46.43%",
    right: "78.77%",
    height: "53.57%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  weeklyChild: {
    width: "19.48%",
    right: "70.13%",
    left: "10.39%",
  },
  yellowIcon1: {
    width: "14.29%",
    right: "-61.04%",
    left: "146.75%",
  },
  tabAreaIcon1: {
    width: "40.4%",
    right: "-74.17%",
    left: "133.77%",
  },
  weekly1: {
    left: "35.06%",
  },
  weekly: {
    width: "26.37%",
    right: "38.36%",
    left: "35.27%",
    position: "absolute",
  },
  monthlyChild: {
    width: "17.65%",
    right: "72.94%",
    left: "9.41%",
  },
  yellowIcon2: {
    width: "12.94%",
    right: "-168.24%",
    left: "255.29%",
  },
  tabAreaIcon2: {
    width: "36.6%",
    right: "-180.13%",
    left: "243.53%",
  },
  monthly1: {
    left: "31.76%",
  },
  monthly: {
    width: "29.11%",
    left: "70.89%",
  },
  bundleDurationVoice: {
    height: "28.28%",
    width: "81.11%",
    right: "11.11%",
    bottom: "71.72%",
    left: "7.78%",
    top: "0%",
    position: "absolute",
  },
  priceAndOfferChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  xaf: {
    width: 58,
  },
  priceParent: {
    top: "4.71%",
    bottom: "54.12%",
    width: 58,
    marginLeft: -46.5,
    height: "41.18%",
    left: "50%",
    position: "absolute",
  },
  offerParent: {
    width: 58,
  },
  tabArea: {
    backgroundColor: Color.gray_2300,
  },
  priceAndOffer: {
    marginLeft: -158,
  },
  mb: {
    width: 53,
  },
  offerGroup: {
    bottom: "3.53%",
    width: 53,
    top: "55.29%",
    marginLeft: -46.5,
    height: "41.18%",
    left: "50%",
    position: "absolute",
  },
  priceAndOffer1: {
    marginLeft: -279,
    top: "20.49%",
    bottom: "9.26%",
    width: 111,
    height: "70.25%",
  },
  xaf4Position: {
    marginLeft: -33,
    left: "50%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  offerContainer: {
    width: 66,
  },
  tabArea2: {
    backgroundColor: Color.gray_1100,
  },
  priceAndOffer2: {
    marginLeft: -37,
  },
  priceAndOffer3: {
    marginLeft: 84,
  },
  chooseYourBundle1: {
    height: "14.71%",
    marginLeft: -149,
    top: "0.94%",
    fontSize: FontSize.size_3xl,
    width: 153,
    left: "50%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  pricesAndOfferVoice: {
    height: "61.62%",
    width: "100%",
    top: "38.38%",
    display: "none",
  },
  omBundlePriceAndDurationD: {
    top: 494,
    left: -4,
    width: 360,
    height: 198,
    position: "absolute",
  },
});

export default BundlePriceDurationContainer;
