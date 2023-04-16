import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
