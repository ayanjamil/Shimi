import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

const SearchPin = (props) => {
  const { id, image, title } = props.pin;
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

      <Pressable onPress={onLike} style={styles.lensBtn}>
        <MaterialCommunityIcons name="google-lens" size={24} color="white" />
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
  lensBtn: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});

export default SearchPin;
