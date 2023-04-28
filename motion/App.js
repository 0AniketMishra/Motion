import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import BottomTabs from './Components/BottomTabs';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <NavigationContainer >
      <AuthProvider>
      <StackNavigator/>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
