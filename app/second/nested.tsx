import { Text, View } from 'react-native'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'

export default function Nested() {
    const router = useRouter()

    return (
      <View style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Nested</Text>
        <MyButton buttonText='go to also nested' customFunc={() => {
            router.push('/second/also-nested')
        }}/>
      </View>
    )
}