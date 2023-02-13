import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { AntDesign } from "react-native-vector-icons";
import { FontAwesome } from "react-native-vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const ProductCard = ({ itemName, price, description, thumbnail }) => (
  <Card
    style={{
      width: wp(50),
      backgroundColor: "white",
    }}
  >
    <View
      style={{
        position: "absolute",
        zIndex: 1,
        marginLeft: wp(37),
        marginTop: hp(2.5),
      }}
    >
      <View
        style={{
          backgroundColor: "#FF6666",
          width: wp(8),
          alignItems: "center",
          justifyContent: "center",
          height: hp(4),
          borderRadius: hp(6),
        }}
      >
        <FontAwesome name="heart" color="white" size={hp(2)} />
      </View>
    </View>
    <Card.Cover
      style={{ padding: wp(4), backgroundColor: "white" }}
      source={thumbnail}
    />
    <Card.Content>
      <Text style={{ fontWeight: "bold" }} variant="titleLarge">
        {itemName}
      </Text>
      <Text variant="bodyMedium">{description}</Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: hp(1),
        }}
      >
        <Text variant="titleLarge">{price}</Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <AntDesign name="pluscircle" size={hp(3)} />
        </View>
      </View>
    </Card.Content>
  </Card>
);

export default ProductCard;
