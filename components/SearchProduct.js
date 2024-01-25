import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AspectImage from "./AspectImage";

const SearchProduct = (props) => {
  const { id, image, title } = props.product;

  const onLike = () => {
    console.log("Liked a product");
  };

  return (
    <View>
      <AspectImage image={image} />

      <Pressable onPress={onLike} style={styles.lensBtn}>
        <MaterialCommunityIcons name="google-lens" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    width: "100%",
    padding: 4,
  },
  image: {
    width: "100%",
    borderRadius: 15,
  },
  lensBtn: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});

export default SearchProduct;
