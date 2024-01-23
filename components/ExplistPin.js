// this component is for the pins in the explore page
// key difference is that here no icons are used, and title and brand icons are displayed

import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const ExplistPin = (props) => {
  const { id, image, title } = props.pin;

  const navigation = useNavigation();
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const goToPinPage = () => {
    navigation.navigate("Explore", { id });
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
        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Image source={require("../assets/imgs/shimi.png")} style={styles.icon} />
            <Text style={styles.subtitle} numberOfLines={2}>
               Brand name
            </Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
            {title}
        </Text>
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
    marginTop: 0,
    color: "#181818",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    margin: 5,
    marginBottom: 0,
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
  icon: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginLeft: 5,
    marginTop: 5,
  },
});

export default ExplistPin;
