/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { StatusBar } from 'expo-status-bar';

// import { BackButton } from '../components/BackButton';
// import Details from '../screens/details';
// import Overview from '../screens/overview';


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen 
    //       name="Home" 
    //       component={Home}
    //       options={{ headerShown: false }} />
    //     <Stack.Screen name="Overview" component={Overview} />
    //     <Stack.Screen
    //       name="Details"
    //       component={Details}
    //       options={({ navigation }) => ({
    //         headerLeft: () => <BackButton onPress={navigation.goBack} />,
    //       })}
    //     />
    //     <TabNavigator />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <StatusBar style="dark"/>
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}


