import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function SpecialCard() {
  return (
    <View>
      <Text style={styles.headingText}>Special Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/34636073/pexels-photo-34636073.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <View style={styles.cardHeading}>
          <Text style={styles.cardTitle}>Lake</Text>
          <Text style={styles.cardLabel}>Special</Text>

          </View>
          <Text style={styles.cardDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  card: {
    elevation:5,
    // height:"50%",
    width: '75%',
    padding: 0,
    borderWidth: 0,
    borderRadius: 8,
    borderBlockColor: 'black',
    margin: 8,
    backgroundColor: '#abb0afff',
  },
  cardBody: {
    padding: 5,
  },
  cardLabel: {
    padding: 4,
    backgroundColor:"#ff0000ff",
    borderWidth:0,
    borderRadius:14,
    elevation:2,
    fontSize:10,
    fontWeight:"bold"
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // paddingHorizontal: 8,
    // paddingVertical: 5,
  },
  cardHeading:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  cardDescription: {
    fontSize: 10,
    fontWeight: 'semibold',
    // paddingHorizontal: 8,
    // paddingVertical: 2,
  },
  cardElevated: {},
  cardImage: {
    height: 140,
    borderWidth: 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
export default SpecialCard;
