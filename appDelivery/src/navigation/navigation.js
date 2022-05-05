import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../src/screens/Home/home';
import CompanyDetails from '../../src/screens/CompanyDetails/companyDetails';
// import RequestDetailScreen from './src/screens/RequestDetailScreen/requestDetailScreen';
import Cart from '../../src/screens/Cart/cart';
import OrderScreen from '../../src/screens/OrderScreen/orderScreen';
// import OrderDetails from './src/screens/OrderDetails/orderDetails';

import { Foundation, FontAwesome, Octicons, FontAwesome5 } from '@expo/vector-icons';

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
                name="CompanyDetails" 
                component={CompanyDetails}
                options={{ 
                    headerShown: false
                  }}
            />
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle= {{ height:50, backgroundColor:'#fff000'}}>
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation 
                            name="home" 
                            size={23} 
                            color={color} />
                    )
                }} 
            />

            <Tab.Screen 
                name='Busca'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 
                            name="search-location" 
                            size={23} 
                            color={color} />
                    )
                }} 
            />

            <Tab.Screen 
                name='Pagar'
                component={Cart}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome 
                            name="money" 
                            size={22} 
                            color={color} />
                    )
                }} 
            />
            
            <Tab.Screen 
                name='Orders'
                component={OrderScreen} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Octicons
                            name="list-unordered"
                            size={23}
                            color={color} 
                        />
                    )
                }}
            />
            
            <Tab.Screen 
                name='Profile'
                component={CompanyDetails}
                options={{
                    tabBarIcon: ({color}) => (
                        <Foundation 
                            name="torso"
                            size={23}
                            color={color}
                        />
                    )
                }} 
            />
        
        </Tab.Navigator>
    );
};

export default RootNavigate;