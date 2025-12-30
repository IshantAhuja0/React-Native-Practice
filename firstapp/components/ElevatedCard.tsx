import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.cardContainer}>
        <View style={[styles.card, styles.oneCard]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.twoCard]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.threeCard]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.oneCard]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.twoCard]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.threeCard]}>
          <Text>Blue</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 6,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:4,
  },
  oneCard: {
    backgroundColor: '#EF5354',
  },
  twoCard: {
    backgroundColor: '#22ea39ff',
  },
  threeCard: {
    backgroundColor: '#2630f0ff',
  },
});
export default ElevatedCard;
