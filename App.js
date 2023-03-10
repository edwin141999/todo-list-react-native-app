import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import SignUpScreen from './src/screens/SignUpScreen'

const Stack = createNativeStackNavigator()

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <HomeScreen navigation={navigation} />
    </View>
  )
}

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <SignUpScreen navigation={navigation} />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SignUp' component={SignUp} />
        {/* <StatusBar style='auto' /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: 'center',
    justifyContent: 'center',
  },
})