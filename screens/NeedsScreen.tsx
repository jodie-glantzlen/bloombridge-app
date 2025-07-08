import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NeedsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>What do you need help with?</Text>
			<Text style={styles.description}>
				Needs selection coming soon my friend
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	description: {
		fontSize: 16,
		color: '#555',
		textAlign: 'center',
		paddingHorizontal: 20,
	},
});