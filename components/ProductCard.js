import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import AspectImage from "./AspectImage";
import { useAppContext } from "../context/AppContext";
import { useCallback, useContext } from "react";

const ProductCard = (props) => {
  const { id, image, title } = props.product;
  const { dispatch } = useAppContext();
  const onLike = useCallback(async (productData) => {
    dispatch({ type: "dataAdd", payload: productData });
  }, []);
  return (
    <View>
      <AspectImage image={image} />

      <Pressable
        onPress={() => {
          onLike(props.product);
        }}
        style={styles.heartBtn}
      >
        <Ionicons name="heart-outline" size={24} color="white" />
      </Pressable>

      <Pressable style={styles.linkBtn}>
        <Entypo name="link" size={24} color="white" />
      </Pressable>

      <Pressable style={styles.pricetag}>
        <Ionicons name="pricetag-outline" size={20} color="black" />
        <Text style={styles.priceText}>£200</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    borderRadius: 15,
  },
  linkBtn: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  heartBtn: {
    position: "absolute",
    right: 10,
    bottom: 40,
  },
  pricetag: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 50,
    left: 10,
    top: 10,
  },
  priceText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProductCard;
