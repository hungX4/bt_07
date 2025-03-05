import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneNumber from './PhoneNumber';
import HomeScreen from './HomeScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneNumber">
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ title: 'Nhập Số Điện Thoại' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang Chủ' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
