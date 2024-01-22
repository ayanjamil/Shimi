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
    return (
      <Block flex style={styles.articles}>
        {usables.map((item, index) => (
          <Block key={index}>
            <Block flex>
              <CardWishList item={item} horizontal />
              <Block flex style={styles.lineStyle}></Block>
            </Block>
          </Block>
        ))}
      </Block>
    );
  };

  render() {
    return (
      <Block>
        <Block>
          <Text bold style={styles.headItems}>
            {usables.length} Items
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
  },
});

export default WishList;
