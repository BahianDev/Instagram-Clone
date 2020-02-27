import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {RNCamera} from 'react-native-camera'

import camera from '../../assets/camera.png';
import logo from '../../assets/logo.png';
import igtv from '../../assets/igtv.png';
import send from '../../assets/send.png';

import Feed from '../screens/Feed'





const Stack = createStackNavigator();

function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Feed" component={Feed} options={{
              title: false,
              headerLeft: () => {
                 return (
                     <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{marginLeft:5, marginRight: 15}}>
                             <Image source={camera} style={{marginLeft:15}}/>
                        </TouchableOpacity>
                        <Image source={logo}/>
                     </View>
                    
                 )
              },
              headerRight: () => {
                  return( 
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{marginRight:20}}>
                            <Image source={send}/>
                        </TouchableOpacity>
                    </View>
                  )
              }


            }}/>
          

            


        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App