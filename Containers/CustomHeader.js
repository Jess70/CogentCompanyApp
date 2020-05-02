import React from "react";
import { Header } from "react-navigation";
import { View } from "react-native";
const CustomHeader = props => {
  return (
    <View>
        <SimpleLineIcons name="menu" size={24} color={tintColor} />
         <Header headerLeft={<SimpleLineIcons name="menu" size={24} color='#6a1b9a' />} {...props} />
    </View>
  );
};
export default CustomHeader;