import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="lightblue" />,
        }}
      />
      <Tabs.Screen 
        name="first" 
        options={{
          tabBarIcon: () => <AntDesign name="star" size={24} color="lightblue" />,
        }}
      />
      <Tabs.Screen 
        name="second" 
        options={{
          headerShown: false,
          popToTopOnBlur: true,
          tabBarIcon: () => <AntDesign name="heart" size={24} color="lightblue" />,
        }}
      />
      <Tabs.Screen 
        name="third" 
        options={{
          tabBarIcon: () => <AntDesign name="environment" size={24} color="lightblue" />,
          tabBarBadgeStyle: {
            backgroundColor: 'lightgreen'
          } 
        }}
      />
    </Tabs>
  );
}
