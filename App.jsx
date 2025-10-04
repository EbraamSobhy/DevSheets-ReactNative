import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeScreen from './screens/HomeScreen';
import CheatSheet from './screens/CheatSheet';
import Git from './commands/Git';
import IDE from './commands/IDE';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tabs
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#111',
          height: 60,
          paddingBottom: 5,
          marginBottom: 40,
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <Foundation name="home" size={size} color={color} />;
          } else if (route.name === 'CheatSheets') {
            return <FontAwesome6 name="sheet-plastic" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'white',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CheatSheets" component={CheatSheet} />
    </Tab.Navigator>
  );
}

// Stack + Tabs together
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Git"
          component={Git}
          options={{
            title: "Git",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
        <Stack.Screen
          name="IDE"
          component={IDE}
          options={{
            title: "IDE",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
