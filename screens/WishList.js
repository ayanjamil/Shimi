import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect, useState, useContext } from "react";
import CardWishList from "../components/CardWishList";
import usables from "../constants/usables";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getWishlistApiUrl } from "../api/url";
import { AuthContext } from "../context/AuthContext";

const { width, height } = Dimensions.get("screen");

const WishList = (props) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userToken } = useContext(AuthContext);

  const getData = useCallback(async () => {
    const url = getWishlistApiUrl(userToken);
    console.log("from wishslist", url);
    setLoading(true);
    try {
      const response = await fetch(url);
      const searchResultsData = await response.json();
      console.log(searchResultsData);
      setResult(searchResultsData.data);
    } catch (error) {
      Alert.alert("No product in your Wishlist:((");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const renderCards = () => {
    return (
      <Block flex style={styles.articles}>
        {result.map((item, index) => (
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
      {!loading && result ? (
        <Block>
          <Text bold style={styles.headItems}>
            {result.length} items
          </Text>
          <Block style={styles.scrollView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {renderCards()}
            </ScrollView>
          </Block>
        </Block>
      ) : (
        <ActivityIndicator
          center
          size="large"
          color="black"
        ></ActivityIndicator>
      )}
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
