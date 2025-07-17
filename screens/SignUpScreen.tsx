import { API_BASE_URL } from "../constants/constants";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from '../styles/SignUpScreen.styles';
import { StorageService } from "../services/storage";

export default function SignUpScreen() {
	const [name, setName] = useState('');
	const router = useRouter();

	const handleSignUp = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/api/users`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({name})
			})
			const user = await response.json();
			console.log("user", user)
			await StorageService.setItem('userId', user.id.toString());

			// navigate to needs page, passing userId for the needs endpoint
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

// TODO
	// persist users accross all devices...