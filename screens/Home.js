import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Input } from "../components";
import MasonryList from "../components/MasonryList";
import { HeaderHeight } from "../constants/utils";
import usables from "../constants/usables";

import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ImageUploadComponent from "../components/ImageUploadBtn";
import Product from "../components/Product";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const loading = false;

const Home = () => {
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

        {/* masonry layout */}
        <Block flex>
          <MasonryList items={usables} ItemComponent={Product} numColumns={2} />
        </Block>
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
