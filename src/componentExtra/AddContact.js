import * as React from "react";
import { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MainActivity";
import { Margin, FontSize, Color, FontFamily, Border } from "../../GlobalStyle";

const AddContact = ({ onClose }) => {
  const [tabArea23Visible, setTabArea23Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea23 = useCallback(() => {
    setTabArea23Visible(true);
  }, []);

  const closeTabArea23 = useCallback(() => {
    setTabArea23Visible(false);
  }, []);
  return (
    <>
      <View style={[styles.addContact, styles.groupIconLayout]}>
        <View style={styles.images1} />
        <View style={styles.addContactChild} />
        <View style={styles.addContactItem} />
        <View style={[styles.aParent, styles.parentLayout]}>
          <Text style={[styles.a, styles.aLayout, styles.aTypo]}>A</Text>
          <View
            style={[
              styles.danielParent,
              styles.tabPosition,
              styles.danielParentPosition,
            ]}
          >
            <View style={styles.daniel}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={[
                  styles.danielItem,
                  styles.danielChildPosition,
                  styles.danielLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/ellipse-122.png")}
              />
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={styles.image1Icon}
                resizeMode="cover"
                source={require("../../assets/image-1.png")}
              />
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../../assets/ellipse-122.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../../assets/ellipse-16.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.bParent, styles.parentLayout]}>
          <Text
            style={[styles.b, styles.bPosition, styles.aLayout, styles.aTypo]}
          >
            B
          </Text>
          <View style={styles.danielGroup}>
            <View style={styles.daniel}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={styles.danielChild3}
                resizeMode="cover"
                source={require("../../assets/ellipse-14.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.image1Icon1, styles.image1Icon1Position]}
                resizeMode="cover"
                source={require("../../assets/image-1.png")}
              />
              <Image
                style={styles.danielChild5}
                resizeMode="cover"
                source={require("../../assets/ellipse-17.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.danielChild7, styles.danielChildPosition]}
                resizeMode="cover"
                source={require("../../assets/ellipse-18.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.cParent, styles.parentLayout]}>
          <Text
            style={[styles.b, styles.bPosition, styles.aLayout, styles.aTypo]}
          >
            C
          </Text>
          <View style={styles.danielGroup}>
            <View style={styles.daniel}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.danielChild7, styles.danielChildPosition]}
                resizeMode="cover"
                source={require("../../assets/ellipse-19.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={[styles.danielChild7, styles.danielChildPosition]}
                resizeMode="cover"
                source={require("../../assets/ellipse-20.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.profileIcon, styles.profileIconLayout]}
                resizeMode="cover"
                source={require("../../assets/profile.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.dParent, styles.parentLayout]}>
          <Text
            style={[styles.b, styles.bPosition, styles.aLayout, styles.aTypo]}
          >
            D
          </Text>
          <View style={styles.danielGroup}>
            <View style={styles.daniel}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.profileIcon1, styles.profileIconLayout]}
                resizeMode="cover"
                source={require("../../assets/profile1.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.profileIcon1, styles.profileIconLayout]}
                resizeMode="cover"
                source={require("../../assets/inactive.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[
                  styles.danielChild16,
                  styles.danielChildPosition,
                  styles.danielLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/ellipse-122.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.dGroup, styles.parentLayout]}>
          <Text
            style={[styles.b, styles.bPosition, styles.aLayout, styles.aTypo]}
          >
            D
          </Text>
          <View style={styles.danielGroup}>
            <View style={styles.daniel}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.profileIcon1, styles.profileIconLayout]}
                resizeMode="cover"
                source={require("../../assets/profile1.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.profileIcon1, styles.profileIconLayout]}
                resizeMode="cover"
                source={require("../../assets/inactive.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[
                  styles.danielChild16,
                  styles.danielChildPosition,
                  styles.danielLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/ellipse-122.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.dContainer, styles.parentLayout]}>
          <Text
            style={[styles.b, styles.bPosition, styles.aLayout, styles.aTypo]}
          >
            D
          </Text>
          <View style={styles.danielGroup}>
            <View style={styles.daniel}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.profileIcon1, styles.profileIconLayout]}
                resizeMode="cover"
                source={require("../../assets/profile1.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[styles.profileIcon1, styles.profileIconLayout]}
                resizeMode="cover"
                source={require("../../assets/inactive.png")}
              />
            </View>
            <View style={[styles.daniel, styles.mt1]}>
              <View style={styles.danielChild} />
              <Text
                style={[
                  styles.daniel1,
                  styles.daniel1Layout,
                  styles.daniel1Position,
                ]}
              >
                Daniel
              </Text>
              <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
              <Image
                style={styles.mtnMmLogoGenericMtnMobileIcon}
                resizeMode="cover"
                source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
              />
              <View style={styles.monkap}>
                <View style={[styles.monkapChild, styles.quickLinksLayout]} />
                <Text style={styles.monkap1}>MONKAP</Text>
                <View style={styles.tabArea} />
              </View>
              <Image
                style={[
                  styles.danielChild16,
                  styles.danielChildPosition,
                  styles.danielLayout,
                ]}
                resizeMode="cover"
                source={require("../../assets/ellipse-122.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.daniel36}>
          <View style={styles.danielChild} />
          <Text
            style={[
              styles.daniel1,
              styles.daniel1Layout,
              styles.daniel1Position,
            ]}
          >
            Daniel
          </Text>
          <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
          <Image
            style={styles.mtnMmLogoGenericMtnMobileIcon}
            resizeMode="cover"
            source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
          />
          <View style={styles.monkap}>
            <View style={[styles.monkapChild, styles.quickLinksLayout]} />
            <Text style={styles.monkap1}>MONKAP</Text>
            <View style={styles.tabArea} />
          </View>
          <Image
            style={[
              styles.danielChild16,
              styles.danielChildPosition,
              styles.danielLayout,
            ]}
            resizeMode="cover"
            source={require("../../assets/ellipse-122.png")}
          />
        </View>
        <View style={styles.daniel38}>
          <View style={styles.danielChild} />
          <Text
            style={[
              styles.daniel1,
              styles.daniel1Layout,
              styles.daniel1Position,
            ]}
          >
            Daniel
          </Text>
          <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
          <Image
            style={styles.mtnMmLogoGenericMtnMobileIcon}
            resizeMode="cover"
            source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-13.png")}
          />
          <View style={styles.monkap}>
            <View style={[styles.monkapChild, styles.quickLinksLayout]} />
            <Text style={styles.monkap1}>MONKAP</Text>
            <View style={styles.tabArea} />
          </View>
          <Image
            style={[
              styles.danielChild16,
              styles.danielChildPosition,
              styles.danielLayout,
            ]}
            resizeMode="cover"
            source={require("../../assets/ellipse-122.png")}
          />
        </View>
        <View style={styles.daniel40}>
          <View style={styles.danielChild} />
          <Text
            style={[
              styles.daniel1,
              styles.daniel1Layout,
              styles.daniel1Position,
            ]}
          >
            Daniel
          </Text>
          <Text style={[styles.text, styles.textTypo]}>675 84 75 29</Text>
          <Image
            style={styles.mtnMmLogoGenericMtnMobileIcon}
            resizeMode="cover"
            source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-119.png")}
          />
          <View style={styles.monkap}>
            <View style={[styles.monkapChild, styles.quickLinksLayout]} />
            <Text style={styles.monkap1}>MONKAP</Text>
            <View style={styles.tabArea} />
          </View>
          <Image
            style={[
              styles.danielChild16,
              styles.danielChildPosition,
              styles.danielLayout,
            ]}
            resizeMode="cover"
            source={require("../../assets/ellipse-122.png")}
          />
        </View>
        <View style={styles.headerPosition}>
          <View style={[styles.headerChild, styles.headerPosition]} />
          <View
            style={[
              styles.backArrow,
              styles.taAreaLayout,
              styles.taAreaLayout1,
            ]}
          >
            <Image
              style={[styles.backArrowChild, styles.image1Icon1Position]}
              resizeMode="cover"
              source={require("../../assets/line-16.png")}
            />
            <View
              style={[styles.taArea, styles.taAreaLayout, styles.taAreaLayout1]}
            />
          </View>
          <Image
            style={[styles.dotsIcon, styles.taAreaLayout]}
            resizeMode="cover"
            source={require("../../assets/3-dots.png")}
          />
          <Text style={styles.searchContacts}>Search Contacts</Text>
        </View>
        <View style={[styles.searchContactParent, styles.searchLayout]}>
          <View style={[styles.searchContact, styles.searchLayout]}>
            <View style={[styles.searchBar, styles.searchBarShadowBox]} />
            <Text
              style={[
                styles.enterNameOr,
                styles.textTypo,
                styles.daniel1Layout,
              ]}
            >
              Enter Name or Number
            </Text>
            <View style={styles.searchContactChild} />
          </View>
          <Image
            style={[styles.dataSearchSvgrepoCom1Icon, styles.daniel1Position]}
            resizeMode="cover"
            source={require("../../assets/datasearchsvgrepocom-1.png")}
          />
        </View>
        <View style={[styles.shortcutLink, styles.shortcutLayout]}>
          <View style={[styles.shortcutLinkChild, styles.shortcutLayout]} />
          <View style={[styles.orange, styles.orangeLayout1]}>
            <View
              style={[
                styles.orangeChild,
                styles.orangeChildShadowBox,
                styles.orangeChildClr,
              ]}
            />
            <Text style={[styles.orangeMoney, styles.monkap41Position]}>
              Orange Money
            </Text>
            <Image
              style={[styles.orangeItem, styles.orangeLayout]}
              resizeMode="cover"
              source={require("../../assets/arrow-22.png")}
            />
            <Image
              style={[styles.orangeInner, styles.orangeLayout]}
              resizeMode="cover"
              source={require("../../assets/arrow-32.png")}
            />
            <View style={[styles.tabArea20, styles.orangeLayout1]} />
          </View>
          <View style={[styles.monkap40, styles.orangeLayout1]}>
            <View style={styles.monkapChild18} />
            <Text
              style={[
                styles.monkap41,
                styles.monkap41Position,
                styles.monkap41Layout,
              ]}
            >
              <Text style={styles.m}>M</Text>
              <Text style={styles.o}>O</Text>
              <Text style={styles.m}>N</Text>
              <Text style={styles.o}>KAP</Text>
            </Text>
            <View style={[styles.tabArea20, styles.orangeLayout1]} />
          </View>
          <View style={[styles.linkBanks, styles.linkLayout]}>
            <View
              style={[styles.linkBanksChild, styles.orangeChildShadowBox]}
            />
            <Text
              style={[
                styles.linkAccounts,
                styles.linkTypo,
                styles.monkap41Layout,
                styles.aLayout,
              ]}
            >
              Link Accounts
            </Text>
            <View style={[styles.linkBanksItem, styles.linkLayout]} />
          </View>
          <Text style={[styles.quickLinks, styles.quickLinksLayout]}>
            Quick Links
          </Text>
        </View>
        <View style={styles.footerMonkap}>
          <View
            style={[
              styles.footerMonkapChild,
              styles.momoLayout,
              styles.searchBarShadowBox,
              styles.tabPosition,
              styles.danielParentPosition,
            ]}
          />
          <View style={[styles.home, styles.homeLayout]}>
            <Image
              style={[styles.c14HouseIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../assets/group-157.png")}
            />
            <Text style={[styles.home1, styles.linkTypo]}>Home</Text>
            <Pressable
              style={[
                styles.tabArea22,
                styles.tabPosition,
                styles.tabPosition1,
              ]}
              onPress={() => navigation.navigate("MoNkapHomeScreen2")}
            />
          </View>
          <View style={[styles.profile, styles.homeLayout]}>
            <Image
              style={[styles.profileChild, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../assets/group-157.png")}
            />
            <Text style={[styles.profile1, styles.linkTypo]}>Profile</Text>
            <Pressable
              style={[
                styles.tabArea23,
                styles.tabPosition,
                styles.tabPosition1,
              ]}
              onPress={openTabArea23}
            />
          </View>
          <View style={[styles.linkBank, styles.linkBankPosition]}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../assets/group.png")}
            />
            <Text style={[styles.linkBanks1, styles.linkTypo]}>Link Banks</Text>
            <Pressable
              style={[styles.imageedit341319179892, styles.bPosition]}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
              }
            />
          </View>
          <View style={[styles.momo, styles.momoLayout]}>
            <Image
              style={[
                styles.groupIcon1,
                styles.linkBankPosition,
                styles.groupIconLayout,
              ]}
              resizeMode="cover"
              source={require("../../assets/group1.png")}
            />
            <Text style={[styles.momo1, styles.linkTypo]}>MoMo</Text>
            <Pressable
              style={[styles.tabArea24, styles.tabLayout]}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", {
                  screen: "MTNSplashScreen",
                })
              }
            />
          </View>
          <View style={[styles.orange1, styles.danielChildPosition]}>
            <View
              style={[
                styles.orangeChild1,
                styles.orangeChildShadowBox,
                styles.orangeChildClr,
              ]}
            />
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../assets/group2.png")}
            />
            <Text style={[styles.omoney, styles.linkTypo]}>OMoney</Text>
            <Pressable
              style={[styles.tabArea25, styles.tabLayout]}
              onPress={() => navigation.navigate("OMoneySplashScreen")}
            />
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={tabArea23Visible}>
        <View style={styles.tabArea23Overlay}>
          <Pressable style={styles.tabArea23Bg} onPress={closeTabArea23} />
          <MyActivity onClose={closeTabArea23} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: Margin.m_2xs,
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  parentLayout: {
    height: 142,
    position: "absolute",
    width: 360,
  },
  aLayout: {
    lineHeight: 19,
    fontSize: FontSize.size_sm,
    color: Color.iOSKeyLabel,
  },
  aTypo: {
    letterSpacing: 1.6,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  tabPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  danielParentPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  daniel1Layout: {
    letterSpacing: 1.5,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  daniel1Position: {
    top: 6,
    position: "absolute",
  },
  textTypo: {
    height: 13,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  danielChildPosition: {
    top: 2,
    position: "absolute",
  },
  danielLayout: {
    borderRadius: Border.br_3xs,
    height: 35,
    width: 36,
    top: 2,
  },
  quickLinksLayout: {
    height: 16,
    position: "absolute",
  },
  bPosition: {
    left: 13,
    position: "absolute",
  },
  image1Icon1Position: {
    top: 11,
    position: "absolute",
  },
  profileIconLayout: {
    bottom: "7.5%",
    top: "5%",
    width: "9.72%",
    height: "87.5%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  headerPosition: {
    height: 54,
    left: 0,
    top: 0,
    position: "absolute",
    width: 360,
  },
  taAreaLayout: {
    height: 37,
    position: "absolute",
  },
  taAreaLayout1: {
    width: 52,
    height: 37,
  },
  searchLayout: {
    height: 38,
    width: 313,
    position: "absolute",
  },
  searchBarShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  shortcutLayout: {
    height: 84,
    width: 359,
    left: 0,
    position: "absolute",
  },
  orangeLayout1: {
    height: 47,
    width: 87,
    position: "absolute",
  },
  orangeChildShadowBox: {
    borderWidth: 1,
    borderColor: "#000",
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    position: "absolute",
  },
  orangeChildClr: {
    backgroundColor: Color.iOSKeyLabel,
    borderColor: "#000",
  },
  monkap41Position: {
    height: 21,
    top: 12,
    textTransform: "uppercase",
    textAlign: "center",
    position: "absolute",
  },
  orangeLayout: {
    height: 0,
    width: 19,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  monkap41Layout: {
    width: 87,
    fontWeight: "700",
  },
  linkLayout: {
    height: 51,
    width: 91,
    position: "absolute",
  },
  linkTypo: {
    letterSpacing: 0.5,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  momoLayout: {
    height: "100%",
    position: "absolute",
  },
  homeLayout: {
    width: "18.06%",
    position: "absolute",
  },
  tabPosition1: {
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.gainsboro_700,
    top: "0%",
    position: "absolute",
  },
  linkBankPosition: {
    top: "6.67%",
    position: "absolute",
  },
  tabLayout: {
    height: 42,
    width: 43,
    backgroundColor: Color.gainsboro_700,
    top: 0,
    position: "absolute",
  },
  images1: {
    right: 0,
    height: 800,
    backgroundColor: Color.whitesmoke_900,
    left: 0,
    top: 0,
    position: "absolute",
  },
  addContactChild: {
    top: 349,
    borderTopLeftRadius: 180,
    width: 361,
    height: 451,
    backgroundColor: Color.blue_100,
    left: -1,
    position: "absolute",
  },
  addContactItem: {
    top: 706,
    borderColor: "rgba(0, 0, 0, 0.16)",
    borderTopWidth: 1,
    width: 357,
    height: 1,
    borderStyle: "solid",
    left: -1,
    position: "absolute",
  },
  a: {
    height: "10.56%",
    width: "2.78%",
    left: "3.61%",
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
  },
  danielChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_3xs,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
    width: 360,
  },
  daniel1: {
    left: 57,
    width: 47,
    lineHeight: 17,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
  },
  text: {
    top: 23,
    left: 52,
    letterSpacing: 1.3,
    lineHeight: 14,
    color: Color.gray_1900,
    width: 78,
    fontSize: FontSize.size_3xs,
  },
  danielItem: {
    height: 35,
    width: 36,
    left: 9,
  },
  mtnMmLogoGenericMtnMobileIcon: {
    top: 7,
    right: 19,
    height: 20,
    overflow: "hidden",
    left: 306,
    position: "absolute",
    maxWidth: "100%",
  },
  monkapChild: {
    width: 33,
    borderTopLeftRadius: Border.br_xs,
    left: 1,
    top: 1,
    backgroundColor: Color.blue_100,
  },
  monkap1: {
    fontSize: FontSize.size_6xs,
    letterSpacing: 0.2,
    lineHeight: 9,
    height: 9,
    color: Color.iOSKeyBackgroundHighlight,
    textTransform: "uppercase",
    top: 5,
    width: 35,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
    borderTopLeftRadius: Border.br_xs,
    width: 35,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
  },
  monkap: {
    left: 260,
    width: 35,
    top: 10,
    height: 20,
    position: "absolute",
  },
  daniel: {
    height: 40,
    width: 360,
  },
  image1Icon: {
    width: 35,
    top: 10,
    height: 20,
    left: 306,
    position: "absolute",
  },
  ellipseIcon: {
    top: 1,
    width: 35,
    height: 35,
    left: 9,
    position: "absolute",
  },
  danielParent: {
    height: "85.92%",
    top: "14.08%",
    position: "absolute",
  },
  aParent: {
    top: 94,
    left: 2,
    height: 142,
  },
  b: {
    width: 10,
    height: 15,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
    top: 0,
  },
  danielChild3: {
    left: 6,
    top: 1,
    width: 35,
    height: 35,
    position: "absolute",
  },
  image1Icon1: {
    width: 35,
    height: 20,
    left: 306,
  },
  danielChild5: {
    left: 6,
    top: 5,
    width: 35,
    height: 35,
    position: "absolute",
  },
  danielChild7: {
    left: 6,
    width: 35,
    height: 35,
  },
  danielGroup: {
    top: 20,
    left: 0,
    position: "absolute",
  },
  bParent: {
    top: 236,
    left: -1,
  },
  profileIcon: {
    right: "88.61%",
    left: "1.67%",
  },
  cParent: {
    top: 378,
    left: -1,
  },
  profileIcon1: {
    right: "88.06%",
    left: "2.22%",
  },
  danielChild16: {
    left: 7,
    height: 35,
    width: 36,
  },
  dParent: {
    top: 523,
    left: 0,
  },
  dGroup: {
    top: 687,
    left: 0,
  },
  dContainer: {
    top: 851,
    left: 0,
  },
  daniel36: {
    top: 666,
    height: 40,
    left: -1,
    position: "absolute",
    width: 360,
  },
  daniel38: {
    top: 830,
    height: 40,
    left: -1,
    position: "absolute",
    width: 360,
  },
  daniel40: {
    top: 994,
    height: 40,
    left: -1,
    position: "absolute",
    width: 360,
  },
  headerChild: {
    backgroundColor: Color.blue_100,
  },
  backArrowChild: {
    width: 28,
    height: 15,
    left: 9,
  },
  taArea: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
  },
  backArrow: {
    left: 6,
    top: 10,
  },
  dotsIcon: {
    width: 54,
    top: 10,
    left: 306,
  },
  searchContacts: {
    top: 16,
    left: 126,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  searchBar: {
    shadowColor: "rgba(0, 0, 0, 0.31)",
    shadowRadius: 3,
    elevation: 3,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 38,
    width: 313,
    left: 0,
    top: 0,
    position: "absolute",
  },
  enterNameOr: {
    top: 13,
    color: Color.darkgray_200,
    width: 143,
    left: 18,
    lineHeight: 17,
  },
  searchContactChild: {
    borderColor: "rgba(0, 0, 0, 0.68)",
    borderRightWidth: 1,
    width: 1,
    height: 17,
    left: 17,
    top: 12,
    borderStyle: "solid",
    position: "absolute",
  },
  searchContact: {
    left: 0,
    top: 0,
  },
  dataSearchSvgrepoCom1Icon: {
    left: 280,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  searchContactParent: {
    top: 47,
    left: 18,
  },
  shortcutLinkChild: {
    backgroundColor: Color.whitesmoke_900,
    top: 0,
  },
  orangeChild: {
    width: 80,
    left: 5,
    top: 1,
    height: 40,
  },
  orangeMoney: {
    left: 40,
    letterSpacing: -0.1,
    lineHeight: 11,
    fontWeight: "600",
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
    width: 42,
    fontSize: FontSize.size_3xs,
  },
  orangeItem: {
    top: 15,
    left: 39,
  },
  orangeInner: {
    left: 8,
    top: 30,
  },
  tabArea20: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
  },
  orange: {
    left: 23,
    top: 20,
  },
  monkapChild18: {
    shadowRadius: 8,
    elevation: 8,
    width: 83,
    height: 39,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
    top: 2,
    left: 2,
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  m: {
    fontSize: FontSize.size_xl,
  },
  o: {
    fontSize: FontSize.size_xs,
  },
  monkap41: {
    letterSpacing: "4%",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBasic,
    left: 0,
  },
  monkap40: {
    left: 128,
    top: 20,
  },
  linkBanksChild: {
    width: 84,
    left: 5,
    top: 1,
    height: 40,
    backgroundColor: Color.whitesmoke_900,
  },
  linkAccounts: {
    top: 4,
    textTransform: "capitalize",
    height: 35,
    color: Color.iOSKeyLabel,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.5,
    width: 87,
    left: 2,
  },
  linkBanksItem: {
    backgroundColor: "rgba(233, 235, 236, 0)",
    elevation: 4,
    shadowRadius: 4,
    height: 51,
    width: 91,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  linkBanks: {
    left: 233,
    top: 20,
  },
  quickLinks: {
    left: 28,
    fontSize: FontSize.size_base,
    letterSpacing: 0.1,
    width: 68,
    lineHeight: 17,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    top: 0,
  },
  shortcutLink: {
    top: 716,
    display: "none",
  },
  footerMonkapChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 9,
    elevation: 9,
    top: "0%",
  },
  c14HouseIcon: {
    height: "60.33%",
    width: "49.23%",
    top: "6.38%",
    right: "30.77%",
    bottom: "33.29%",
    left: "20%",
    overflow: "hidden",
    position: "absolute",
  },
  home1: {
    left: 12,
    color: Color.blue_100,
    top: 30,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontWeight: "700",
  },
  tabArea22: {
    height: "95.74%",
    bottom: "4.26%",
    backgroundColor: Color.gainsboro_700,
  },
  home: {
    height: "104.44%",
    right: "77.5%",
    left: "4.44%",
    bottom: "-4.44%",
    top: "0%",
  },
  profileChild: {
    height: "64.58%",
    width: "47.69%",
    top: "12.5%",
    right: "24.62%",
    bottom: "22.92%",
    left: "27.69%",
    overflow: "hidden",
    position: "absolute",
  },
  profile1: {
    top: 34,
    height: 14,
    left: 17,
    width: 36,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    color: Color.iOSKeyLabel,
  },
  tabArea23Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea23Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea23: {
    height: "93.75%",
    bottom: "6.25%",
    backgroundColor: Color.gainsboro_700,
  },
  profile: {
    height: "106.67%",
    top: "-8.89%",
    right: "3.33%",
    bottom: "2.22%",
    left: "78.61%",
  },
  groupIcon: {
    height: "65.28%",
    width: "49.51%",
    right: "26.66%",
    bottom: "34.72%",
    left: "23.83%",
    overflow: "hidden",
    top: "0%",
    position: "absolute",
  },
  linkBanks1: {
    top: 27,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    color: Color.iOSKeyLabel,
    left: 0,
  },
  imageedit341319179892: {
    backgroundColor: Color.silver_500,
    width: 32,
    height: 32,
    top: 1,
  },
  linkBank: {
    height: "97.78%",
    width: "16.11%",
    right: "40.56%",
    left: "43.33%",
    bottom: "-4.44%",
  },
  groupIcon1: {
    height: "62.92%",
    width: "46.51%",
    right: "27.91%",
    bottom: "30.41%",
    left: "25.58%",
    overflow: "hidden",
  },
  momo1: {
    top: 28,
    left: 5,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    color: Color.iOSKeyLabel,
  },
  tabArea24: {
    left: 0,
  },
  momo: {
    width: "11.94%",
    top: "2.22%",
    right: "24.17%",
    bottom: "-2.22%",
    left: "63.89%",
  },
  orangeChild1: {
    top: -4,
    left: -9,
    width: 64,
    height: 36,
    display: "none",
  },
  groupIcon2: {
    height: "62.57%",
    width: "56.82%",
    top: "6.98%",
    right: "22.73%",
    bottom: "30.46%",
    left: "20.45%",
    overflow: "hidden",
    position: "absolute",
  },
  omoney: {
    top: 26,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    color: Color.iOSKeyLabel,
    left: 0,
  },
  tabArea25: {
    left: 1,
  },
  orange1: {
    left: 92,
    width: 44,
    height: 43,
  },
  footerMonkap: {
    top: 755,
    height: 45,
    left: 0,
    position: "absolute",
    width: 360,
  },
  addContact: {
    backgroundColor: Color.darkgray_500,
    height: 1005,
    width: 360,
  },
});

export default AddContact;
