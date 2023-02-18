import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const JanCalendar = ({ onClose }) => {
  return (
    <View style={[styles.janCalendar, styles.daysChildShadowBox]}>
      <View style={[styles.dates, styles.daysPosition]}>
        <View style={[styles.date, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.date1, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>8</Text>
        </View>
        <View style={[styles.date2, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>15</Text>
        </View>
        <View style={[styles.date3, styles.datePosition2]}>
          <Text style={[styles.text, styles.textTypo]}>22</Text>
        </View>
        <View style={[styles.date4, styles.datePosition1]}>
          <Text style={[styles.text, styles.textTypo]}>29</Text>
        </View>
        <View style={[styles.date5, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>2</Text>
        </View>
        <View style={[styles.date6, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>9</Text>
        </View>
        <View style={[styles.date7, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>16</Text>
        </View>
        <View style={[styles.date8, styles.datePosition2]}>
          <Text style={[styles.text, styles.textTypo]}>23</Text>
        </View>
        <View style={[styles.date9, styles.datePosition1]}>
          <Text style={[styles.text, styles.textTypo]}>30</Text>
        </View>
        <View style={[styles.date10, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.date11, styles.datePosition]}>
          <Text style={[styles.text, styles.textTypo]}>10</Text>
        </View>
        <View style={[styles.date12, styles.datePosition]}>
          <Text style={[styles.text, styles.textTypo]}>17</Text>
        </View>
        <View style={[styles.date13, styles.datePosition2]}>
          <Text style={[styles.text, styles.textTypo]}>24</Text>
        </View>
        <View style={[styles.date14, styles.datePosition1]}>
          <Text style={[styles.text, styles.textTypo]}>31</Text>
        </View>
        <View style={[styles.date15, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>4</Text>
        </View>
        <View style={[styles.date16, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>11</Text>
        </View>
        <View style={[styles.date17, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>18</Text>
        </View>
        <View style={[styles.date18, styles.datePosition2]}>
          <Text style={[styles.text, styles.textTypo]}>25</Text>
        </View>
        <View style={[styles.date19, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>5</Text>
        </View>
        <View style={[styles.date20, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>12</Text>
        </View>
        <View style={[styles.date21, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>19</Text>
        </View>
        <View style={[styles.date22, styles.datePosition2]}>
          <Text style={[styles.text, styles.textTypo]}>26</Text>
        </View>
        <View style={[styles.date23, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>6</Text>
        </View>
        <View style={[styles.date24, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>13</Text>
        </View>
        <View style={[styles.date25, styles.dateFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>20</Text>
        </View>
        <View style={[styles.date26, styles.datePosition2]}>
          <Text style={[styles.text, styles.textTypo]}>27</Text>
        </View>
        <View style={[styles.date27, styles.dateFlexBox]}>
          <Text style={[styles.text27, styles.textTypo]}>7</Text>
        </View>
        <View style={[styles.date28, styles.dateFlexBox]}>
          <Text style={[styles.text27, styles.textTypo]}>14</Text>
        </View>
        <View style={[styles.date29, styles.dateFlexBox]}>
          <Text style={[styles.text27, styles.textTypo]}>21</Text>
        </View>
        <View style={[styles.date30, styles.datePosition2]}>
          <Text style={[styles.text27, styles.textTypo]}>28</Text>
        </View>
        <View style={[styles.date31, styles.datePosition1]}>
          <Text style={[styles.text31, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.date32, styles.datePosition1]}>
          <Text style={[styles.text31, styles.textTypo]}>2</Text>
        </View>
        <View style={[styles.date33, styles.datePosition1]}>
          <Text style={[styles.text31, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.date34, styles.datePosition1]}>
          <Text style={[styles.text34, styles.textTypo]}>4</Text>
        </View>
      </View>
      <View style={[styles.days, styles.daysLayout, styles.daysPosition]}>
        <View style={[styles.day, styles.dayLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Mon</Text>
        </View>
        <View style={[styles.day1, styles.dayLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Tue</Text>
        </View>
        <View style={[styles.day2, styles.dayLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Wed</Text>
        </View>
        <View style={[styles.day3, styles.dayLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Thu</Text>
        </View>
        <View style={[styles.day4, styles.dayLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Fri</Text>
        </View>
        <View style={[styles.day5, styles.dayLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Sat</Text>
        </View>
        <View style={[styles.day6, styles.dayLayout]}>
          <Text style={[styles.text27, styles.textTypo]}>Sun</Text>
        </View>
        <View
          style={[
            styles.daysChild,
            styles.daysLayout,
            styles.daysChildShadowBox,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  daysChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  daysPosition: {
    left: "50%",
    top: "50%",
  },
  dateFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_xl,
    height: 35,
    width: 35,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  datePosition2: {
    top: 117,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_xl,
    height: 35,
    width: 35,
    position: "absolute",
  },
  datePosition1: {
    top: 156,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_xl,
    height: 35,
    width: 35,
    position: "absolute",
  },
  datePosition: {
    left: 78,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_xl,
    height: 35,
    width: 35,
    position: "absolute",
  },
  daysLayout: {
    height: 39,
    width: 274,
    position: "absolute",
  },
  dayLayout: {
    width: 39,
    height: 39,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_xl,
    top: 0,
    position: "absolute",
  },
  text: {
    color: Color.iOSKeyLabel,
  },
  date: {
    left: 0,
    top: 0,
  },
  date1: {
    top: 39,
    left: 0,
  },
  date2: {
    top: 78,
    left: 0,
  },
  date3: {
    left: 0,
  },
  date4: {
    left: 0,
  },
  date5: {
    left: 39,
    top: 0,
  },
  date6: {
    left: 39,
    top: 39,
  },
  date7: {
    left: 39,
    top: 78,
  },
  date8: {
    left: 39,
  },
  date9: {
    left: 39,
  },
  date10: {
    left: 79,
    top: 0,
  },
  date11: {
    top: 39,
  },
  date12: {
    top: 78,
  },
  date13: {
    left: 79,
  },
  date14: {
    left: 79,
  },
  date15: {
    left: 118,
    top: 0,
  },
  date16: {
    left: 118,
    top: 39,
  },
  date17: {
    left: 118,
    top: 78,
  },
  date18: {
    left: 118,
  },
  date19: {
    left: 157,
    top: 0,
  },
  date20: {
    left: 157,
    top: 39,
  },
  date21: {
    left: 157,
    top: 78,
  },
  date22: {
    left: 157,
  },
  date23: {
    left: 196,
    top: 0,
  },
  date24: {
    left: 196,
    top: 39,
  },
  date25: {
    left: 196,
    top: 78,
  },
  date26: {
    left: 196,
  },
  text27: {
    color: Color.peru_100,
  },
  date27: {
    left: 235,
    top: 0,
  },
  date28: {
    left: 235,
    top: 39,
  },
  date29: {
    left: 235,
    top: 78,
  },
  date30: {
    left: 235,
  },
  text31: {
    color: Color.gray_2600,
  },
  date31: {
    left: 118,
  },
  date32: {
    left: 157,
  },
  date33: {
    left: 196,
  },
  text34: {
    color: "rgba(228, 140, 59, 0.55)",
  },
  date34: {
    left: 235,
  },
  dates: {
    marginTop: -92,
    marginLeft: -148.5,
    width: 287,
    height: 195,
    position: "absolute",
    top: "50%",
  },
  day: {
    left: 0,
  },
  day1: {
    left: 39,
  },
  day2: {
    left: 79,
  },
  day3: {
    left: 118,
  },
  day4: {
    left: 157,
  },
  day5: {
    left: 196,
  },
  day6: {
    left: 235,
  },
  daysChild: {
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 10,
    elevation: 10,
    display: "none",
    left: 0,
    top: 0,
  },
  days: {
    marginTop: -117,
    marginLeft: -136.5,
    borderTopRightRadius: Border.br_lg,
    borderBottomRightRadius: Border.br_lg,
  },
  janCalendar: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    width: 341,
    height: 234,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default JanCalendar;
