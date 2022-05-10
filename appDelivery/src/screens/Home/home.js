import { View, FlatList, StyleSheet } from 'react-native';
import CompanyItem from "../../components/companyItem/companyItem";
import companys from '../../../assets/data/companys.json';

export default function Home () {
  return (
    <View style={styles.container}>
      < FlatList 
        data= {companys}
        renderItem={({item})=> <CompanyItem company={item}/>} 
        showsVerticalScrollIndicator ={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    display:'flex',
    height: "100%",
    paddingVertical: 30,
    flex: 1,
    padding: 10,
    backgroundColor:'#fff000',
  }
});

