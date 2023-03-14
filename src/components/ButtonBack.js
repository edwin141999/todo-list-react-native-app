import { Image, Pressable, StyleSheet } from "react-native";

export default function ButtonBack({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.back}>
      <Image source={require('../../assets/back_arrow.png')} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    top: 70,
    left: -10,
  },
})