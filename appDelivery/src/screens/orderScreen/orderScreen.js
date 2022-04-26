
import {View, Text, FlatList} from 'react-native';
import OrderListItem from '../../components/orderListItem/orderListItem';
import orders from '../../../assets/data/orders.json';

const OrderScreen = () => {
    return (
        <View style={{flex: 1, width: "100%", paddingTop: 50}}>
            <FlatList 
                data={orders}
                renderItem={({item})=> 
                <OrderListItem order={item} />} 
                />
        </View>
    );
};

export default OrderScreen;