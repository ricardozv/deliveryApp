import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CompanyItem = ({ company }) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("CompanyDetails", {id: company.id});
    }
    return (
        <Pressable onPress = {onPress} style={styles.companyContainer}>
            <Image source={{ uri: company.image }} style={styles.image} />
            <View style={styles.row}>
               <View> 
                    <Text style={styles.name}>{company.name}</Text >
                    <Text style={styles.description}>
                    Tempo de entrega {company.minDeliveryTime} - {company.maxDeliveryTime} minutos</Text >
                </View>
                <View style={styles.rating}>
                    <Text>{company.rating}</Text>
                </View>
            </View>
        </Pressable>
        
    );
};

const styles = StyleSheet.create ({
    companyContainer: {
        display: "flex",
        width: "100%",
        marginVertical: 5,
        backgroundColor:'#fff000'
      },
    image: {
        borderRadius: 10,
        display: "flex",
        width: "99%",
        aspectRatio: 3.1 / 1.97,
        marginBottom:4,
    },
    name: {
        fontSize: 16,
        fontWeight: "300"
    },
    description: {
        color: "grey",
        marginBottom: 5
    }, 
    row:{
        flexDirection:"row",
        alignItems:"center"
    },
    rating:{
        marginLeft: "auto",
        backgroundColor: "#d3cbc2",
        width: 30,
        height: 30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 30,

    }
});

export default CompanyItem;