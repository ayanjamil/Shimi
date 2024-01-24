import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const ProductCard = (props) => {
  const { id, image, title } = props.product;

  const navigation = useNavigation();
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const onLike = () => {
    console.log("Liked a pin");
  };


  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={[styles.image, { aspectRatio: ratio }]}
      />

      <Pressable onPress={onLike} style={styles.heartBtn}>
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
  pin: {
    width: "100%",
    padding: 4,
  },
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
