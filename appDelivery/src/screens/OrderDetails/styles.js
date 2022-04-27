import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page:{
        flex:1,
    },
    iconContainer:{
        position: "absolute",
        top: 18,
        left: 15,
    },
    image:{
        width: "100%",
        aspectRatio: 5 / 3,
        borderRadius: 10
    },
    name:{
        fontSize:23,
        
    },
    subtitle: {
        fontSize: 15,
        color:"grey"

    },
    container:{
        padding: 10,
    },
    status:{
        fontWeight:'bold'
    }
   // rating:{
   //     marginLeft: "auto",
   //     backgroundColor: "#fff",
   //     width: 30,
   //     height: 30,
   //     justifyContent:"center",
   //     alignItems:"center",
   //     borderRadius: 50,
    //    right: 16,


    //}
});