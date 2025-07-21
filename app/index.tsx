import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { StorageService } from "../services/storage";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   const clearStorage = async () => {
  //     await StorageService.removeItem('userId');
  //     console.log('Cleared userId from storage');
  //   };
  //   clearStorage();
  // }, []);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userId = await StorageService.getItem("userId");

        if (userId) {
          router.replace("/tabs/needs");
        } else {
          router.replace("/signup");
        }
      } catch (e) {
        console.error("Failed to check user", e);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }
  return null;
}
