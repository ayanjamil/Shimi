import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AspectImage from "./AspectImage";
import { getExploreApiUrl } from "../api/url";
import { useCallback, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getWishlistApiUrl } from "../api/url";

const Product = (props) => {
  const { id, image, title } = props.product;
  const navigation = useNavigation();
  const { userToken } = useContext(AuthContext);
  const goToProductPage = () => {
    navigation.navigate("ProductScreen", { id });
  };
  const onLike = useCallback(async (prodData) => {
    console.log("liked");
    console.log(prodData);
    const url = getWishlistApiUrl(userToken);
    console.log("from product page", url);
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prodData),
      });
    } catch (error) {
      //Alert user and go back to home screen
      Alert.alert("Error");
      console.log(error);
    }
  }, []);

  // const onLike = () => {
  //   console.log("Liked a product");
  // };

  const onCopy = () => {
    console.log("Copy button pressed");
  };

  return (
    <Pressable onPress={goToProductPage} style={styles.product}>
      <View>
        <AspectImage image={image} />
        <Pressable
          onPress={() => {
            onLike(props.product);
          }}
          style={styles.heartBtn}
        >
          <AntDesign name="hearto" size={16} color="white" />
        </Pressable>
        <Pressable onPress={onCopy} style={styles.moreBtn}>
          <Feather name="copy" size={16} color="white" />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  product: {
    width: "100%",
    padding: 6,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  heartBtn: {
    backgroundColor: "black",
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
  },
  image: {
    width: "100%",
    borderRadius: 15,
  },
  moreBtn: {
    backgroundColor: "black",
    position: "absolute",
    top: 38,
    right: 10,
    padding: 5,
    borderRadius: 50,
  },
});

export default Product;
