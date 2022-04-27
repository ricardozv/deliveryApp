import {View, Text, StyleSheet, FlatList } from 'react-native';

const CartResquestItem = ({cartRequest}) => { 
    return(
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>1</Text>
            </View>
            <Text style={{fontWeight:"600"}}>{cartRequest.name}</Text>
            <Text style={{marginLeft:"auto"}}>{cartRequest.price} R$ </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        alignItems: "center",
        marginTop: 20
    },
    quantityContainer:{
        backgroundColor:"lightgrey",
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginRight: 7,
        borderRadius: 3
    }


});
export default CartResquestItem;