import { Tabs } from "expo-router";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function RootLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tabs.Screen
          name="needs"
          options={{
            title: "Needs",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="hand-heart-outline"
                color={color}
                size={size}
              />
            ),
            tabBarLabel: "Needs",
          }}
        />
      </Tabs>
    </>
  );
}
