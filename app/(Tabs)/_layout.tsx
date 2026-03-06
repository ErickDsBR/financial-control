import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
    return <SafeAreaView style={{ flex: 1, backgroundColor: '#2b364a' }}>
        <Tabs
            screenOptions={{

                headerShown: false,
                tabBarStyle: {
                    borderColor: '#1E1E1E',
                    backgroundColor: '#1E1E1E',
                    marginBottom: 10,
                    borderRadius: 10,
                    width: '70%',
                    alignSelf: 'center',
                },
                tabBarShowLabel: false,
                tabBarInactiveTintColor: '#888',
                tabBarActiveTintColor: '#fff',

            }}
        >
            <Tabs.Screen name="Home"></Tabs.Screen>

        </Tabs>
    </SafeAreaView>
    
}
