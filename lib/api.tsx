import { PredefinedNeed } from "../types"
import { API_URL } from "@/app/constants"

const fetchPredefinedNeeds = async () : Promise<PredefinedNeed[]> => {
	try {
		const response = await fetch(`${API_URL}/api/predefinedneeds`)
		const data = await response.json()
		return data
	} catch (e) {
		console.error("Error fetching predefined needs:", e)
		return []
	}
}

export default fetchPredefinedNeeds
