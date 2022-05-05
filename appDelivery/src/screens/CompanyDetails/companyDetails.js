import { View, FlatList } from 'react-native';
import companys from '../../../assets/data/companys.json';
import {Ionicons} from "@expo/vector-icons";
import ListItem from '../../components/ListItem/listItem';
import Header from "./header";
import styles from "./styles";

import { useRoute, useNavigation } from "@react-navigation/native";

const company = companys[1];

const CompanyDetails = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params?.id;

    console.warn(id);
    return (
        <View style={styles.page}>
            <FlatList 
                ListHeaderComponent={() => <Header company={company} />}
                data={company.requests}
                renderItem={({item}) => <ListItem request={item} />}
                showsVerticalScrollIndicator ={false}
                keyExtractor = { (item) => item.id }
            />
            <Ionicons
                onPress={() => navigation.goBack()}
                name="caret-back-circle-sharp"
                size={40}
                color="#fff000"
                style={styles.iconContainer}
            />
        </View>
    );
};


export default CompanyDetails;