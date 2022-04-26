import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home/home';
import CompanyDetais from './src/screens/CompanyDetails/companyDetails';
import RequestDetailScreen from './src/screens/RequestDetailScreen/requestDetailScreen';
import Cart from './src/screens/Cart/cart';
import OrderScreen from './src/screens/orderScreen/orderScreen';

export default function App() {
  return (
    <View style={styles.container}>
        {/*  <Home /> */}
        {/* < CompanyDetais /> */}
         {/*< RequestDetailScreen /> */}
         <OrderScreen />
         {/* < Cart /> */}
      <StatusBar style="auto" />
    </View>
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
