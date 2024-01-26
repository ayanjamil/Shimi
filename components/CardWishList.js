import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { Block, Button as GaButton, Text, theme } from "galio-framework";
import { Button } from ".";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardWishList = (props) => {
  const { item, horizontal } = props;
  const navigation = useNavigation();
  const renderStoreInfo = (item) => {
    return (
      <Block flex style={styles.store}>
        <Block>
          <Image source={{ uri: item.storeImage }} style={styles.storelogo} />
        </Block>
        <Block>
          <Text size={15} style={{ color: "#A6A6A6", marginHorizontal: 5 }}>
            {item.storeName}
          </Text>
        </Block>
      </Block>
    );
  };
  const renderButtons = (item) => {
    return (
      <Block flex style={styles.buttons}>
        <Button
          flex
          style={styles.viewBtn}
          onPress={() => navigation.navigate("Pro")}
        >
          View
        </Button>

        <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
          <Block flex style={styles.trash}>
            <FontAwesome
              name="trash"
              size={17}
              color="black"
              style={{ alignSelf: "flex-end", paddingHorizontal: 10 }}
            />
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  };

  return (
    <Block style={styles.CardWishList}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
        <Block style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.imageStyles} />
        </Block>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
        <Block flex style={styles.productName}>
          <Text bold style={styles.CardWishListTitle}>
            {item.title}
          </Text>
          {renderStoreInfo(item)}
          {renderButtons(item)}
        </Block>
      </TouchableWithoutFeedback>
    </Block>
  );
};

CardWishList.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
};
const styles = StyleSheet.create({
  CardWishList: {
    alignContent: "flex-start",
    width: "94%",
    marginHorizontal: 20,
    height: 150,
    flexDirection: "row",
    marginVertical: 10,
  },
  imageContainer: {
    marginTop: 5,
    height: "95%",
    padding: 1,
  },
  imageStyles: {
    height: "100%",
    width: 100,
    borderRadius: 10,
  },
  productName: {
    marginLeft: 10,
    padding: 5,
  },
  CardWishListTitle: {
    marginRight: 15,
    alignContent: "flex-start",
    flexDirection: "row",
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  store: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 6,
  },
  storelogo: {
    width: theme.SIZES.BASE * 1.28,
    height: theme.SIZES.BASE * 1.28,
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  buttons: {
    flex: 0.5,
    flexDirection: "row",
  },

  viewBtn: {
    backgroundColor: "#000000",
    borderRadius: 20,
    width: 100,
    height: 35,
  },
  trash: {
    alignSelf: "flex-end",
    padding: 2,
  },
});
export default CardWishList;
