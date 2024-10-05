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

export default {
  ...ReactNavigation,
  ...ReactNavigationStack,
  withNavigation,
};