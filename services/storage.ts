import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {
  static async getItem(key: string): Promise<string | null> {
    return Platform.select({
      web: () => AsyncStorage.getItem(key),
      default: () => SecureStore.getItemAsync(key),
    })();
  }

  static async setItem(key: string, value: string): Promise<void> {
    return Platform.select({
      web: () => AsyncStorage.setItem(key, value),
      default: () => SecureStore.setItemAsync(key, value),
    })();
  }

  static async removeItem(key: string): Promise<void> {
    return Platform.select({
      web: () => AsyncStorage.removeItem(key),
      default: () => SecureStore.deleteItemAsync(key),
    })();
  }
}