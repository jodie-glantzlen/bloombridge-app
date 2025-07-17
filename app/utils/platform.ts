import { Platform } from "react-native";

export const isWeb: boolean = Platform.OS === "web";
export const isMobile: boolean = Platform.OS === 'ios' || Platform.OS === 'android';