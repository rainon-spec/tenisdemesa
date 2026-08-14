import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

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
          title: 'Início',
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
          title: 'Atletas Preferidos',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={focused ? 'lightbulb-circle' : 'lightbulb'} color={color} size={24} />

          ),
        }}
      />

      <Tabs.Screen
        name="buscaCep"
        options={{
          title: 'Localização',
          tabBarIcon: ({ color, focused }) => (
            <Entypo name={focused ? 'location' : 'location-pin'} color={color} size={24} />

          ),
        }}
      />
  </Tabs>
 );
}