import { View, Image, Text } from "react-native";

const OrderListItem = ({order}) => {
    return (
        <View>
           <Image source={{ uri: order.Company.image}} 
                  style={{width: 100, height: 100}}
           />
           <View>
               <Text>
                   {order.Company.name}
               </Text>
           </View>
        </View>
    )
}

export default OrderListItem;