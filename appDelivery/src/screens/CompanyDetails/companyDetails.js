import React from "react";
import { View, FlatList } from 'react-native';
import companys from '../../../assets/data/companys.json';
import {Ionicons} from "@expo/vector-icons";
import Header from "./header";
import ListItem from '../../components/ListItem/listItem';
import styles from "./styles";


const company = companys[0];

const CompanyDetais = () => {
    return (
        <View style={styles.page}>
            <FlatList 
                ListHeaderComponent={() => <Header company={company} />}
                data={company.requests}
                renderItem={({item}) => <ListItem request={item} />}
                showsVerticalScrollIndicator ={false}
            />
            <Ionicons
                name="caret-back-circle-sharp"
                size={45}
                color="#fff000"
                style={styles.iconContainer}
            />
        </View>
    );
};


export default CompanyDetais;