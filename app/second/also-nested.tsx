import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function AlsoNested() {
  const router = useRouter() 
    return (
      <View style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Also Nested</Text>
        <MyButton buttonText='Open Route Modal' customFunc={() => {
          router.push('/second/modal')
        }}/>
      </View>
    )
}