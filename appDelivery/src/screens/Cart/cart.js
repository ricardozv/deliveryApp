import { useState } from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import companys from "../../../assets/data/companys.json";
import CartResquestItem from '../../components/CartRequestItem/cartRequestItem';

const request = companys[0];

const Cart = () => { 
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{request.name}</Text>
            <Text style={{fontWeight: '600', marginTop: 10, fontSize: 18}}>Seu pedido</Text>
         
                <FlatList 
                    data={request.requests}
                    renderItem={
                    ({item}) => <CartResquestItem 
                    cartRequest={item}/>} 
                />
            
            <View style ={styles.separator} />
                <View style={styles.button}>
                    <Text style={styles.TextProdButton}>
                         Fazer pedido
                    </Text>
                </View>
        </View>

    );
};

const styles = StyleSheet.create({
    page: {
        flex:1,
        width: "100%",
        paddingVertical: 20,
        backgroundColor:'#fff000'
    },
    name:{
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10
    },
    row:{
        flexDirection:"row",
        alignItems: "center",
        marginTop: 20
    },
    button:{
        backgroundColor:'black',
        marginTop:'auto',
        alignItems:'center',
        marginLeft: 13,
        marginRight: 14,
        borderRadius: 5
            
    },
    TextProdButton: {
        textAlign:'center',
        marginTop: 25,
        color:'#fff000',
        fontSize: 16,
        fontWeight:'bold',
        marginVertical: 15,
        paddingBottom: 6

    },
    quantity:{
        backgroundColor:"lightgrey",
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginRight: 7,
        borderRadius: 3
    }


});

export default Cart;