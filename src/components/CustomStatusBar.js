import React from 'react';
import { View, StatusBar } from 'react-native';

const CustomStatusBar = () => {
  return (
    <View>
      <StatusBar
        backgroundColor="#0000EE"
        barStyle="light-content"
        hidden={false}
      />
    </View>
  );
};

export default CustomStatusBar;
