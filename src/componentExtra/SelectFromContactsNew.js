import * as React from "react";
import { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../components/MyActivity";
import { Margin, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SelectFromContactsNew = ({ onClose }) => {
  const [tabArea20Visible, setTabArea20Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea20 = useCallback(() => {
    setTabArea20Visible(true);
  }, []);

  const closeTabArea20 = useCallback(() => {
    setTabArea20Visible(false);
  }, []);
  return (
    <>
      <View style={[styles.selectFromContactsNew, styles.groupIconLayout]}>
        <View style={styles.images1} />
        <View style={[styles.tabArea, styles.tabLayout]} />
        <View style={[styles.tabArea1, styles.tabLayout]} />
        <View style={[styles.tabAreae, styles.tabLayout]} />
        <View style={[styles.searchContactParent, styles.searchLayout]}>
          <View style={[styles.searchContact, styles.searchLayout]}>
            <View
              style={[
                styles.searchBar,
                styles.searchBarShadowBox,
                styles.danielPosition2,
              ]}
            />
            <Text style={styles.enterNameOr}>Enter Name or Number</Text>
            <View style={styles.searchContactChild} />
          </View>
          <Image
            style={[styles.dataSearchSvgrepoCom1Icon, styles.orangePosition]}
            resizeMode="cover"
            source={require("../assets/datasearchsvgrepocom-1.png")}
          />
        </View>
        <View style={[styles.danielParent, styles.danielPosition1]}>
          <View style={styles.daniel}>
            <View
              style={[
                styles.danielChild,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text style={[styles.daniel1, styles.danielTypo]}>Daniel</Text>
            <Text style={[styles.text, styles.textLayout]}>675 84 75 29</Text>
            <Image
              style={[styles.danielItem, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-169.png")}
            />
            <View style={[styles.monkap, styles.monkapLayout]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon, styles.monkapLayout]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Text style={[styles.a, styles.aPosition, styles.aTypo]}>A</Text>
          </View>
          <View style={[styles.danielLayout, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-15.png")}
            />
          </View>
          <View style={[styles.danielLayout, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Image
              style={[styles.danielChild1, styles.danielPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-1547.png")}
            />
          </View>
        </View>
        <View style={[styles.danielGroup, styles.danielPosition1]}>
          <View style={styles.daniel}>
            <View
              style={[
                styles.danielChild,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text style={[styles.daniel1, styles.danielTypo]}>Daniel</Text>
            <Text style={[styles.text, styles.textLayout]}>675 84 75 29</Text>
            <Image
              style={[styles.danielItem, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-169.png")}
            />
            <View style={[styles.monkap, styles.monkapLayout]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon, styles.monkapLayout]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Text style={[styles.a, styles.aPosition, styles.aTypo]}>B</Text>
          </View>
          <View style={[styles.danielLayout, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-15.png")}
            />
          </View>
          <View style={[styles.daniel10, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Image
              style={[styles.danielChild1, styles.danielPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-1547.png")}
            />
            <View style={styles.danielContainer}>
              <View style={styles.daniel}>
                <View
                  style={[
                    styles.danielChild,
                    styles.danielLayout,
                    styles.danielPosition2,
                  ]}
                />
                <Text style={[styles.daniel1, styles.danielTypo]}>Daniel</Text>
                <Text style={[styles.text, styles.textLayout]}>
                  675 84 75 29
                </Text>
                <Image
                  style={[styles.danielItem, styles.footerOmLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-169.png")}
                />
                <View style={[styles.monkap, styles.monkapLayout]}>
                  <View style={[styles.monkapChild, styles.tabArea2Position]} />
                  <Text
                    style={[
                      styles.monkap1,
                      styles.omoneyClr,
                      styles.danielPosition,
                    ]}
                  >
                    MONKAP
                  </Text>
                  <View
                    style={[
                      styles.tabArea2,
                      styles.tabArea2Position,
                      styles.monkapLayout,
                    ]}
                  />
                </View>
                <Image
                  style={[styles.image1Icon, styles.monkapLayout]}
                  resizeMode="cover"
                  source={require("../assets/image-1.png")}
                />
                <Text style={[styles.a, styles.aPosition, styles.aTypo]}>
                  C
                </Text>
              </View>
              <View style={[styles.danielLayout, styles.mt2]}>
                <View
                  style={[
                    styles.danielInner,
                    styles.danielLayout,
                    styles.danielPosition2,
                  ]}
                />
                <Text
                  style={[
                    styles.daniel3,
                    styles.danielPosition,
                    styles.danielTypo,
                  ]}
                >
                  Daniel
                </Text>
                <Text style={[styles.text1, styles.textLayout]}>
                  675 84 75 29
                </Text>
                <View style={[styles.monkap2, styles.monkap2Position]}>
                  <View style={[styles.monkapChild, styles.tabArea2Position]} />
                  <Text
                    style={[
                      styles.monkap1,
                      styles.omoneyClr,
                      styles.danielPosition,
                    ]}
                  >
                    MONKAP
                  </Text>
                  <View
                    style={[
                      styles.tabArea2,
                      styles.tabArea2Position,
                      styles.monkapLayout,
                    ]}
                  />
                </View>
                <Image
                  style={[styles.image1Icon1, styles.monkap2Position]}
                  resizeMode="cover"
                  source={require("../assets/image-1.png")}
                />
                <Image
                  style={[styles.ellipseIcon, styles.footerOmLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-15.png")}
                />
              </View>
              <View style={[styles.danielLayout, styles.mt2]}>
                <View
                  style={[
                    styles.danielInner,
                    styles.danielLayout,
                    styles.danielPosition2,
                  ]}
                />
                <Text
                  style={[
                    styles.daniel3,
                    styles.danielPosition,
                    styles.danielTypo,
                  ]}
                >
                  Daniel
                </Text>
                <Text style={[styles.text1, styles.textLayout]}>
                  675 84 75 29
                </Text>
                <View style={[styles.monkap2, styles.monkap2Position]}>
                  <View style={[styles.monkapChild, styles.tabArea2Position]} />
                  <Text
                    style={[
                      styles.monkap1,
                      styles.omoneyClr,
                      styles.danielPosition,
                    ]}
                  >
                    MONKAP
                  </Text>
                  <View
                    style={[
                      styles.tabArea2,
                      styles.tabArea2Position,
                      styles.monkapLayout,
                    ]}
                  />
                </View>
                <Image
                  style={[styles.image1Icon1, styles.monkap2Position]}
                  resizeMode="cover"
                  source={require("../assets/image-1.png")}
                />
                <Image
                  style={[styles.danielChild1, styles.danielPosition]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1547.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.danielPosition1]}>
          <View style={styles.daniel}>
            <View
              style={[
                styles.danielChild,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text style={[styles.daniel1, styles.danielTypo]}>Daniel</Text>
            <Text style={[styles.text, styles.textLayout]}>675 84 75 29</Text>
            <Image
              style={[styles.danielItem, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-169.png")}
            />
            <View style={[styles.monkap, styles.monkapLayout]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon, styles.monkapLayout]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Text style={[styles.a, styles.aPosition, styles.aTypo]}>D</Text>
          </View>
          <View style={[styles.danielLayout, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-15.png")}
            />
          </View>
          <View style={[styles.danielLayout, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-15.png")}
            />
          </View>
          <View style={[styles.danielLayout, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-15.png")}
            />
          </View>
          <View style={[styles.danielLayout, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1555.png")}
            />
          </View>
          <View style={[styles.danielLayout, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-116.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1511.png")}
            />
          </View>
          <View style={[styles.danielLayout, styles.mt2]}>
            <View
              style={[
                styles.danielInner,
                styles.danielLayout,
                styles.danielPosition2,
              ]}
            />
            <Text
              style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
            >
              Daniel
            </Text>
            <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
            <View style={[styles.monkap2, styles.monkap2Position]}>
              <View style={[styles.monkapChild, styles.tabArea2Position]} />
              <Text
                style={[
                  styles.monkap1,
                  styles.omoneyClr,
                  styles.danielPosition,
                ]}
              >
                MONKAP
              </Text>
              <View
                style={[
                  styles.tabArea2,
                  styles.tabArea2Position,
                  styles.monkapLayout,
                ]}
              />
            </View>
            <Image
              style={[styles.image1Icon1, styles.monkap2Position]}
              resizeMode="cover"
              source={require("../assets/image-116.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.footerOmLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1511.png")}
            />
          </View>
        </View>
        <View
          style={[styles.daniel32, styles.danielLayout, styles.danielPosition1]}
        >
          <View
            style={[
              styles.danielInner,
              styles.danielLayout,
              styles.danielPosition2,
            ]}
          />
          <Text
            style={[styles.daniel3, styles.danielPosition, styles.danielTypo]}
          >
            Daniel
          </Text>
          <Text style={[styles.text1, styles.textLayout]}>675 84 75 29</Text>
          <View style={[styles.monkap2, styles.monkap2Position]}>
            <View style={[styles.monkapChild, styles.tabArea2Position]} />
            <Text
              style={[styles.monkap1, styles.omoneyClr, styles.danielPosition]}
            >
              MONKAP
            </Text>
            <View
              style={[
                styles.tabArea2,
                styles.tabArea2Position,
                styles.monkapLayout,
              ]}
            />
          </View>
          <Image
            style={[styles.image1Icon1, styles.monkap2Position]}
            resizeMode="cover"
            source={require("../assets/image-116.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.footerOmLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1511.png")}
          />
        </View>
        <View style={[styles.header, styles.headerChildLayout]}>
          <View style={[styles.headerChild, styles.headerChildLayout]} />
          <View
            style={[
              styles.backArrow,
              styles.taAreaLayout,
              styles.dotsIconPosition,
            ]}
          >
            <Image
              style={[styles.backArrowChild, styles.backArrowChildLayout]}
              resizeMode="cover"
              source={require("../assets/line-161.png")}
            />
            <View style={[styles.taArea, styles.taAreaLayout]} />
          </View>
          <Image
            style={[
              styles.dotsIcon,
              styles.taAreaLayout,
              styles.dotsIconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/3-dots1.png")}
          />
          <Text style={[styles.searchContacts, styles.aTypo]}>
            Search Contacts
          </Text>
        </View>
        <View style={[styles.footerOm, styles.footerOmLayout]}>
          <View
            style={[
              styles.footerOmChild,
              styles.tabArea19Position,
              styles.searchBarShadowBox,
            ]}
          />
          <View style={[styles.home, styles.homePosition]}>
            <Image
              style={[styles.c14HouseIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/c14-house30.png")}
            />
            <Pressable
              style={[styles.tabArea19, styles.tabArea19Position]}
              onPress={() => navigation.navigate("MoNkapHomeScreen2")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          </View>
          <View style={[styles.profile, styles.homePosition]}>
            <Image
              style={[styles.profileChild, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/group-15723.png")}
            />
            <Text style={[styles.profile1, styles.home1Typo]}>Profile</Text>
            <Pressable style={styles.tabArea20} onPress={openTabArea20} />
          </View>
          <View style={[styles.orange, styles.orangePosition]}>
            <View style={[styles.orangeChild, styles.childPosition]} />
            <Image
              style={[
                styles.groupIcon,
                styles.aPosition,
                styles.groupIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/group113.png")}
            />
            <Text style={[styles.omoney, styles.home1Typo, styles.omoneyClr]}>
              OMoney
            </Text>
          </View>
          <View style={styles.linkBanks}>
            <Image
              style={[
                styles.imageedit341319179891Icon,
                styles.backArrowChildLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/imageedit-3-4131917989-1.png")}
            />
            <Text style={[styles.profile1, styles.home1Typo]}>Link Banks</Text>
            <Pressable
              style={[styles.imageedit341319179892, styles.footerOmLayout]}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
              }
            />
          </View>
          <View style={styles.momo}>
            <Image
              style={[styles.groupIcon1, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/group8.png")}
            />
            <Text style={[styles.momo1, styles.home1Typo]}>MoMo</Text>
            <Pressable
              style={styles.tabArea21}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", {
                  screen: "MTNSplashScreen",
                })
              }
            />
          </View>
        </View>
        <View
          style={[
            styles.selectFromContactsNewChild,
            styles.childPosition,
            styles.headerChildLayout,
          ]}
        />
      </View>

      <Modal animationType="fade" transparent visible={tabArea20Visible}>
        <View style={styles.tabArea20Overlay}>
          <Pressable style={styles.tabArea20Bg} onPress={closeTabArea20} />
          <MyActivity onClose={closeTabArea20} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: Margin.m_xs,
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  tabLayout: {
    height: 39,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
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
  },
  danielPosition2: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: 0,
    position: "absolute",
  },
  orangePosition: {
    top: 6,
    position: "absolute",
  },
  danielPosition1: {
    left: -1,
    position: "absolute",
  },
  danielLayout: {
    height: 50,
    width: 360,
  },
  danielTypo: {
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    left: 69,
    width: 52,
    color: Color.iOSKeyLabel,
    fontWeight: "700",
    height: 17,
    fontFamily: FontFamily.gentiumBasic,
  },
  textLayout: {
    width: 96,
    color: Color.gray_1900,
    height: 16,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    left: 69,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  footerOmLayout: {
    height: 45,
    position: "absolute",
  },
  monkapLayout: {
    height: 20,
    width: 35,
  },
  tabArea2Position: {
    borderTopLeftRadius: Border.br_xs,
    position: "absolute",
  },
  omoneyClr: {
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "700",
    left: 0,
  },
  danielPosition: {
    top: 5,
    position: "absolute",
  },
  aPosition: {
    top: "0%",
    position: "absolute",
  },
  aTypo: {
    fontWeight: "700",
    textAlign: "center",
  },
  monkap2Position: {
    top: 14,
    height: 20,
    width: 35,
    position: "absolute",
  },
  headerChildLayout: {
    height: 54,
    left: 0,
    width: 360,
  },
  taAreaLayout: {
    height: 37,
    position: "absolute",
  },
  dotsIconPosition: {
    top: 10,
    height: 37,
  },
  backArrowChildLayout: {
    width: 28,
    position: "absolute",
  },
  tabArea19Position: {
    left: "0%",
    width: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  homePosition: {
    top: "-6.67%",
    position: "absolute",
  },
  iconPosition: {
    right: "27.91%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  home1Typo: {
    letterSpacing: 0.5,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  childPosition: {
    display: "none",
    position: "absolute",
  },
  images1: {
    right: 0,
    backgroundColor: Color.whitesmoke_900,
    height: 1079,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tabArea: {
    top: 574,
    right: 29,
    left: 32,
  },
  tabArea1: {
    top: 585,
    right: 218,
    left: 33,
  },
  tabAreae: {
    top: 583,
    right: 26,
    left: 225,
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
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    height: 38,
    width: 313,
    top: 0,
  },
  enterNameOr: {
    top: 13,
    letterSpacing: 1.5,
    color: Color.darkgray_200,
    width: 143,
    height: 13,
    textAlign: "center",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.gentiumBasic,
    left: 18,
    position: "absolute",
  },
  searchContactChild: {
    left: 42,
    borderColor: "rgba(0, 0, 0, 0.68)",
    borderRightWidth: 1,
    width: 1,
    height: 17,
    borderStyle: "solid",
    top: 11,
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
    top: 63,
    left: 18,
    width: 313,
  },
  danielChild: {
    top: 18,
    borderRadius: Border.br_3xs,
  },
  daniel1: {
    width: 52,
    top: 23,
    position: "absolute",
  },
  text: {
    top: 43,
    height: 16,
  },
  danielItem: {
    top: 20,
    left: 7,
    width: 45,
  },
  monkapChild: {
    left: 1,
    backgroundColor: Color.blue_100,
    width: 33,
    top: 1,
    height: 16,
  },
  monkap1: {
    fontSize: FontSize.size_6xs,
    letterSpacing: 0.2,
    lineHeight: 9,
    textTransform: "uppercase",
    height: 9,
    width: 35,
    color: Color.iOSKeyBackgroundHighlight,
    top: 5,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
  },
  tabArea2: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
  },
  monkap: {
    left: 271,
    top: 32,
    position: "absolute",
  },
  image1Icon: {
    left: 317,
    top: 32,
    position: "absolute",
  },
  a: {
    height: "22.06%",
    width: "2.78%",
    left: "1.94%",
    fontSize: FontSize.size_sm,
    letterSpacing: 1.6,
    lineHeight: 19,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    top: "0%",
    fontWeight: "700",
  },
  daniel: {
    height: 68,
    width: 360,
  },
  danielInner: {
    borderRadius: Border.br_3xs,
    top: 0,
  },
  daniel3: {
    width: 52,
  },
  text1: {
    top: 25,
    height: 16,
  },
  monkap2: {
    left: 271,
  },
  image1Icon1: {
    left: 317,
  },
  ellipseIcon: {
    left: 6,
    top: 1,
    width: 45,
  },
  danielChild1: {
    height: 44,
    left: 6,
    width: 45,
    borderRadius: Border.br_3xs,
  },
  danielParent: {
    top: 100,
  },
  danielContainer: {
    top: 49,
    left: 0,
    position: "absolute",
  },
  daniel10: {
    height: 221,
    width: 360,
  },
  danielGroup: {
    top: 272,
  },
  frameView: {
    top: 615,
  },
  daniel32: {
    top: 997,
  },
  headerChild: {
    backgroundColor: Color.orangeColor,
    top: 0,
    position: "absolute",
  },
  backArrowChild: {
    height: 15,
    left: 9,
    top: 11,
    width: 28,
  },
  taArea: {
    width: 52,
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
  },
  backArrow: {
    left: 6,
    width: 52,
  },
  dotsIcon: {
    left: 306,
    width: 54,
  },
  searchContacts: {
    top: 16,
    left: 126,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.gray_1800,
    position: "absolute",
  },
  header: {
    top: 0,
    position: "absolute",
  },
  footerOmChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 13,
    elevation: 13,
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.orangeColor,
  },
  c14HouseIcon: {
    height: "46.15%",
    width: "58.14%",
    top: "22.92%",
    bottom: "30.93%",
    left: "13.95%",
  },
  tabArea19: {
    height: "93.75%",
    bottom: "6.25%",
    backgroundColor: Color.gainsboro_700,
  },
  home1: {
    top: 31,
    left: 3,
    color: Color.iOSKeyLabel,
  },
  home: {
    height: "106.67%",
    right: "80.28%",
    left: "7.78%",
    width: "11.94%",
    bottom: "0%",
  },
  profileChild: {
    height: "51.02%",
    width: "60.98%",
    top: "20.41%",
    right: "26.83%",
    bottom: "28.57%",
    left: "12.2%",
    overflow: "hidden",
    position: "absolute",
  },
  profile1: {
    top: 32,
    color: Color.iOSKeyLabel,
    left: 0,
  },
  tabArea20Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea20Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea20: {
    height: "91.84%",
    width: "97.56%",
    bottom: "8.16%",
    left: "2.44%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  profile: {
    height: "108.89%",
    width: "11.39%",
    right: "6.67%",
    bottom: "-2.22%",
    left: "81.94%",
  },
  orangeChild: {
    top: -7,
    left: -8,
    backgroundColor: Color.iOSKeyLabel,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowRadius: 4,
    elevation: 4,
    borderColor: "#000",
    borderWidth: 1,
    width: 64,
    height: 36,
    borderStyle: "solid",
    display: "none",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
  },
  groupIcon: {
    height: "67.26%",
    width: "54.35%",
    right: "23.91%",
    bottom: "32.74%",
    left: "21.74%",
    overflow: "hidden",
  },
  omoney: {
    top: 23,
  },
  orange: {
    left: 91,
    width: 46,
    height: 40,
  },
  imageedit341319179891Icon: {
    top: 8,
    left: 14,
    height: 28,
  },
  imageedit341319179892: {
    backgroundColor: Color.silver_500,
    width: 39,
    left: 9,
    top: 0,
  },
  linkBanks: {
    top: -3,
    left: 154,
    width: 58,
    height: 49,
    position: "absolute",
  },
  groupIcon1: {
    height: "62.92%",
    width: "46.51%",
    top: "6.67%",
    bottom: "30.41%",
    left: "25.58%",
  },
  momo1: {
    top: 28,
    left: 5,
    color: Color.iOSKeyLabel,
  },
  tabArea21: {
    width: 43,
    height: 42,
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
    position: "absolute",
  },
  momo: {
    top: "4.44%",
    right: "24.17%",
    bottom: "-4.44%",
    left: "63.89%",
    width: "11.94%",
    height: "100%",
    position: "absolute",
  },
  footerOm: {
    top: 755,
    left: 0,
    width: 360,
  },
  selectFromContactsNewChild: {
    top: 746,
    backgroundColor: Color.gold_100,
  },
  selectFromContactsNew: {
    backgroundColor: Color.darkgray_500,
    height: 880,
    width: 360,
  },
});

export default SelectFromContactsNew;
