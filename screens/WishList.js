import { Block, Text, theme } from "galio-framework";
import { Dimensions, ScrollView, StyleSheet, Pressable } from "react-native";
import React from "react";
import CardWishList from "../components/CardWishList";
import usables from "../constants/usables";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const WishList = (props) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const renderCards = () => {
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

  return (
    <Block>
      <Text bold style={styles.headItems}>
        {usables.length} items
      </Text>
      <Block style={styles.scrollView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderCards()}
        </ScrollView>
      </Block>
      {/* <Pressable onPress={this.goBack} style={styles.backBtn}>
        <Ionicons name={"chevron-back"} size={35} color={"black"} />
      </Pressable> */}
    </Block>
  );
};

const styles = StyleSheet.create({
  headItems: {
    width: width,
    color: "#A6A6A6",
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 30,
    marginVertical: 10,
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
  backBtn: {
    position: "absolute",
    left: 10,
  },
});

export default WishList;
