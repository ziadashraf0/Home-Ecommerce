import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import BestSelling from "../components/BestSelling";
import ProductCard from "../components/ProductCard";
import Search from "../components/Searchbar";
import CartIcon from "../components/cartIcon";
import DrawerIcon from "../components/DrawerIcon";
import { getData } from "../assets/data";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <DrawerIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.personIcon}>
            <MaterialCommunityIcons name="account" color="white" size={hp(3)} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: hp(8),
            flexDirection: "row",
          }}
        >
          <Search />
          <View style={{ height: hp(7) }}>
            <CartIcon />
          </View>
        </View>
        <View>
          <Text
            style={{ fontWeight: "bold", fontSize: wp(7), marginTop: hp(3) }}
          >
            Explore
          </Text>
        </View>
      </View>

      <View style={{ marginTop: hp(3), paddingLeft: wp(5) }}>
        <FlatList
          horizontal
          data={getData()}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={styles.ProductCard}>
              <ProductCard
                itemName={item.itemName}
                thumbnail={item.thumbnail}
                description={item.description}
                price={item.price}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ paddingLeft: wp(5), paddingRight: wp(5) }}>
        <Text style={{ fontWeight: "bold", fontSize: wp(7), marginTop: hp(3) }}>
          Best Selling
        </Text>
        <TouchableOpacity style={{ marginTop: hp(3) }}>
          <BestSelling />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(7),
  },
  personIcon: {
    alignItems: "center",
    width: wp(10),
    backgroundColor: "black",
    borderRadius: hp(1),
    justifyContent: "center",
    height: hp(4),
  },
  childContainer: {
    paddingLeft: wp(8),
    paddingRight: wp(8),
  },
  ProductCard: {
    paddingRight: wp(7),
    paddingBottom: 20,
    paddingLeft: wp(5),
  },
});
export default Home;
