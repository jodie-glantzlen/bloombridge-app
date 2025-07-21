import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import fetchPredefinedNeeds from "../lib/api";
import styles from "../styles/NeedsScreen.styles";
import { PredefinedNeed } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NeedsScreen() {
  const [needs, setNeeds] = useState<PredefinedNeed[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<number[]>([]);

  useEffect(() => {
    const loadNeeds = async () => {
      try {
        const data = await fetchPredefinedNeeds();
        setNeeds(data);
      } catch (e) {
        console.error("Failed to load needs: ", e);
      }
    };

    loadNeeds();
  }, []);

  const toggleSelection = (id: number) => {
    // prev is the CURRENT state
    setSelectedNeeds((prev) =>
      // for each need, return the one that is not the current id
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id],
    );
  };

  const isSelected = (id: number): boolean => {
    return selectedNeeds.includes(id);
  };

  const handleSubmit = () => {
    console.log("payload: ", selectedNeeds);
  };

  const renderNeedItem = ({ item }: { item: PredefinedNeed }) => {
    return (
      <TouchableOpacity
        style={[styles.button, isSelected(item.id) && styles.buttonSelected]}
        onPress={() => toggleSelection(item.id)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.buttonText,
            isSelected(item.id) && styles.buttonTextSelected,
          ]}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What do you need help with?</Text>
      </View>
      {/* <View style={styles.container}> */}
        <FlatList
          data={needs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderNeedItem}
          numColumns={2}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
        ></FlatList>
        <TouchableOpacity style={styles.submitContainer} onPress={handleSubmit} activeOpacity={0.8}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}
