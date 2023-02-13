import * as React from "react";
import { Searchbar } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "react-native-vector-icons";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      style={{
        backgroundColor: "white",
        width: wp(70),
        height: hp(7),
        borderRadius: hp(1.5),
      }}
      icon={() => <Feather name="search" color="black" size={hp(3)} />}
      iconColor="black"
      placeholder="Search"
      onChangeText={onChangeSearch}
      placeholderTextColor="#C1C1C6"
      value={searchQuery}
    />
  );
};

export default Search;
