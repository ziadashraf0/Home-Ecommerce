import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { AntDesign } from "react-native-vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const BestSelling = () => (
  <Card style={{ width: wp(88), backgroundColor: "white", padding: wp(4) }}>
    <View style={{ flexDirection: "row" }}>
      <Card.Cover
        style={{
          backgroundColor: "white",
          width: wp(18),
          height: hp(10),
        }}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Card.Content style={{ paddingLeft: wp(10), height: hp(10) }}>
        <Text style={{ fontWeight: "bold" }} variant="titleLarge">
          Minimal Chair
        </Text>
        <Text style={{ color: "#C7C6CF" }} variant="bodyMedium">
          Lorem ipsum
        </Text>
        <View style={styles.price}>
          <Text variant="titleLarge">$125.00</Text>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <View style={styles.arrowIcon}>
              <AntDesign
                name="arrowright"
                size={hp(3)}
                color="white"
                style={{
                  borderRadius: 50,
                }}
              />
            </View>
          </View>
        </View>
      </Card.Content>
    </View>
  </Card>
);
const styles = StyleSheet.create({
  price: {
    flexDirection: "row",
    marginTop: hp(0),
    width: wp(50),
    flex: 1,
    alignItems: "flex-end",
  },
  arrowIcon: {
    backgroundColor: "black",
    width: wp(10),
    height: hp(4),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(1),
  },
});

export default BestSelling;
