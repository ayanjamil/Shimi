import { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

// use safe area views in the future for better user experience
// import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import usables from "../constants/usables";
import ProductCard from "../components/ProductCard";
import ProductRecomList from "../components/ProductRecomList";

const ProductScreen = () => {
  const [product, setProduct] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  const productId = route.params?.id;

  const fetchProduct = useCallback((productId) => {
    const fetchedProduct = usables.find((product) => product.id === productId);
    setProduct(fetchedProduct);
  }, []);

  useEffect(() => {
    fetchProduct(productId);
  }, [fetchProduct, productId]);

  const goBack = () => {
    navigation.goBack();
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <View style={{ paddingHorizontal: 60, paddingVertical: 20 }}>
        <ProductCard product={product} />
      </View>

      <View style={styles.exploreMore}>
        <View style={styles.brandContainer}>
          {/* Brand image and name */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: product.storeImage }}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
            <Text style={styles.title}>{product.storeName}</Text>
          </View>

          {/* Shop button */}
          <Pressable
            onPress={() => console.log("Shop button pressed")}
            style={styles.shopBtn}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
              Shop
            </Text>
          </Pressable>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {!!product && product.title}
        </Text>
        <ProductRecomList products={usables} />
      </View>
      {/* Navigation icon */}
      <Pressable onPress={goBack} style={[styles.backBtn, { top: 20 }]}>
        <Ionicons name={"chevron-back"} size={35} color={"black"} />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    borderRadius: 50,
  },
  title: {
    margin: 20,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 35,
  },
  backBtn: {
    position: "absolute",
    left: 10,
  },
  exploreMore: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "600",
    textAlign: "left",
    margin: 10,
  },
  brandContainer: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shopBtn: {
    backgroundColor: "black",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 50,
  },
});

export default ProductScreen;
