import { Block, Text, theme } from "galio-framework";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { articles } from "../constants";
import React from "react";
import CardWishList from "../components/CardWishList";
import { log } from "react-native-reanimated";
import usables from "../constants/usables";
const { width, height } = Dimensions.get("screen");
class WishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
    };
  }
  componentDidMount() {
    this.setState({ itemCount: 23 });
  }
  renderCards = () => {
    var wishlistCards = [];
    for (let i = 0; i < this.state.itemCount; i++) {
      wishlistCards.push(
        <Block key={i}>
          <Block flex>
            <CardWishList item={usables[8]} horizontal />
            <Block flex style={styles.lineStyle}></Block>
          </Block>
        </Block>
      );
    }
    return (
      <Block flex style={styles.articles}>
        {wishlistCards}
      </Block>
    );
  };

  render() {
    return (
      <Block>
        <Block>
          <Text bold style={styles.headItems}>
            {this.state.itemCount} Items
          </Text>
          <Block style={styles.scrollView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.renderCards()}
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  headItems: {
    width: width,
    color: "#A6A6A6",
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 30,
    marginTop: 10,
  },
  articles: {
    padding: 10,
  },
  lineStyle: {
    borderColor: "#DCDCDC",
    borderWidth: 0.2,
    marginLeft: 25,
    marginRight: 8,
  },
  scrollView: {
    height: "95%",
    //height of screen - navbar height
  },
});

export default WishList;
