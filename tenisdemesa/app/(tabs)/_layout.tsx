import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#565b62'
        },
        headerShadowVisible: false,
        headerTintColor: '#fffdfd',
        tabBarStyle: {
        backgroundColor: '#565b62',
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="toDoList"
        options={{
          title: 'Information',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={focused ? 'lightbulb-circle' : 'lightbulb'} color={color} size={24} />

          ),
        }}
      />
  </Tabs>
 );
}