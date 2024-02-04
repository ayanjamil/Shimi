// explore list, masonry list but uses explore list usables, also width is reduced to make it 3 columns

import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  RefreshControl,
  View,
} from "react-native";

import ProductRecomCard from "./ProductRecomCard";
import MasonryList from "./MasonryList";

const ProductRecomList = ({
  products,
}) => {
  const width = useWindowDimensions().width;
  const numColumns = Math.ceil(width / 150);

  return (
    <MasonryList products={products} ItemComponent={ProductRecomCard} numColumns={3}></MasonryList>
  );
};

export default ProductRecomList;
