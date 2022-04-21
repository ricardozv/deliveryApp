import React from "react";
import {View, Text, StyleSheet, Image } from 'react-native';
import companys from '../../../assets/data/companys.json';
import {Ionicons} from '@expo/vector-icons';

const company = companys[0];

const CompanyDetais = () => {
    return (
        <View style={styles.page}>
            <Image source={{uri: company.image}} 
                    style={styles.image}
                    //resizeMode="cover" 
                    />
               
                <Ionicons 
                name="arrow-back-circle" 
                size={38} 
                color="#fff000" 
                style={styles.iconContainer} 
                />
                    <View style={styles.container}>
                        <Text style={styles.name}>{company.name} </Text>
                        <Text style={styles.subtitle}>
                            R$ {company.deliveryFee}  {company.minDeliveryTime} - {company.maxDeliveryTime} minutos
                        </Text>
                    </View>
                <View style={styles.rating}>
                    <Text>{company.rating}</Text>
                </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    iconContainer:{
        position: "absolute",
        top: 18,
        left: 25,

    },
    image:{
        width: "100%",
        aspectRatio: 5 / 3,
    },
    name:{
        fontSize:16
    },
    subtitle: {
        fontSize: 15,
        color:"grey"

    },
    container:{
        padding: 10,
    },
    rating:{
        marginLeft: "auto",
        backgroundColor: "#fff",
        width: 30,
        height: 30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 50,
        right: 16,


    }
});

export default CompanyDetais;