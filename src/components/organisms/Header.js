import React, { useState } from "react";
import { View, Image } from "react-native";
import { Avatar, SearchBar } from "react-native-elements";
import { PrimerLeague } from "../../assets/images/index";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const updateSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View className="px-2 mx-auto items-center justify-between space-y-0 flex-row space-x-8 bg-white drop-shadow-xl bg-[#37003CE6]">
      <Image
        source={PrimerLeague}
        className="block w-36 h-14 bg-white rounded-r-full"
      />

      <View>
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={searchQuery}
          round
          lightTheme
        />
      </View>
    </View>
  );
};

export default Header;
