import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import MyButton from "@/components/MyButton";

export default function Third() {
  const [count, setCount] = useState(0);
  const nav = useNavigation();

  useEffect(() => {
    if (count > 0) {
      nav.setOptions({
        tabBarBadge: count,
      });
    }
  }, [count]);

  return (
    <View style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Text>Third</Text>
      <MyButton
        buttonText='Increase Badge Count'
        customFunc={() => {setCount(prev => prev + 1)}} />
    </View>
  );
}
