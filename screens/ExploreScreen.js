
import { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from "react-native";

// use safe area views in the future for better user experience
// import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import pins from "../constants/pins";
import ExplorePin from "../components/ExplorePin";

import { Entypo } from "@expo/vector-icons";
import ExploreList from "../components/ExploreList";

const ExploreScreen = () => {
  const [pin, setPin] = useState(null);
  const [image, setImage] = useState(null);
  const [ratio, setRatio] = useState(1);

  const navigation = useNavigation();
  const route = useRoute();

  const pinId = route.params?.id;

  const fetchPin = (pinId) => {
    const pin = pins.find((pin) => pin.id === pinId);
    setPin(pin);
    setImage(pin.image);
  };
 
  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);
 
  useEffect(() => {
    fetchPin(pinId);
  }, [pinId]);

  const goBack = () => {
    navigation.goBack();
  };

  if (!pin) {
    return <Text>Pin not found</Text>;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <View style={{ paddingHorizontal: 60, paddingVertical: 20 }}>
        <ExplorePin pin={pin} />
      </View>

      <View style={styles.exploreMore}>
        <View style={styles.brandContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/imgs/shimi.png")}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
            <Text style={styles.title}>Brand Name</Text>
          </View>
          <Pressable
            onPress={() => console.log("Follow button pressed")}
            style={styles.shopBtn}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
              Shop
            </Text>
          </Pressable>
        </View>
        <Text style={styles.title} numberOfLines={2}>{ !!pin && pin.title }</Text>
        <ExploreList pins={pins} />
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

export default ExploreScreen;
