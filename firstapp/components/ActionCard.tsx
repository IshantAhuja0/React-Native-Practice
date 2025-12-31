import React from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ActionCard() {
  const openWebsite = (webLink: string) => {
    Linking.openURL(webLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Special Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <View style={styles.cardHeading}>
            <Text style={styles.cardTitle}>Lake Hotel</Text>
            <Text style={styles.cardLabel}>Premium</Text>
          </View>
          <Text style={styles.cardDescription} numberOfLines={4}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </View>
          <TouchableOpacity
          style={styles.cardButton}
            onPress={() =>
              openWebsite(
                'https://www.tajhotels.com/en-in/offers/suite-surprises-member-only?gad_source=1&gad_campaignid=23166848553&gbraid=0AAAAADhl-_9nLWdmHPMnvii1k9NVqWmFD&gclid=CjwKCAiAjc7KBhBvEiwAE2BDOc3e473GtECKxfUHrkH2hmcHL5zFLy_QlQaHY1jAmb9tviIL6cb79xoCE1oQAvD_BwE',
              )
            }
          >
            <Text>Book Now</Text>
          </TouchableOpacity>
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
    elevation: 4,
    height: 380,
    width: "90%",
    padding: 0,
    borderWidth: 0,
    borderRadius: 8,
    borderBlockColor: 'black',
    margin: 20,
    backgroundColor: '#abb0afff',
    alignSelf:"center",
    // paddingBottom:4,
  },
  cardBody: {
    // height:100,
    padding: 5,
  },
  cardLabel: {
    padding: 4,
    backgroundColor: '#f66666ff',
    borderWidth: 0,
    borderRadius: 14,
    elevation: 2,
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // paddingHorizontal: 8,
    // paddingVertical: 5,
  },
  cardHeading: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
  },
  cardDescription: {
    fontSize: 10,
    fontWeight: '600',
    // paddingHorizontal: 8,
    // paddingVertical: 2,
  },
  cardElevated: {},
  cardImage: {
    height: 220,
    borderWidth: 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardButton: {
    alignItems: 'center',
    fontWeight:"bold",
    padding: 10,
    backgroundColor: '#265aebff',
    borderWidth: 0,
    borderRadius: 6,
    paddingVertical:12,
    margin:4,
    marginTop:12,
  },
});
