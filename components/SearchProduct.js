import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AspectImage from "./AspectImage";
import { useEffect, useState } from "react";

const SearchProduct = ({ imageURI }) => {
  const [uri, setUri] = useState(imageURI);
  const onLike = () => {
    console.log("Liked a product");
    alert("Product has been added to wishlist!");
    // tag //
  };
  useEffect(() => {
    setUri(imageURI);
  }, [imageURI]);

  return (
    <View>
      <Image source={{ uri: uri }} style={styles.image} />
      <Pressable onPress={onLike} style={styles.lensBtn}>
        <MaterialCommunityIcons name="google-lens" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 285,
    height: 300,
    borderRadius: 15,
  },
  lensBtn: {
    position: "absolute",
    right: 0,
    bottom: 5,
  },
});

export default SearchProduct;
