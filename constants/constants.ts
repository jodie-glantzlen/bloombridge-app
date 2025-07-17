import Constants from 'expo-constants';
import { Platform } from 'react-native';

export const API_BASE_URL = Platform.select({
  web: Constants.expoConfig?.extra?.API_BASE_URL_WEB || process.env.API_BASE_URL_WEB,
  default: Constants.expoConfig?.extra?.API_BASE_URL_MOBILE,
});