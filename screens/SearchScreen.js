// screen for search page results
// need to implement this in screens.js, take care of product routing

import { useEffect, useState } from "react";
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
import ProductRecomList from "../components/ProductRecomList";
import SearchProduct from "../components/SearchProduct";

const SearchScreen = () => {
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <View style={{ paddingHorizontal: 60, paddingVertical: 20 }}>
        <SearchProduct product={usables[0]} />
      </View>

      <View style={styles.exploreMore}>
        <Text style={styles.title} numberOfLines={2}>
          Search results
        </Text>
        <ProductRecomList products={usables} />
      </View>

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
    marginHorizontal: 10,
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

export default SearchScreen;
