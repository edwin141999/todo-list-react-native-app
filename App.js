import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font'
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AddTodoScreen from './src/screens/AddTodoScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import HomeScreen from './src/screens/HomeScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'

const Stack = createNativeStackNavigator()

function Home({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Poppins_Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins_Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      })
      setFontLoaded(true)
    }
    loadFont()
  }, [])

  return (
    <View style={styles.container}>
      {fontLoaded &&
        <HomeScreen navigation={navigation} />
      }
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

function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <SignInScreen navigation={navigation} />
    </View>
  )
}

function AddTodo({ navigation }) {
  return (
    <View style={styles.container}>
      <AddTodoScreen navigation={navigation} />
    </View>
  )
}

function Dashboard({navigation}) {
  return(
    <View style={styles.container}>
      <DashboardScreen navigation={navigation} />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='AddTodo' component={AddTodo} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
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