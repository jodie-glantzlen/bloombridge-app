import { API_BASE_URL } from "../constants/constants";
import { PredefinedNeed } from "../types";

const fetchPredefinedNeeds = async (): Promise<PredefinedNeed[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/predefinedneeds`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error fetching predefined needs:", e);
    return [];
  }
};

export default fetchPredefinedNeeds;
