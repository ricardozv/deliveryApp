import {View, Text, StyleSheet, Image} from "react-native";

const ListItem = ({dish}) =>{
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.5}}>
                <Text style={styles.name} numberOfLines ={1}>{dish.name}</Text>
                <Text style={styles.description}numberOfLines ={4}>{dish.description}</Text>
                <Text style={styles.prices}>R$ {dish.price}</Text>
            </View>
            {dish.image && (
            <Image source = {{uri: dish.image}} style = {styles.image} />
            )}
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:4,
        paddingVertical:3,
        margin:10,
        paddingBottom:8,
        borderBottomColor:"lightgrey",
        borderBottomWidth:1.5,
        flexDirection:"row"
    },
    name:{
        fontWeight:"bold",
        fontSize:15,
        letterSpacing:0.5
    },
    description:{
        color:"gray",
        marginVertical: 1
    },
    prices:{
        fontWeight:"bold",
        fontSize:14
    },
    image:{
        height: 80,
        borderRadius: 45,
        aspectRatio:1,
        marginLeft: "auto",
        //justifyContent:"center",
        //alignItems:"center",
    }


})

export default ListItem;

