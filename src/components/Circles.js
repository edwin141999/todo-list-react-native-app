import { StyleSheet, View } from "react-native"

export default function Circles() {
  return (
    <View>
      <View style={styles.circleLeft} />
      <View style={styles.circleRight} />
    </View>
  )
}

const styles = StyleSheet.create({
  circleLeft: {
    backgroundColor: '#55847a',
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
    top: -80,
    left: -130,
    opacity: 0.5,
  },
  circleRight: {
    backgroundColor: '#55847a',
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
    top: -120,
    left: -40,
    opacity: 0.5,
  },
})