import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonBack from "../components/ButtonBack";
import ButtonNext from "../components/ButtonNext";
import Circles from "../components/Circles";

export default function SignInScreen({ navigation }) {
  return (
    <View>
      <View style={styles.viewCircle}>
        <Circles />
        <ButtonBack onPress={() => { navigation.goBack() }} />
      </View>
      <View style={styles.viewHome}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Image source={require('../../assets/image2.png')} />
        <View>
          <TextInput placeholder="Enter your Email address" style={styles.inputSignIn} placeholderTextColor='#000000' />
          <TextInput placeholder="Confirm Password" style={styles.inputSignIn} placeholderTextColor='#000000' />
        </View>
        <View style={styles.viewSubtitle}>
          <Text style={styles.subtitle}>Forgot Password ?</Text>
        </View>
        <ButtonNext text={'Sign In'} onPress={() => { navigation.push('SignUp') }} />
        <View style={styles.viewRow}>
          <Text style={[styles.textRow, styles.textRowGrey]}>Dont have an account ? </Text>
          <Pressable onPress={() => { navigation.push('SignIn') }}>
            <Text style={[styles.textRow, styles.textRowGreen]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewCircle: {
    flex: 1,
  },
  viewHome: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 8,
  },
  title: {
    fontFamily: 'Poppins_Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  viewSubtitle: {
    height: 80, justifyContent: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins_Regular',
    fontSize: 13,
    textAlign: 'center',
    color: '#55847a',
    marginTop: 20
  },
  inputSignIn: {
    width: 340,
    height: 50,
    borderRadius: 11,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    marginTop: 26
  },
  viewRow: {
    flexDirection: 'row',
  },
  textRow: {
    fontFamily: 'Poppins_Regular',
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 40
  },
  textRowGrey: {
    color: '#000000',
    opacity: 0.74
  },
  textRowGreen: {
    color: '#55847a'
  }
})