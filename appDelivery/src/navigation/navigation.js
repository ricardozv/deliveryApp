import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../src/screens/Home/home';
import CompanyDetais from '../../src/screens/CompanyDetails/companyDetails';
// import RequestDetailScreen from './src/screens/RequestDetailScreen/requestDetailScreen';
//  import Cart from './src/screens/Cart/cart';
import OrderScreen from '../../src/screens/OrderScreen/orderScreen';
// import OrderDetails from './src/screens/OrderDetails/orderDetails';

const Stack = createNativeStackNavigator();

const RootNavigate = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{ headerStyle: {
                    backgroundColor: '#fff000'
                  }}} />

            <Stack.Screen 
                name="CompanyDetais" 
                component={CompanyDetais}
                options={{ headerStyle: {
                    backgroundColor: '#fff000'
                  }}}
            />
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home'component={Home} />
            <Tab.Screen name='Orders'component={OrderScreen} />
            <Tab.Screen name='Profile'component={OrderScreen} />
        </Tab.Navigator>
    )
}

export default HomeTabs;