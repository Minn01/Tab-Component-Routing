import { Text, View, Modal } from "react-native";
import MyButton from "@/components/MyButton";
import { useState } from "react";

export default function Index() {
  const [modalIsVisable, setIsModalIsVisable] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyButton
        buttonText="Open Modal"
        customFunc={() => {
          setIsModalIsVisable((prev) => !prev);
        }}
      />
      <Modal
        visible={modalIsVisable}
        onRequestClose={() => {
          setIsModalIsVisable(false);
        }}
        presentationStyle="pageSheet"
        // animationType="fade"
      >
        {/* <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.15)",
          }}
        > */}
          <View
            style={{
              backgroundColor: "white", // 👈 actual modal box
              // padding: 20,
              // borderRadius: 10,
              // width: "80%",
              alignItems: "center",

              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text>This is a custom modal</Text>
            <MyButton
              buttonText="Leave Modal"
              customFunc={() => {
                setIsModalIsVisable(false);
              }}
            />
          </View>
        {/* </View> */}
      </Modal>
    </View>
  );
}
