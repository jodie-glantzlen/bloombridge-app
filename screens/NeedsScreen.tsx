import React from 'react';
import { useState, useEffect } from 'react';
import { PredefinedNeed } from '../types';
import fetchPredefinedNeeds from '../lib/api';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function NeedsScreen() {
	const [needs, setNeeds] = useState<PredefinedNeed[]>([]);

	useEffect(() => {
		const loadNeeds = async () => {
			try {
				const data = await fetchPredefinedNeeds();
				setNeeds(data)
			} catch (e) {
				console.error("Failed to load needs: ", e)
			}
		}

		loadNeeds()
	}, [])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>What do you need help with?</Text>
			<Text style={styles.description}>
				Needs selection coming soon my friend
			</Text>
			<FlatList
				data={needs}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<View>
						<Text>{item.label}</Text>
					</View>
				)}
			/>
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