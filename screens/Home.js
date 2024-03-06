import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Block, theme } from "galio-framework";
import { Input } from "../components";
import MasonryList from "../components/MasonryList";
import { HeaderHeight } from "../constants/utils";
import { FontAwesome } from "@expo/vector-icons";
import ImageUploadComponent from "../components/ImageUploadBtn";
import Product from "../components/Product";
import { getExploreApiUrl } from "../api/url";
import { useAppContext } from "../context/AppContext";

const { width } = Dimensions.get("screen");

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { homePageData, homePageDispatch } = useAppContext();

  const getData = useCallback(async () => {
    const url = getExploreApiUrl();
    setLoading(true);
    try {
      const response = await fetch(url);
      const searchResultsData = await response.json();
      homePageDispatch({
        type: "setHomePageData",
        payload: searchResultsData.data,
      });
    } catch (error) {
      Alert.alert("Sorry we couldn't find anything for you at the moment :((");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Block flex style={styles.homeContainer}>
      <ScrollView style={{ width, marginTop: "20%" }}>
        <Block flex style={styles.homeTop}>
          {/* shimi logo */}
          <Block middle style={{ marginTop: 40 }}>
            <Image
              source={require("../assets/imgs/shimi.png")}
              style={{ marginBottom: 30 }}
            />
          </Block>
          {/* search bar */}
          <Block flex>
            <Input
              placeholder="Search Shimi"
              shadowless
              iconContent={
                <FontAwesome
                  name="search"
                  size={16}
                  style={{ marginRight: 10 }}
                  color="grey"
                />
              }
            />
            <ImageUploadComponent />
          </Block>
        </Block>
        {!loading && homePageData ? (
          <Block flex>
            <MasonryList
              items={homePageData}
              ItemComponent={Product}
              numColumns={2}
            />
          </Block>
        ) : (
          <ActivityIndicator
            center
            size="large"
            color="black"
          ></ActivityIndicator>
        )}
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    width: width,
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  homeTop: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    // marginHorizontal: theme.SIZES.BASE,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  camBtn: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});

export default Home;
