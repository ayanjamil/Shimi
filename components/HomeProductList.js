import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  RefreshControl,
  View,
} from "react-native";

import Product from "./Product";
import MasonryList from "./MasonryList";

const HomeProductList = ({
  products,
}) => {
  return (
    <MasonryList products={products} ItemComponent={Product} numColumns={2} />
  );
};

export default HomeProductList;
