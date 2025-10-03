import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/HomeScreen';
import CheatSheet from './screens/CheatSheet';

// Icons
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return <Foundation name="home" size={size} color={color} />;
            } else if (route.name === 'CheatSheets') {
              return <FontAwesome6 name="sheet-plastic" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="CheatSheets" component={CheatSheet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
