import { Stack, usePathname } from 'expo-router'

export default function Layout() {
    const pathname = usePathname()
    return (
        <Stack screenOptions={{
            animation: pathname.startsWith('/second') ? 'default' : 'none'
        }}>
            <Stack.Screen name='index' options={{
                title: 'Second-Home'
            }} />

            <Stack.Screen name='modal' options={{
                title: 'Second-Modal',
                presentation: 'modal',
                animation: 'slide_from_bottom',
                gestureEnabled: true,
            }} />
        </Stack>
    )
  }