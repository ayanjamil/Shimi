// this component is for the products in the search page
// key difference is that here no icons are used, and title and brand icons are displayed

import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import AspectImage from "./AspectImage";

const SearchRecomCard = (props) => {
  const { position, price, thumbnail, title, source, source_icon } =
    props.product;
  // once there's integrated data ids, this can redirect each pin to the product page
  const goToProduct = () => {
    console.log("goToProduct", price.value);
  };
  return (
    <Pressable style={styles.product} onPress={goToProduct}>
      <View>
        <AspectImage image={thumbnail} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "80%",
          }}
        >
          <Image source={{ uri: source_icon }} style={styles.icon} />
          <Text style={styles.subtitle} numberOfLines={1}>
            {source}
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
  product: {
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

export default SearchRecomCard;
