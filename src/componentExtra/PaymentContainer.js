import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PaymentContainer = ({
  onGroupPressablePress,
  onGroupPressablePress1,
  onGroupPressablePress2,
  onGroupPressablePress3,
}) => {
  return (
    <View style={[styles.eneoBillPay, styles.billPosition]}>
      <View style={styles.eneoBillPayChild} />
      <Text style={[styles.eneoBillPayout, styles.viewTypo]}>
        ENEO BILL PAYOUT
      </Text>
      <View style={styles.enoeBill}>
        <View style={[styles.enoeBillChild, styles.enoeLayout]} />
        <View style={[styles.amountParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>Amount</Text>
          <Text style={[styles.xaf, styles.xafTypo]}>5 000 XAF</Text>
        </View>
        <View style={[styles.meterIdParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>{`Meter ID `}</Text>
          <Text style={[styles.text, styles.xafTypo]}>276589414</Text>
        </View>
        <View style={styles.aviaMiriamParent}>
          <Text style={[styles.aviaMiriam, styles.xafTypo]}>AVIA MIRIAM</Text>
          <Text
            style={[styles.meterName, styles.monthTypo]}
          >{`Meter Name `}</Text>
        </View>
        <View style={styles.augustParent}>
          <Text style={[styles.august, styles.xafTypo]}>August</Text>
          <Text style={[styles.month, styles.monthTypo]}>Month</Text>
        </View>
        <Text style={[styles.paid, styles.xafTypo]}>Paid</Text>
        <Pressable
          style={[styles.rectangleParent, styles.rectanglePosition]}
          onPress={onGroupPressablePress}
        >
          <View
            style={[
              styles.groupChild,
              styles.groupShadowBox,
              styles.groupShadowBox1,
            ]}
          />
          <Text style={[styles.view, styles.viewTypo]}>View</Text>
        </Pressable>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupShadowBox, styles.groupShadowBox1]} />
          <Image
            style={[styles.image1Icon, styles.image1IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-119.png")}
          />
        </View>
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupInner, styles.groupShadowBox]} />
          <Text style={[styles.pay, styles.xafTypo]}>Pay</Text>
        </View>
      </View>
      <View style={[styles.enoeBill1, styles.enoePosition]}>
        <View
          style={[styles.enoeBillItem, styles.enoeLayout, styles.billPosition]}
        />
        <View style={[styles.amountParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>Amount</Text>
          <Text style={[styles.xaf, styles.xafTypo]}>5 000 XAF</Text>
        </View>
        <View style={[styles.meterIdParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>{`Meter ID `}</Text>
          <Text style={[styles.text, styles.xafTypo]}>276589414</Text>
        </View>
        <View style={styles.aviaMiriamParent}>
          <Text style={[styles.aviaMiriam, styles.xafTypo]}>AVIA MIRIAM</Text>
          <Text
            style={[styles.meterName, styles.monthTypo]}
          >{`Meter Name `}</Text>
        </View>
        <View style={styles.augustParent}>
          <Text style={[styles.august, styles.xafTypo]}>August</Text>
          <Text style={[styles.month, styles.monthTypo]}>Month</Text>
        </View>
        <Text style={[styles.paid, styles.xafTypo]}>Paid</Text>
        <Pressable
          style={[styles.rectangleParent, styles.rectanglePosition]}
          onPress={onGroupPressablePress1}
        >
          <View
            style={[
              styles.groupChild,
              styles.groupShadowBox,
              styles.groupShadowBox1,
            ]}
          />
          <Text style={[styles.view, styles.viewTypo]}>View</Text>
        </Pressable>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={styles.groupShadowBox1} />
          <Image
            style={[styles.image1Icon, styles.image1IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-119.png")}
          />
        </View>
      </View>
      <View style={[styles.enoeBill2, styles.enoePosition]}>
        <View
          style={[styles.enoeBillItem, styles.enoeLayout, styles.billPosition]}
        />
        <View style={[styles.amountParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>Amount</Text>
          <Text style={[styles.xaf, styles.xafTypo]}>5 000 XAF</Text>
        </View>
        <View style={[styles.meterIdParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>{`Meter ID `}</Text>
          <Text style={[styles.text, styles.xafTypo]}>276589414</Text>
        </View>
        <View style={styles.aviaMiriamParent}>
          <Text style={[styles.aviaMiriam, styles.xafTypo]}>AVIA MIRIAM</Text>
          <Text
            style={[styles.meterName, styles.monthTypo]}
          >{`Meter Name `}</Text>
        </View>
        <View style={styles.augustParent}>
          <Text style={[styles.august, styles.xafTypo]}>August</Text>
          <Text style={[styles.month, styles.monthTypo]}>Month</Text>
        </View>
        <Text style={[styles.paid, styles.xafTypo]}>Paid</Text>
        <Pressable
          style={[styles.rectangleParent, styles.rectanglePosition]}
          onPress={onGroupPressablePress2}
        >
          <View
            style={[
              styles.groupChild,
              styles.groupShadowBox,
              styles.groupShadowBox1,
            ]}
          />
          <Text style={[styles.view, styles.viewTypo]}>View</Text>
        </Pressable>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={styles.groupShadowBox1} />
          <Image
            style={[styles.image1Icon, styles.image1IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-119.png")}
          />
        </View>
      </View>
      <View style={[styles.enoeBill3, styles.enoePosition]}>
        <View
          style={[styles.enoeBillItem, styles.enoeLayout, styles.billPosition]}
        />
        <View style={[styles.amountParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>Amount</Text>
          <Text style={[styles.xaf, styles.xafTypo]}>5 000 XAF</Text>
        </View>
        <View style={[styles.meterIdParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>{`Meter ID `}</Text>
          <Text style={[styles.text, styles.xafTypo]}>276589414</Text>
        </View>
        <View style={styles.aviaMiriamParent}>
          <Text style={[styles.aviaMiriam, styles.xafTypo]}>AVIA MIRIAM</Text>
          <Text
            style={[styles.meterName, styles.monthTypo]}
          >{`Meter Name `}</Text>
        </View>
        <View style={styles.augustParent}>
          <Text style={[styles.august, styles.xafTypo]}>August</Text>
          <Text style={[styles.month, styles.monthTypo]}>Month</Text>
        </View>
        <Text style={[styles.paid, styles.xafTypo]}>Paid</Text>
        <Pressable
          style={[styles.rectangleParent, styles.rectanglePosition]}
          onPress={onGroupPressablePress3}
        >
          <View
            style={[
              styles.groupChild,
              styles.groupShadowBox,
              styles.groupShadowBox1,
            ]}
          />
          <Text style={[styles.view, styles.viewTypo]}>View</Text>
        </Pressable>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={styles.groupShadowBox1} />
          <Image
            style={[styles.image1Icon3, styles.image1IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-122.png")}
          />
        </View>
      </View>
      <View style={[styles.enoeBill4, styles.enoePosition]}>
        <View
          style={[styles.enoeBillItem, styles.enoeLayout, styles.billPosition]}
        />
        <View style={[styles.amountParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>Amount</Text>
          <Text style={[styles.xaf, styles.xafTypo]}>5 000 XAF</Text>
        </View>
        <View style={[styles.meterIdParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>{`Meter ID `}</Text>
          <Text style={[styles.text, styles.xafTypo]}>276589414</Text>
        </View>
        <View style={styles.aviaMiriamParent}>
          <Text style={[styles.aviaMiriam, styles.xafTypo]}>AVIA MIRIAM</Text>
          <Text
            style={[styles.meterName, styles.monthTypo]}
          >{`Meter Name `}</Text>
        </View>
        <View style={styles.augustParent}>
          <Text style={[styles.august, styles.xafTypo]}>August</Text>
          <Text style={[styles.month, styles.monthTypo]}>Month</Text>
        </View>
        <Text style={[styles.paid, styles.xafTypo]}>Paid</Text>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View
            style={[
              styles.groupChild,
              styles.groupShadowBox,
              styles.groupShadowBox1,
            ]}
          />
          <Text style={[styles.view, styles.viewTypo]}>View</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={styles.groupShadowBox1} />
          <Image
            style={[styles.image1Icon, styles.image1IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-122.png")}
          />
        </View>
      </View>
      <View style={[styles.enoeBill5, styles.enoePosition]}>
        <View
          style={[styles.enoeBillItem, styles.enoeLayout, styles.billPosition]}
        />
        <View style={[styles.amountParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>Amount</Text>
          <Text style={[styles.xaf, styles.xafTypo]}>5 000 XAF</Text>
        </View>
        <View style={[styles.meterIdParent, styles.parentPosition]}>
          <Text style={[styles.amount, styles.monthTypo]}>{`Meter ID `}</Text>
          <Text style={[styles.text, styles.xafTypo]}>276589414</Text>
        </View>
        <View style={styles.aviaMiriamParent}>
          <Text style={[styles.aviaMiriam, styles.xafTypo]}>AVIA MIRIAM</Text>
          <Text
            style={[styles.meterName, styles.monthTypo]}
          >{`Meter Name `}</Text>
        </View>
        <View style={styles.augustParent}>
          <Text style={[styles.august, styles.xafTypo]}>August</Text>
          <Text style={[styles.month, styles.monthTypo]}>Month</Text>
        </View>
        <Text style={[styles.paid, styles.xafTypo]}>Paid</Text>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View
            style={[
              styles.groupChild,
              styles.groupShadowBox,
              styles.groupShadowBox1,
            ]}
          />
          <Text style={[styles.view, styles.viewTypo]}>View</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={styles.groupShadowBox1} />
          <Image
            style={[styles.image1Icon, styles.image1IconLayout]}
            resizeMode="cover"
            source={require("../assets/image-122.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  billPosition: {
    right: "0%",
    width: "100%",
    left: "0%",
  },
  viewTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  enoeLayout: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_4xs,
    height: 92,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    left: "2.38%",
    position: "absolute",
  },
  monthTypo: {
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    top: 0,
    position: "absolute",
  },
  xafTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  rectanglePosition: {
    height: 24,
    right: "2.98%",
    width: "19.35%",
    left: "77.68%",
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  groupShadowBox1: {
    backgroundColor: Color.honeydew,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 24,
    top: 0,
  },
  image1IconLayout: {
    height: 16,
    overflow: "hidden",
    maxWidth: "100%",
    width: "78.46%",
    position: "absolute",
  },
  enoePosition: {
    left: "3.33%",
    right: "3.33%",
    width: "93.33%",
    height: 92,
    position: "absolute",
  },
  eneoBillPayChild: {
    top: 26,
    backgroundColor: Color.gainsboro_700,
    width: 360,
    height: 584,
    left: 0,
    position: "absolute",
  },
  eneoBillPayout: {
    letterSpacing: 1.6,
    lineHeight: 19,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    left: 12,
    top: 0,
    fontSize: FontSize.size_sm,
  },
  enoeBillChild: {
    width: 336,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: 0,
  },
  amount: {
    textAlign: "left",
    left: "0%",
  },
  xaf: {
    top: 12,
    fontWeight: "700",
    color: Color.iOSKeyLabel,
    left: "0%",
  },
  amountParent: {
    width: "18.45%",
    top: 57,
    right: "79.17%",
    height: 28,
  },
  text: {
    top: 14,
    color: Color.iOSKeyLabel,
    left: "0%",
  },
  meterIdParent: {
    width: "18.15%",
    right: "79.46%",
    height: 30,
    top: 3,
  },
  aviaMiriam: {
    top: 15,
    color: Color.iOSKeyLabel,
    left: "0%",
  },
  meterName: {
    left: "14.63%",
    textAlign: "left",
  },
  aviaMiriamParent: {
    width: "24.4%",
    top: 2,
    right: "37.8%",
    left: "37.8%",
    height: 31,
    position: "absolute",
  },
  august: {
    top: 11,
    color: Color.iOSKeyLabel,
    left: "0%",
  },
  month: {
    left: "14.29%",
    textAlign: "center",
  },
  augustParent: {
    width: "12.5%",
    top: 60,
    right: "44.05%",
    left: "43.45%",
    height: 27,
    position: "absolute",
  },
  paid: {
    top: 40,
    left: "45.83%",
    color: Color.lime_100,
  },
  groupChild: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.honeydew,
  },
  view: {
    width: "43.08%",
    top: 5,
    left: "29.23%",
    height: 13,
    textAlign: "left",
    color: Color.iOSKeyLabel,
  },
  rectangleParent: {
    top: 6,
  },
  image1Icon: {
    right: "10.77%",
    left: "10.77%",
    top: 3,
  },
  rectangleGroup: {
    top: 61,
  },
  groupInner: {
    height: "100%",
    top: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.springgreen,
    bottom: "0%",
  },
  pay: {
    height: "58.33%",
    width: "34.38%",
    top: "16.02%",
    left: "32.81%",
    color: Color.iOSKeyLabel,
  },
  rectangleContainer: {
    height: "22.58%",
    width: "19.05%",
    top: "38.29%",
    right: "3.27%",
    bottom: "39.13%",
    left: "77.68%",
    position: "absolute",
  },
  enoeBill: {
    top: 33,
    height: 92,
    width: 336,
    left: 12,
    position: "absolute",
  },
  enoeBillItem: {
    left: "0%",
  },
  enoeBill1: {
    top: 130,
  },
  enoeBill2: {
    top: 227,
  },
  image1Icon3: {
    top: 388,
    right: "-409.23%",
    left: "430.77%",
  },
  enoeBill3: {
    top: 324,
  },
  enoeBill4: {
    top: 421,
  },
  enoeBill5: {
    top: 518,
  },
  eneoBillPay: {
    height: "77.13%",
    top: "22.87%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
});

export default PaymentContainer;
