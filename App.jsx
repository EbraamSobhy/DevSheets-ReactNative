import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeScreen from './screens/HomeScreen';
import CheatSheet from './screens/CheatSheet';
import Git from './commands/Git';
import IDE from './commands/IDE';
import Bash from './commands/Bash';
import OS from './commands/OS';
import Gemini from './commands/Gemini';
import GitHub from './commands/GitHub';
import Docker from './commands/Docker';
import Tmux from './commands/Tmux';
import Linux from './commands/Linux';
import AWS from './commands/AWS';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#111',
          height: 60,
          paddingBottom: 5,
          marginBottom: 45,
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
        <Stack.Screen
          name="Bash"
          component={Bash}
          options={{
            title: "Bash",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
        <Stack.Screen
          name="OS"
          component={OS}
          options={{
            title: "Operating Systems",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
        <Stack.Screen
          name="Gemini"
          component={Gemini}
          options={{
            title: "Gemini CLI",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
        <Stack.Screen
          name="GitHub"
          component={GitHub}
          options={{
            title: "GitHub CLI",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
        <Stack.Screen
          name="Docker"
          component={Docker}
          options={{
            title: "Docker CLI",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
        <Stack.Screen
          name="Tmux"
          component={Tmux}
          options={{
            title: "Tmux",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
         <Stack.Screen
          name="Linux"
          component={Linux}
          options={{
            title: "Linux",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
        <Stack.Screen
          name="AWS"
          component={AWS}
          options={{
            title: "AWS CLI",
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#26a269',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
