import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/HomeScreen.styles'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BloomBridge!</Text>
    </View>
  );
}