import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import MyButton from "@/components/MyButton";

export default function ModalScreen() {
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
      <Text>Modal Screen</Text>
      <MyButton buttonText="close modal" customFunc={() => {
        router.back()
      }}/>
    </View>
  );
}
