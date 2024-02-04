// explore list, masonry list but uses explore list usables, also width is reduced to make it 3 columns

import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  RefreshControl,
  View,
} from "react-native";

import SearchRecomCard from "./SearchRecomCard";
import MasonryList from "./MasonryList";

const SearchRecomList = ({
  products,
}) => {

  return (
    <MasonryList products={products} ItemComponent={SearchRecomCard} numColumns={3}></MasonryList>
  );
};

export default SearchRecomList;
