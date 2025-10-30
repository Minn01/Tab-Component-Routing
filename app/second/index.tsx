import { Text, View } from 'react-native'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'

export default function Second() {
  const router = useRouter()
    return (
      <View style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>second</Text>
        <MyButton buttonText='go to nested' customFunc={() => {router.push('/second/nested')}}/> 
      </View>
    )
}