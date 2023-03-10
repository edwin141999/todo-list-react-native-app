import { Pressable, StyleSheet, Text } from "react-native";

export default function ButtonNext({ text, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#55847a',
    width: 220,
    height: 44,
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'Poppins_Regular',
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
})