import { View, Image, Text } from "react-native";

const OrderListItem = ({order}) => {
    return (
        <View style={{flexDirection:'row', margin:10, alignItems:'center'  }}>
            
           <Image source={{ uri: order.Company.image}} 
                  style={{width: 75, height: 75, marginRight: 5}}
           />
           <View>
           
               <Text style={{fontWeight:'bold', fontSize: 16   }} numberOfLines ={2}>
                   {order.Company.name}
               </Text> 
               <Text style={{ marginVertical: 4 }}>
                   3 items 45.80 R$ 
               </Text>
               <Text style={{paddingTop:6,  }}>
                   3 dias atrás {order.status}
               </Text>
           </View>
        </View>
    )
}

export default OrderListItem;