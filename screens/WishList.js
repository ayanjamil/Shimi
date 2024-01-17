//galio
import { Block, Text, theme } from "galio-framework";

import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
//argon
import {  argonTheme, articles } from "../constants";
import React from "react";
import CardWishlist from "../components/CardWishlist";
const { width } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
var itemCount;

class WishList extends React.Component {
  renderProduct = (item) => {
    const { navigation } = this.props;
    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`item-${item.title}`}
        onPress={() => navigation.navigate("Pro", { product: item })}
      >
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    var wishlistCards = [];
	  for(itemCount = 0; itemCount <= 10; itemCount++){
      wishlistCards.push(
        <Block key = {itemCount}>
          <Block flex>         
            <CardWishlist item={articles[5]} horizontal />
          </Block>
        </Block>
      )
      // console.log(itemCount)
	  }    
    return (      
      <Block flex style={styles.articles}>
        { wishlistCards }      
      </Block>
    );
  };
  render() {
    return (
      <Block >
        <Block >
          <Text bold style={styles.headItems}>{itemCount}10 Item</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.renderCards()}
          </ScrollView>
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  headItems: {
    width:width,
    height:46,
    color:'#A6A6A6',
    paddingTop:10,
    marginTop:10,
    marginLeft:20,
    fontSize:20,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
  },
  articles: {
    padding:'2%',
  },
});

export default WishList;
