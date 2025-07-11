import React, {useState} from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from '../styles/SignUpScreen.styles'
import * as SecureStore from 'expo-secure-store';
import { API_URL } from '../app/constants';

export default function SignUpScreen() {
	const [name, setName] = useState('');
	const router = useRouter();

	const handleSignUp = async () => {
		try {
			const response = await fetch(`${API_URL}/api/users`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({name})
			})
			const user = await response.json();
			await SecureStore.setItemAsync('userId', user.id.toString());

			// navigate to needs page, passing userIdd for the needs endpoint
			router.push({
				pathname: '/tabs/needs',
				params: {userId: user.id}
			})
		} catch (e) {
			console.error('Failed to sign up: ', e)
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>What's your name?</Text>
			<TextInput
				style={styles.input}
				value={name}
				onChangeText={setName}
			/>
			<TouchableOpacity style={styles.button} onPress={handleSignUp}>
				<Text style={styles.buttonText}>Sign Up</Text>
			</TouchableOpacity>
		</View>
	)
}