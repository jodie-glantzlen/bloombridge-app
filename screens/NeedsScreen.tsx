import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import fetchPredefinedNeeds from '../lib/api';
import { PredefinedNeed } from '../types';
import styles from '../styles/NeedsScreen.styles'

export default function NeedsScreen() {
	const [needs, setNeeds] = useState<PredefinedNeed[]>([]);
	const [selectedNeeds, setSelectedNeeds] = useState<number[]>([])

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

	const toggleSelection = (id: number) => {
		// prev is the CURRENT state
		setSelectedNeeds((prev) =>
			// for each need, return the one that is not the current id
			prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
		)
	}

	const isSelected = (id: number): boolean => {
		return selectedNeeds.includes(id)
	}

	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>What do you need help with?</Text>
			</View>
			<View style={styles.container}>
				{needs.map((need) => (
					<TouchableOpacity
						key={need.id}
						style={[
							styles.button,
							isSelected(need.id) && styles.buttonSelected,
						]}
						onPress={() => toggleSelection(need.id)}
					>
						<Text
							style={[
								styles.buttonText,
								isSelected(need.id) && styles.buttonTextSelected
							]}
						>
							{need.label}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</>
	)
}
