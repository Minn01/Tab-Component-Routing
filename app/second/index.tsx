import { Text, View } from "react-native";
import MyButton from "@/components/MyButton";
import { useRouter, usePathname } from "expo-router";
import { useEffect } from "react";

export default function Second() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>second</Text>
      <MyButton
        buttonText="go to nested"
        customFunc={() => {
          router.push("/second/nested");
        }}
      />
    </View>
  );
}
