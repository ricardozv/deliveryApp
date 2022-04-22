import React from "react";
import {View, Text, Image } from 'react-native';
import companys from '../../../assets/data/companys.json';
//import ListItem from '../../components/ListItem/listItem';
import styles from "./styles";


const company = companys[0];

const CompanyDetais = () => {
    return (
        <View style={styles.page}>
            <Image 
                source={{uri: company.image}} 
                style={styles.image}
                resizeMode="cover" 
            />
                <View style={styles.container}>
                    <Text style={styles.name}>{company.name} </Text>
                    <Text style={styles.subtitle}>
                            R$ {company.deliveryFee}  {company.minDeliveryTime} - {company.maxDeliveryTime} minutos
                    </Text>
                </View>
        </View>
    );
};


export default CompanyDetais;