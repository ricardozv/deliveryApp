import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home/home';
import CompanyDetais from './src/screens/CompanyDetails/companyDetails';

export default function App() {
  return (
    <View style={styles.container}>
       {/* <Home /> */}
         < CompanyDetais /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    height: "90%",
    paddingVertical: 30,
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 10,
    // paddingVertical: 30
  }
});
