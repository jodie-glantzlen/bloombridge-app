import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { View, ActivityIndicator } from "react-native";


export default function Index() {
	const [loading, setLoading] = useState(true)
  const router = useRouter();

	useEffect(() => {
		const checkUser = async () => {
			try {
				const userId = await SecureStore.getItemAsync('userId')

			if (userId) {
				router.replace('/tabs/needs');
			} else {
				router.replace('/signup')
			}
			} catch (e) {
				console.error("Failed to check user", e)
			} finally {
				setLoading(false)
			}
		}
		checkUser()
	}, [])

	if (loading) {
		return (
			<View
				style={{flex: 1, justifyContent: "center", alignItems: "center"}}
			>
				<ActivityIndicator size="small" color="#0000ff"/>
			</View>
		)
	}
	return null
}
