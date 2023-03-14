import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonBack from "../components/ButtonBack";
import ButtonNext from "../components/ButtonNext";
import Circles from "../components/Circles";

export default function AddTodoScreen({ navigation }) {
  return (
    <View>
      <View style={styles.viewCircle}>
        <Circles />
        <ButtonBack onPress={() => { navigation.goBack() }} />
      </View>
      <View style={styles.viewHome}>
        <Text style={styles.title}>Welcome Onboard!</Text>
        <Image source={require('../../assets/image3.png')} style={{ marginTop: 20 }} />
        <Text style={styles.subtitle}>Add What your want to do later on..</Text>
        <TextInput style={styles.inputAddTodo} placeholderTextColor='#000000' />
        <TextInput style={styles.inputAddTodo} placeholderTextColor='#000000' />
        <TextInput style={styles.inputAddTodo} placeholderTextColor='#000000' />
        <View style={{ height: 26 }} />
        <ButtonNext text={'Add to list'} onPress={() => { }} />
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
    flex: 15,
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
  inputAddTodo: {
    width: 340,
    height: 50,
    borderRadius: 11,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    marginTop: 26
  },
})