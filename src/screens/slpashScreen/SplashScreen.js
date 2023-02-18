import React from 'react';
import { View, Text, TouchableOpacity,Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const window = Dimensions.get('window');
const {width , height} = window;


const SplashScreen = ({navigation}) => {
  return (<>
  {/* <AntDesign name='left' size={25} color='white' /> */}
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#0000EE'}}>
      <Text style={{ fontSize: 24 ,color: 'white'}}>Welcome to MoNkap!</Text>
      <Text style={{ fontSize: 24,color: 'white' }}>XAF[CFA]</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity onPress={() =>navigation.navigate('BottomTabScreen')} style={{ marginTop: height/3 ,borderBottomWidth:1,marginRight:30,borderBottomColor:'white'}}>
        <Text style={{ fontSize: 18, color: 'white' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: height/3,borderBottomWidth:1,marginLeft:30,borderBottomColor:'white'}}>
        <Text style={{ fontSize: 18, color: 'white' }}>Sign Up</Text>
      </TouchableOpacity>
      </View>
     
     <Text style={{marginTop:height/7,color:'white'}}>Cameroon’s Premier Mobile Money App</Text>
    </View>
  </>
  );
};

export default SplashScreen;
