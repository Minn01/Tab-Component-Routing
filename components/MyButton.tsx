import { Pressable, Text } from 'react-native'

type MyButtonProps = {
    buttonText?: string;
    customFunc?: () => void;  
}
export default function MyButton({ buttonText='Button', customFunc=() => {} } : MyButtonProps) {
    return (
      <Pressable
        style={({pressed}) => [
            {
                backgroundColor: pressed ? 'rgba(0, 199, 80, 1)' : 'lightgreen',
                padding: 20,
                marginTop: 20,
                borderRadius: 20,
            }
        ]}
        onPress={() => {
            customFunc()
        }}
      >
        <Text>{buttonText}</Text>
      </Pressable>
    )
}