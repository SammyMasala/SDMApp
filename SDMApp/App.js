import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View><Text>Hello</Text></View>
      <View style={styles.container}>
        <Text style={styles.background_light}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <View></View>
      <View><Text>Footer</Text></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background_light: {
    fontFamily: ["serif", "Irish Grover"],
  }
});