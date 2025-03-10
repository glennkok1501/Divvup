import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BackButton } from '../components/BackButton';
import Details from '../screens/details';
import Overview from '../screens/overview';
import Home from 'screens/home';

export type RootStackParamList = {
  Overview: undefined;
  Details: { name: string };
  Home: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
