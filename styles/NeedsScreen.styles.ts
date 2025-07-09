import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		gap: 8,
		padding: 16,
	},
	titleContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	button: {
		backgroundColor: '#eee',
		paddingVertical: 10,
		paddingHorizontal: 16,
		borderRadius: 20,
		marginRight: 8,
		marginBottom: 8,
	},
	buttonSelected: {
		backgroundColor: '#007AFF',
	},
	buttonText: {
		color: '#333',
	},
	buttonTextSelected: {
		color: '#fff',
		fontWeight: 'bold',
	},
	submitContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	}
});