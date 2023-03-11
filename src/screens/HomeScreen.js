import { Image, StyleSheet, Text, View } from 'react-native';
import ButtonNext from '../components/ButtonNext';
import Circles from '../components/Circles';

export default function HomeScreen({ navigation }) {
	return (
		<View>
			<Circles />
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
				<ButtonNext text={'Get Started'} onPress={() => { navigation.push('SignUp') }} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	viewHome: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
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
	}
})
