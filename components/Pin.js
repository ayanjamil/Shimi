import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const Pin = (props) => {
  const { id, image, title } = props.pin;

  const navigation = useNavigation();
  const [ratio, setRatio] = useState(1);
  
  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);
  
  const goToPinPage = () => {
    console.log("Pin pressed")
  };

  const onLike = () => { console.log("Liked a pin") };
  
  const goToMore = () => {
    console.log("More pressed")
   };

  return (
    <Pressable onPress={goToPinPage} style={styles.pin}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={16} color="white" />
        </Pressable>
        <Pressable onPress={goToMore} style={styles.moreBtn}>
          <Feather name="copy" size={16} color="white" />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
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

export default Pin;
