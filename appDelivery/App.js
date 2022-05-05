import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigate from './src/navigation/navigation';

export default function App() {
  return (

      <NavigationContainer>
        <RootNavigate />
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    height: "100%",
    paddingVertical: 30,
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // paddingVertical: 30
  }
});
