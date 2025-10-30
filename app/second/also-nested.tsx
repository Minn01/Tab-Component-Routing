import { Text, View } from 'react-native'

export default function AlsoNested() {
    return (
      <View style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Also Nested</Text>
      </View>
    )
}