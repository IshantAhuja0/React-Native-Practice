import React, { JSX } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  let val=useColorScheme()
  console.log(val)
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.textDark : styles.textLight}>
          Hello Ishant Ahuja
        </Text>
        <Text>Hello Ishant Ahuja</Text>
        <Text>Hello Ishant Ahuja</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textLight: {
    color: '#000',
  },
  textDark: {
    color: '#FFFFFF',
  },
});
export default App;
