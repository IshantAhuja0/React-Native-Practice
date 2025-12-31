import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      name: 'Jordan Rivers',
      phone: '+1 (555) 101-2021',
      address: '123 Maple Avenue, Springfield, IL 62704',
      status: 'Active',
      image_url: 'i.pravatar.cc',
    },
    {
      name: 'Sasha Valentine',
      phone: '+1 (555) 202-3032',
      address: '456 Oak Lane, Portland, OR 97201',
      status: 'Away',
      image_url: 'i.pravatar.cc',
    },
    {
      name: 'Marcus Chen',
      phone: '+1 (555) 303-4043',
      address: '789 Pine Street, Austin, TX 78701',
      status: 'Offline',
      image_url: 'i.pravatar.cc',
    },
    {
      name: 'Elena Rodriguez',
      phone: '+1 (555) 404-5054',
      address: '321 Cedar Blvd, Miami, FL 33101',
      status: 'Active',
      image_url: 'i.pravatar.cc',
    },
    {
      name: 'Liam Smith',
      phone: '+1 (555) 505-6065',
      address: '654 Birch Road, Seattle, WA 98101',
      status: 'Busy',
      image_url: 'i.pravatar.cc',
    },
    {
      name: 'Aria Montgomery',
      phone: '+1 (555) 606-7076',
      address: '101 Skyline Dr, Denver, CO 80202',
      status: 'Active',
      image_url: 'i.pravatar.cc',
    },
    {
      name: 'Julian Thorne',
      phone: '+1 (555) 707-8087',
      address: '202 Harbor View, San Diego, CA 92101',
      status: 'Away',
      image_url: 'i.pravatar.cc',
    },
    {
      name: 'Maya Patel',
      phone: '+1 (555) 808-9098',
      address: '303 Lotus Way, Phoenix, AZ 85001',
      status: 'Offline',
      image_url: 'i.pravatar.cc',
    },
    {
      name: 'Silas Vance',
      phone: '+1 (555) 909-0109',
      address: '404 Industrial Way, Detroit, MI 48201',
      status: 'Busy',
      image_url: 'i.pravatar.cc',
    },
    {
      name: 'Isabel Quinn',
      phone: '+1 (555) 010-1210',
      address: '505 Willow Creek, Nashville, TN 37201',
      status: 'Active',
      image_url: 'i.pravatar.cc0',
    },
    {
      name: 'Dominic Frost',
      phone: '+1 (555) 121-2321',
      address: '606 Glacier Rd, Anchorage, AK 99501',
      status: 'Away',
      image_url: 'i.pravatar.cc1',
    },
    {
      name: 'Zoe Kravitz',
      phone: '+1 (555) 232-3432',
      address: '707 Neon Blvd, Las Vegas, NV 89101',
      status: 'Active',
      image_url: 'i.pravatar.cc2',
    },
    {
      name: 'Leo Sterling',
      phone: '+1 (555) 343-4543',
      address: '808 Diamond St, Philadelphia, PA 19101',
      status: 'Offline',
      image_url: 'i.pravatar.cc3',
    },
    {
      name: 'Clara Oswald',
      phone: '+1 (555) 454-5654',
      address: '909 Time Lane, Boston, MA 02101',
      status: 'Busy',
      image_url: 'i.pravatar.cc4',
    },
    {
      name: 'Xavier Black',
      phone: '+1 (555) 565-6765',
      address: '111 Onyx Court, Atlanta, GA 30301',
      status: 'Active',
      image_url: 'i.pravatar.cc5',
    },
    {
      name: 'Nora West',
      phone: '+1 (555) 676-7876',
      address: '222 Horizon Cir, Salt Lake City, UT 84101',
      status: 'Away',
      image_url: 'i.pravatar.cc6',
    },
    {
      name: 'Felix Grimm',
      phone: '+1 (555) 787-8987',
      address: '333 Forest Edge, Burlington, VT 05401',
      status: 'Offline',
      image_url: 'i.pravatar.cc7',
    },
    {
      name: 'Luna Lovegood',
      phone: '+1 (555) 898-9098',
      address: '444 Moonbeam Dr, Boulder, CO 80301',
      status: 'Active',
      image_url: 'i.pravatar.cc8',
    },
    {
      name: 'Victor Stone',
      phone: '+1 (555) 909-1111',
      address: '555 Tech Plaza, San Jose, CA 95101',
      status: 'Busy',
      image_url: 'i.pravatar.cc9',
    },
    {
      name: 'Jade Nguyen',
      phone: '+1 (555) 111-2222',
      address: '666 Emerald Way, New Orleans, LA 70112',
      status: 'Active',
      image_url: 'https://picsum.photos/200/300',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ name, phone, address, status, image_url }) => (
          <View key={name} style={styles.contactCard}>
            <Image
              source={{ uri: 'https://picsum.photos/200/300' }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.nameText}>Name : {name}</Text>
              <Text style={styles.text} numberOfLines={1}>Phone : {phone}</Text>
              <Text style={styles.text} numberOfLines={1}>Address : {address}</Text>
              <Text style={styles.text} numberOfLines={1}>Status : {status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  container: {},
  contactCard: {
    margin:16,
    padding:6,
    flexDirection: 'column',
    justifyContent:"center",
    borderWidth:0,
    borderRadius:8,
    backgroundColor:"#99afebff",
    alignContent:"center",
    
  },
  userImage: {
    height: 120,
    width: 120,
    borderWidth:2,
    borderRadius:70,
    alignSelf:"center",
    marginBottom:4
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 700,
  },
});
