import React from "react";
import { withNavigation } from "@react-navigation/compat";
import PropTypes from "prop-types";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { Block, Button as GaButton, Text, theme } from "galio-framework";
import { Button } from ".";
import { argonTheme } from "../constants";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

class CardWishList extends React.Component {
  renderStoreInfo = () => {
    return (
      <Block flex style={styles.store}>
        <Block>
          <Image
            source={{
              uri: "https://encrypted-tbn2.gstatic.com/favicon-tbn?q=tbn:ANd9GcSrR7Ml_19H_B-zDu_Z_bQZGw0QqQ9U4wrcsyIsLYTUdUbRnR8dQRl2hFbwwMTnrsx4dn8RSieDAX0xgOMr90CKQT2BqGauj6jT9xLf-SQOorNViw",
            }}
            style={styles.storelogo}
          />
        </Block>
        <Block>
          <Text size={15} style={{ color: "#A6A6A6", marginHorizontal: "7%" }}>
            Mango
          </Text>
        </Block>
      </Block>
    );
  };
  render() {
    const { navigation, item, horizontal } = this.props;
    return (
      <Block style={styles.CardWishList}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
          <Block style={styles.imageContainer}>
            <Image
              source={require("../assets/imgs/def.png")}
              style={styles.imageStyles}
            />
            {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Pro")}>
          <Block flex style={styles.CardWishListDescription}>
            <Block flex style={styles.productName}>
              <Text bold style={styles.CardWishListTitle}>
                {item.title}
              </Text>
            </Block>
            {this.renderStoreInfo()}
            <Block flex style={styles.buttons}>
              <Button
                flex
                style={styles.viewBtn}
                onPress={() => navigation.navigate("Pro")}
              >
                View
              </Button>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Pro")}
              >
                <Block flex style={styles.trash}>
                  {/* <Image
                    source={require("../assets/imgs/bin.png")}
                    style={styles.logo}
                  /> */}
                  {/* <Entypo name="trash" size={24} color="black" /> */}
                  <FontAwesome
                    name="trash"
                    size={17}
                    color="black"
                    style={{ alignSelf: "flex-end", paddingHorizontal: 10 }}
                  />
                  {/* <Ionicons name="trash" size={20} /> */}
                </Block>
              </TouchableWithoutFeedback>
            </Block>
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
