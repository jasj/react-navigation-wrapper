// reactNavigationWrapper.js
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

// Si necesitas compatibilidad con versiones anteriores, puedes agregar:
export const NavigationActions = CommonActions;

export default {
  ...ReactNavigation,
  ...ReactNavigationStack,
};