import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Footer } from './components';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <>
      <View><Text>Hello</Text></View>
      <View style={styles.container}>
        <Text style={styles.background_light}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <View></View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background_light: {
    fontFamily: ["serif", "Irish Grover"],
  }
});
