import { View, Text, Image, FlatList } from 'react-native';
import orders from '../../../assets/data/orders.json';
import companys from '../../../assets/data/companys.json';
import styles from './styles';
import CartResquestItem from '../../components/CartRequestItem/cartRequestItem';

const order = orders[0];

const OrderDetailsHeader = () => {

    return (
        <View>
             <View style={styles.page}>
                <Image 
                    source={{uri: order.Company.image}} 
                    style={styles.image} 
                />
                <View style={styles.container}>
                    <Text style={styles.name}>{order.Company.name} </Text>
                    <Text style={styles.subtitle}>{order.status} &#8226 dois dias atrás </Text>
                    <Text style={styles.menuTitle}> Seus pedidos </Text>
                </View>
        </View>
        </View>
    );
};

const OrderDetails = () => {
    return (
        <FlatList 
            ListHeaderComponent={OrderDetailsHeader}
            data = {companys[1].requests}
            renderItem={({item})=> <CartResquestItem cartRequest={item} />} 
        />
    );
};

export default OrderDetails;