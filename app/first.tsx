import { Text, View } from 'react-native'

export default function First() {
    return (
      <View style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>first</Text>
      </View>
    )
}