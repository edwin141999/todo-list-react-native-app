import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonBack from "../components/ButtonBack";
import ButtonNext from "../components/ButtonNext";
import Circles from "../components/Circles";

export default function SignUpScreen({ navigation }) {
  return (
    <View>
      <View style={styles.viewCircle}>
        <Circles />
        <ButtonBack onPress={() => { navigation.goBack() }} />
      </View>
      <View style={styles.viewHome}>
        <Text style={styles.title}>Welcome Onboard!</Text>
        <Text style={styles.subtitle}>Let's help you meet up your task</Text>
        <View style={styles.viewTextInput}>
          <TextInput placeholder="Enter your Full Name" style={styles.inputSignUp} placeholderTextColor='#000000' />
          <TextInput placeholder="Enter your Email address" style={styles.inputSignUp} placeholderTextColor='#000000' keyboardType="email-address" />
          <TextInput placeholder="Create a Password" style={styles.inputSignUp} placeholderTextColor='#000000' keyboardType="visible-password" />
          <TextInput placeholder="Confirm your Password" style={styles.inputSignUp} placeholderTextColor='#000000' keyboardType="visible-password" />
        </View>
        <ButtonNext text={'Sign Up'} onPress={() => { navigation.push('SignUp') }} />
        <View style={styles.viewRow}>
          <Text style={[styles.textRow, styles.textRowGrey]}>Already have an account ? </Text>
          <Pressable onPress={() => { navigation.push('SignIn') }}>
            <Text style={[styles.textRow, styles.textRowGreen]}>Sign In</Text>
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
  title: {
    fontFamily: 'Poppins_Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins_Regular',
    fontSize: 13,
    textAlign: 'center',
    color: '#55847a',
    marginTop: 20
  },
  viewHome: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:8,
  },
  viewTextInput: {
    marginBottom: 80,
    marginTop: 30,
  },
  inputSignUp: {
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