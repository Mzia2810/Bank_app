import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize, Margin } from "./GlobalStyle";

// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import SplashScreen from "./src/screens/slpashScreen/SplashScreen";
import BottomTabScreen from "./src/navigations/bottomTab/BottomTabScreen";
import CustomStatusBar from "./src/components/CustomStatusBar";
import { LogBox } from "react-native";
import NoCard9 from "./src/screens/nocard9/NoCard9";
import NoCard8 from "./src/screens/nocard8/NoCard8";
import NoCard from "./src/screens/nocard/NoCard";
import NoCard6 from "./src/screens/nocard6/NoCard6";
import NoCard4 from "./src/screens/nocard4/NoCard4";
import NoCard3 from "./src/screens/nocard3/NoCard3";
import NoCard5 from "./src/screens/nocard5/NoCard5";
import NoCard1 from "./src/screens/nocard1/NoCard1";
import NoCard2 from "./src/screens/nocard2/NoCard2";
import NoCard7 from "./src/screens/nocard7/NoCard7";
import HomeScreen from "./src/screens/dashboard/HomeScreen";
import MoNkapHomeScreen from "./src/screens/monNkapHomeScreen/MonNkapHomeScreen";
import TransferMoney from "./src/screens/transferMoney/TransferMoney";
import SelectFromContactsNew from "./src/screens/searchContact/SearchContact";
import Deposit from "./src/screens/deposit/Deposit";
import Pay1 from "./src/screens/pay1/Pay1";

//stack
const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <>
      <StatusBar backgroundColor={Color.blue_100} barStyle="light-content" />
      {/* <CustomStatusBar/> */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            options={{ title: "Splash", headerShown: false }}
            component={SplashScreen}
          />
          <Stack.Screen
            name="BottomTabScreen"
            options={{ headerShown: false }}
            component={BottomTabScreen}
          />
          {/* <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageNjangi"
              component={ManageNjangi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewScheduleKupexan83"
              component={ViewScheduleKupexan83}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewScheduleKupexan831"
              component={ViewScheduleKupexan831}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NjangiDaily2"
              component={NjangiDaily2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewScheduleVeterans"
              component={ViewScheduleVeterans}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewScheduleVeterans1"
              component={ViewScheduleVeterans1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NjangiMainDaily1"
              component={NjangiMainDaily1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewScheduleMabingo"
              component={ViewScheduleMabingo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewScheduleMabingo1"
              component={ViewScheduleMabingo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NjangiWeekly"
              component={NjangiWeekly}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NjangiMainDaily3"
              component={NjangiMainDaily3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NjangiMainDaily4"
              component={NjangiMainDaily4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddTargetSavings"
              component={AddTargetSavings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NjangiMainDaily2"
              component={NjangiMainDaily2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TargetSavingsFirst"
              component={TargetSavingsFirst}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TargetSavingsMultiple"
              component={TargetSavingsMultiple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TargetSavingsPaymentMethods"
              component={TargetSavingsPaymentMethods}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaveDaily"
              component={SaveDaily}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaveWeekly"
              component={SaveWeekly}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaveMonthly"
              component={SaveMonthly}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaveIrregularly"
              component={SaveIrregularly}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SavingFrequency"
              component={SavingFrequency}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddTargetSavings1"
              component={AddTargetSavings1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StartTargetSavings"
              component={StartTargetSavings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferOthers"
              component={TransferOthers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferMomo"
              component={TransferMomo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferOmoney"
              component={TransferOmoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferMonkapUser"
              component={TransferMonkapUser}
              options={{ headerShown: false }}
            />
           
            <Stack.Screen
              name="OMoneyOnMonkapProfile"
              component={OMoneyOnMonkapProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMoneyValidationSuccessful"
              component={OMoneyValidationSuccessful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMoneyValidation"
              component={OMoneyValidation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMoneyRegistration"
              component={OMoneyRegistration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMCashoutMoneyFrequent"
              component={OMCashoutMoneyFrequent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendCashoutRequest"
              component={SendCashoutRequest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMCashoutMoneyScan"
              component={OMCashoutMoneyScan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMoneyRequestMoneyRecent"
              component={OMoneyRequestMoneyRecent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMoneyRequestMoneyFrequent"
              component={OMoneyRequestMoneyFrequent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferFrequent"
              component={TransferFrequent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferCaution"
              component={TransferCaution}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferRecent"
              component={TransferRecent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMDepositRequest"
              component={OMDepositRequest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMDepositMoneyFrequent"
              component={OMDepositMoneyFrequent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMDepositMoneyScan"
              component={OMDepositMoneyScan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMDepositMoneyRecent"
              component={OMDepositMoneyRecent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMoneyOnMonkapHomeSeeBalance"
              component={OMoneyOnMonkapHomeSeeBala}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMCashoutMoneyRecent"
              component={OMCashoutMoneyRecent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMMTNRechargeSms"
              component={OMMTNRechargeSms}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMMTNRechargeData"
              component={OMMTNRechargeData}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMRechargeVoice"
              component={OMRechargeVoice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMPay"
              component={OMPay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMPay1"
              component={OMPay1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MomoOnMonkapProfile"
              component={MomoOnMonkapProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MonoValidationSuccessful"
              component={MonoValidationSuccessful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MomoValidation"
              component={MomoValidation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MomoRegistration"
              component={MomoRegistration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CashoutMoneyFrequent"
              component={CashoutMoneyFrequent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestMoneyFrequent"
              component={RequestMoneyFrequent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestMoneyRecent"
              component={RequestMoneyRecent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferFrequent1"
              component={TransferFrequent1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferCaution1"
              component={TransferCaution1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferRecent1"
              component={TransferRecent1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DepositMoneyFrequent"
              component={DepositMoneyFrequent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendCashoutRequest1"
              component={SendCashoutRequest1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CashoutMoneyScan"
              component={CashoutMoneyScan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DepositMoneyRecent"
              component={DepositMoneyRecent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MomoOnMonkapHomeSeeBalance"
              component={MomoOnMonkapHomeSeeBalanc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CashoutMoneyRecent"
              component={CashoutMoneyRecent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MTNRechargeSms"
              component={MTNRechargeSms}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MTNRechargeData"
              component={MTNRechargeData}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MTNRechargeVoice"
              component={MTNRechargeVoice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MoMoPay"
              component={MoMoPay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MoMoPay1"
              component={MoMoPay1}
              options={{ headerShown: false }}
            />
          */}
          <Stack.Screen
            name="Deposit"
            component={Deposit}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TransferMoney"
            component={TransferMoney}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectFromContactsNew"
            component={SelectFromContactsNew}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard7"
            component={NoCard7}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard2"
            component={NoCard2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard1"
            component={NoCard1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard5"
            component={NoCard5}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard3"
            component={NoCard3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard4"
            component={NoCard4}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MoNkapHomeScreen"
            component={MoNkapHomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard6"
            component={NoCard6}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard"
            component={NoCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard8"
            component={NoCard8}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NoCard9"
            component={NoCard9}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
              name="LinkBank"
              component={LinkBank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MomoOnMonkapHomeHideBalance"
              component={MomoOnMonkapHomeHideBalan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MTNSplashScreen"
              component={MTNSplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMoneyOnMonkapHomeHideBalance"
              component={OMoneyOnMonkapHomeHideBal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OMoneySplashScreen"
              component={OMoneySplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pay"
              component={Pay}
              options={{ headerShown: false }}
            />
          
            <Stack.Screen
            name="UsePhone"
            component={UsePhone}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="UsePhone1"
            component={UsePhone1}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="Help"
            component={Help}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="MonkapLoginWithEmail"
            component={MonkapLoginWithEmail}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="VerifyPhoneNumber"
            component={VerifyPhoneNumber}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="MonkapLoginWithPhone"
            component={MonkapLoginWithPhone}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="SplashScreenPhoneVerified"
            component={SplashScreenPhoneVerified}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="SplashScreenMoNkap"
            component={SplashScreenMoNkap}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="MonkapProfile"
            component={MonkapProfile}
            options={{ headerShown: false }}
          /> */}

          <Stack.Screen
            name="Pay1"
            component={Pay1}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
