//galio
import { Block, Text, theme } from "galio-framework";

import {
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
//argon
import {articles} from "../constants";
import React from "react";
import CardWishList from "../components/CardWishList";
const { width } = Dimensions.get("screen");
var itemCount;
class WishList extends React.Component {
  renderCards = () => {
    var wishlistCards = [];
	  for(itemCount = 0; itemCount <= 10; itemCount++){
      wishlistCards.push(
        <Block key = {itemCount}>
          <Block flex>         
            <CardWishList item={articles[5]} horizontal />
              <Block flex style={styles.lineStyle}>
              </Block>
          </Block>          
        </Block>
      )
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
  headItems: {
    width:width,
    height:46,
    color:'#A6A6A6',
    paddingTop:10,
    marginTop:10,
    marginLeft:20,
    fontSize:20,
  },
  articles: {
    padding:'2%',
  },
  lineStyle:{    
    borderColor:'#DCDCDC',
    borderWidth: 0.2,    
    marginHorizontal:'4.5%',
   },
});
export default WishList;
