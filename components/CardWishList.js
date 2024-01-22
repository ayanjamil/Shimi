import React from "react";
import { withNavigation } from "@react-navigation/compat";
import PropTypes from "prop-types";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { Block, Button as GaButton, Text, theme } from "galio-framework";
import { Button } from ".";
import { FontAwesome } from "@expo/vector-icons";

class CardWishList extends React.Component {
  renderStoreInfo = (item) => {
    return (
      <Block flex style={styles.store}>
        <Block>
          <Image source={{ uri: item.storeImage }} style={styles.storelogo} />
        </Block>
        <Block>
          <Text size={15} style={{ color: "#A6A6A6", marginHorizontal: "7%" }}>
            {item.storeName}
          </Text>
        </Block>
      </Block>
    );
  };
  renderButtons = (item) => {
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
  render() {
    const { navigation, item, horizontal } = this.props;
    return (
      <Block style={styles.CardWishList}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
          <Block style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
          <Block flex style={styles.CardWishListDescription}>
            <Block flex style={styles.productName}>
              <Text bold style={styles.CardWishListTitle}>
                {item.title}
              </Text>
            </Block>
            {this.renderStoreInfo(item)}
            {this.renderButtons(item)}
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}
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
    height: "90%",
    flexDirection: "row",
    marginVertical: 10,
  },
  imageContainer: {
    marginTop: 5,
    height: "95%",
  },
  imageStyles: {
    height: "100%",
    width: 100,
    borderRadius: 10,
  },
  CardWishListDescription: {
    marginLeft: 10,
    alignContent: "flex-start",
    padding: "1%",
  },
  productName: {
    alignContent: "flex-start",
    flex: 1,
  },
  CardWishListTitle: {
    alignContent: "flex-start",
    flexDirection: "row",
    fontSize: 16,
    fontStyle: "bold",
  },
  store: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 2,
  },
  storelogo: {
    width: theme.SIZES.BASE * 1.28,
    height: theme.SIZES.BASE * 1.28,
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  viewBtn: {
    backgroundColor: "#000000",
    borderRadius: 20,
    width: "35%",
    height: "70%",
    marginLeft: 0,
    alignSelf: "flex-start",
  },
  trash: {
    alignSelf: "flex-end",
  },
});
export default withNavigation(CardWishList);
