import React from 'react';
import * as ReactNavigation from '@react-navigation/native';
import * as ReactNavigationStack from '@react-navigation/stack';

export const {
  NavigationContainer,
  useNavigation,
  useRoute,
  useNavigationState,
  useFocusEffect,
  useIsFocused,
  CommonActions,
  StackActions,
} = ReactNavigation;

export const {
  createStackNavigator,
} = ReactNavigationStack;

export const NavigationActions = CommonActions;

// Implementación personalizada de withNavigation
export function withNavigation(Component) {
  return function NavigationInjectedComponent(props) {
    const navigation = useNavigation();
    return <Component {...props} navigation={navigation} />;
  }
}

// Implementación personalizada de withNavigationFocus
export function withNavigationFocus(Component) {
  return function NavigationFocusInjectedComponent(props) {
    const isFocused = useIsFocused();
    return <Component {...props} isFocused={isFocused} />;
  }
}

// Función de compatibilidad para createBottomTabNavigator
export function createBottomTabNavigator(routeConfigs, navigatorConfig) {
  const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');
  const Tab = createBottomTabNavigator();
  
  return () => (
    <Tab.Navigator {...navigatorConfig}>
      {Object.entries(routeConfigs).map(([name, screen]) => (
        <Tab.Screen 
          key={name}
          name={name}
          component={screen.screen || screen}
          options={screen.navigationOptions || {}}
        />
      ))}
    </Tab.Navigator>
  );
}

// Función simulada para Dropdown (si es necesaria)
const Dropdown = () => {};

export default {
  Dropdown,
  ...ReactNavigation,
  ...ReactNavigationStack,
  withNavigation,
  withNavigationFocus,
  createBottomTabNavigator,
};