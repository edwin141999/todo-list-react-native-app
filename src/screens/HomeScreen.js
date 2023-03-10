import { useFonts } from 'expo-font'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
	useFonts({
		Poppins_Regular: require('../../assets/fonts/Poppins-Regular.ttf'),
		Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf'),
	})

	return (
		<View>
			<View style={styles.circleLeft} />
			<View style={styles.circleRight} />
			<View style={styles.viewHome}>
				<Image source={require('../../assets/image1.png')} />
				<Text style={styles.title}>Get things done with ToDo</Text>
				<View style={styles.viewTextSubtitle}>
					<Text style={styles.subtitle} >Lorem ipsum dolor sit amet,
						consectetur adipisicing. Maxime,
						tempore! Animi nemo aut atque,
						deleniti nihil dolorem repellendus.
					</Text>
				</View>
				<Pressable style={styles.button}>
					<Text style={styles.textButton}>Get Started</Text>
				</Pressable>
			</View>
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
		top: -240,
		left: -130,
		opacity: 0.5,
	},
	circleRight: {
		backgroundColor: '#55847a',
		width: 200,
		height: 200,
		borderRadius: 100,
		position: 'absolute',
		top: -290,
		left: -40,
		opacity: 0.5,
	},
	viewHome: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'Poppins_Bold',
		fontSize: 20,
		textAlign: 'center',
		color: '#000000'
	},
	viewTextSubtitle: {
		width: 242,
		height: 110,
		justifyContent: 'center',
		marginBottom: 20,
	},
	subtitle: {
		fontFamily: 'Poppins_Regular',
		fontSize: 13,
		textAlign: 'center',
	},
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
	}
})
