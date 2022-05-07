import { View, FlatList, StyleSheet} from 'react-native';
import OrderListItem from '../../components/orderListItem/orderListItem';
import orders from '../../../assets/data/orders.json';

const OrderScreen = () => {
    return (
        <View style={ styles.container }>
            <FlatList 
                data={orders}
                renderItem={({item})=> 
                <OrderListItem order={item} />} 
            />
        </View>
    );
};

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
      width: "100%",
      paddingTop: 50
      // paddingVertical: 30
    }
  });

export default OrderScreen;