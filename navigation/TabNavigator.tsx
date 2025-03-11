import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { themes } from '@tamagui/themes';

import HomePage from 'screens/HomePage';
import { HomeIcon, PlaneIcon, PlusSquareIcon, ReceiptTextIcon, SettingsIcon } from 'lucide-react-native';
import SettingsPage from 'screens/SettingsPage';
import TripsPage from 'screens/TripsPage';
import AddPage from 'screens/AddPage';
import ActivityPage from 'screens/ActivityPage';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  // Home
  // Trips
  // Add
  // Activites
  // Settings

  const iconProps = {
    size: '25',
    color: themes.light.gray8,
    selectedColor: 'black',
    style: { top: 8 },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          backgroundColor: 'white',
          borderRadius: 25,
          height: 60,
          marginHorizontal: 20,
        },
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              style={iconProps.style}
              size={iconProps.size}
              color={focused ? iconProps.selectedColor : iconProps.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={TripsPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <PlaneIcon
              style={iconProps.style}
              size={iconProps.size}
              color={focused ? iconProps.selectedColor : iconProps.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPage}
        options={{ tabBarIcon: ({ focused }) => <PlusSquareIcon 
            style={iconProps.style}
            size={iconProps.size}
            color={focused ? iconProps.selectedColor : iconProps.color} /> }}
      />
      <Tab.Screen
        name="Activities"
        component={ActivityPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <ReceiptTextIcon
              style={iconProps.style}
              size={iconProps.size}
              color={focused ? iconProps.selectedColor : iconProps.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <SettingsIcon
              style={iconProps.style}
              size={iconProps.size}
              color={focused ? iconProps.selectedColor : iconProps.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
