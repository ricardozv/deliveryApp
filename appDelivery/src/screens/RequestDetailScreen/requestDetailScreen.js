import { useState } from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import companys from "../../../assets/data/companys.json";
import { AntDesign } from "@expo/vector-icons";

const request = companys[0].requests[0]

const RequestDetailScreen = () => {

const [quantity, setQuantity] = useState(1);

const onMinus = () =>{

    if (quantity > 1) {
        setQuantity (quantity - 1);
        }
    };

const onPlus = () =>{
        setQuantity (quantity + 1);
    };

const getTotal = () => {
    return (request.price * quantity).toFixed(2)
}

    return (
        <View style={styles.page}>
             <Image 
                source={{uri: request.image}} 
                style={styles.image}
                resizeMode="cover" 
            />
            <Text style={styles.name}>{request.name}</Text>
            <Text style={styles.description}>{request.description}</Text>
            <View style ={styles.separator} />
                <View style={styles.row}>

                    <AntDesign 
                    name = "minuscircleo" 
                    size={60} 
                    color={"black"} 
                    onPress={onMinus} />
                    
                    <Text style={styles.quantity}>{quantity}</Text>
                    
                    <AntDesign 
                    name = "pluscircleo" 
                    size={60} 
                    color={"black"} 
                    onPress={onPlus}/>

                </View>
                <View style={styles.button}>
                    <Text style={styles.TextProdButton}>
                        Adicionar produtos {quantity} total  {getTotal()} R$
                    </Text>
                </View>

        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        width: "100%",
        paddingVertical: 20
    },
    name:{
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 10
    },
    row:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center",
        marginTop: 30
    },
    quantity:{
        fontSize: 20,
        fontWeight:"bold",
        marginHorizontal: 8
    },
    button:{
        backgroundColor:'black',
        marginTop:'auto',
        alignItems:'center',
        marginLeft: 13,
        marginRight: 14,
            
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
    image:{
            width: "100%",
            aspectRatio: 5 / 3,
    }


});

export default RequestDetailScreen;